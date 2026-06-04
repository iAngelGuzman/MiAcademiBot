// ==========================================
// MÓDULO DE LÓGICA Y CONTROL: app.js
// ==========================================

// Referencias globales del DOM
let chatContainer, appInput, suggestionsBox, btnMic, trackingList;
let currentProfile = ''; // Inicializamos vacío para permitir la primera carga limpia
let recognition;
let isListening = false;

// Esta función es invocada de forma segura cuando la interfaz gráfica existe en el DOM
function initAppAppearence() {
    chatContainer = document.getElementById('chatContainer');
    appInput = document.getElementById('appInput');
    suggestionsBox = document.getElementById('suggestionsBox');
    btnMic = document.getElementById('btn-mic');
    trackingList = document.getElementById('trackingList');
    
    // Inicializar el reconocimiento de voz por hardware
    initVoiceRecognition();
    console.log("AcademiBot: DOM mapeado y listo.");
}

// Control nativo de navegación entre pantallas del Smartphone
function navigateTo(screenId) {
    document.querySelectorAll('.app-screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
    }

    // Automatismo: Cerrar el Dropdown de herramientas si se salta de pantalla
    const dropdownEl = document.getElementById('headerDropdownMenuButton');
    if (dropdownEl && bootstrap.Dropdown.getInstance(dropdownEl)) {
        bootstrap.Dropdown.getInstance(dropdownEl).hide();
    }
}

// Disparador principal de los botones del menú de inicio
function startChat(profile) {
    // 1. Saltamos visualmente a la pantalla del chatbot
    navigateTo('screen-chat');
    
    // 2. CORRECCIÓN CRÍTICA: Forzamos el reseteo del estado del perfil actual
    // Esto obliga a switchProfile a reconstruir la base de conocimientos desde cero
    currentProfile = ''; 
    
    // 3. Invocamos la construcción del canal correspondiente
    switchProfile(profile);
}

// Construcción y renderizado dinámico del canal seleccionado
function switchProfile(profile) {
    // Si el usuario da clic en el perfil en el que ya está, ignoramos para mitigar sobrecarga
    if (currentProfile === profile) return;
    currentProfile = profile;

    // Validación de seguridad para la base de conocimientos de Hephys/UV
    if (!dataProfiles[profile]) {
        console.error("Error: El perfil '" + profile + "' no está registrado en knowledge.js");
        return;
    }

    // Sincronizar el título del encabezado móvil de forma conforme
    const headerTitle = document.getElementById('headerTitle');
    if (headerTitle) {
        headerTitle.innerText = dataProfiles[profile].title;
    }

    // Vaciar el contenedor de burbujas anterior e inyectar el saludo oficial del canal
    if (chatContainer) {
        chatContainer.innerHTML = '';
        pushMessage(dataProfiles[profile].welcome, 'bot');
    }

    // Renderizar los nuevos chips/botones de sugerencias rápidas en la parte inferior
    if (suggestionsBox) {
        suggestionsBox.innerHTML = '';
        if (dataProfiles[profile].chips && dataProfiles[profile].chips.length > 0) {
            dataProfiles[profile].chips.forEach(chip => {
                const button = document.createElement('button');
                button.className = "btn btn-outline-primary suggestion-chip text-truncate";
                button.innerText = chip.label;
                button.onclick = () => sendQuickMessage(chip.text);
                suggestionsBox.appendChild(button);
            });
        }
    }
}

// Carga e inyección del módulo interactivo de seguimiento de trámites
function viewTracking() {
    navigateTo('screen-tracking');
    if (trackingList && dataProfiles[currentProfile]) {
        trackingList.innerHTML = dataProfiles[currentProfile].trackingData || 
            `<p class="text-muted p-3 text-center small">No hay trámites activos registrados en Hephys.</p>`;
    }
}

// Manejo dinámico de respuestas rápidas y redirección de flujos
function sendQuickMessage(text) {
    // Apagar micrófono si el usuario interactúa con un chip rápido
    if (isListening && recognition) recognition.stop();

    // Interceptor lógico para redirigir nativamente a las sub-pestañas integradas
    if (text === "abrir_fechas_ventanilla") {
        navigateTo('screen-dates');
        return;
    }

    const lowerText = text.toLowerCase();
    if (lowerText === "subir mi voucher de pago" || lowerText === "subir constancia de biblioteca" || lowerText === "subir constancia de inscripción") {
        pushMessage(text, 'user');
        setTimeout(() => { 
            const fileInput = document.getElementById('fileAttachmentInput');
            if (fileInput) fileInput.click();
        }, 600);
        return;
    }
    
    pushMessage(text, 'user');
    setTimeout(() => { analyzeAndReply(text); }, 600);
}

// Nueva función de apoyo para abrir las sub-pestañas del historial de forma conforme
function openHistoryTab(tabName) {
    navigateTo('screen-history');
    const triggerEl = document.querySelector(`#tab-${tabName}`);
    if (triggerEl) {
        const tab = new bootstrap.Tab(triggerEl);
        tab.show();
    }
}

// Procesar el envío del input de texto de la barra inferior
function processUserMessage() {
    if (!appInput) return;
    const text = appInput.value.trim();
    if (!text) return;
    
    // Apagar micrófono de forma preventiva si se envía texto manualmente
    if (isListening && recognition) {
        recognition.stop();
    }

    pushMessage(text, 'user');
    appInput.value = '';
    
    setTimeout(() => { analyzeAndReply(text); }, 700);
}

// Motor de coincidencia por palabras clave e intenciones institucionales
function analyzeAndReply(text) {
    const sanitizedText = text.toLowerCase().trim();
    
    // 1. Comprobar correspondencia en sub-ramificaciones secundarias de diálogo
    if (typeof subKnowledgeBase !== 'undefined' && subKnowledgeBase[sanitizedText]) {
        const subKB = subKnowledgeBase[sanitizedText];
        pushMessage(subKB.response, 'bot');
        if (subKB.menu) injectActionMenu(subKB.menu);
        return;
    }

    // 2. Buscar en la Base de Conocimientos primaria del perfil activo
    if (dataProfiles[currentProfile] && dataProfiles[currentProfile].knowledgeBase) {
        const currentKB = dataProfiles[currentProfile].knowledgeBase;
        for (let i = 0; i < currentKB.length; i++) {
            const match = currentKB[i].keys.some(key => sanitizedText.includes(key));
            if (match) {
                pushMessage(currentKB[i].response, 'bot');
                if (currentKB[i].menu) injectActionMenu(currentKB[i].menu);
                return;
            }
        }
    }
    
    // 3. Flujo por defecto con gatillo automático de retroalimentación encadenada
    if (dataProfiles[currentProfile]) {
        pushMessage(dataProfiles[currentProfile].defaultAnswer, 'bot');
    }

    setTimeout(() => {
        pushMessage("¿Te fue útil la información brindada o deseas calificar la atención de este trámite? ⭐", 'bot');
        const feedbackMenu = [
            { label: "👍 Sí, fue útil", query: "¡Excelente! Gracias por tu retroalimentación." },
            { label: "👎 No, sigo con dudas", query: "Lamento escuchar eso. ¿Te gustaría levantar un reporte en Soporte Técnico?" }
        ];
        injectActionMenu(feedbackMenu);
    }, 1500);
}

// Inyección y formato de menús de botones de continuación dentro de las burbujas
function injectActionMenu(menuArray) {
    setTimeout(() => {
        if (!chatContainer) return;
        const menuContainer = document.createElement('div');
        menuContainer.className = 'msg-action-menu';
        
        menuArray.forEach(item => {
            const btn = document.createElement('button');
            btn.className = 'btn btn-sm btn-outline-primary bg-white text-start shadow-sm rounded-3 py-2 px-3 small';
            btn.style.fontSize = '0.82rem';
            btn.innerHTML = `<i class="bi bi-arrow-right-short text-primary me-1"></i> ${item.label}`;
            btn.onclick = () => sendQuickMessage(item.query);
            menuContainer.appendChild(btn);
        });
        
        chatContainer.appendChild(menuContainer);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }, 300);
}

// Inserción física de burbujas de texto en la vista móvil del chat
function pushMessage(text, sender) {
    if (!chatContainer) return;
    const bubble = document.createElement('div');
    bubble.className = `msg msg-${sender}`;
    bubble.innerHTML = text.replace(/\n/g, '<br>'); // Habilita saltos de línea legibles
    chatContainer.appendChild(bubble);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

// Escucha nativa y procesamiento de archivos multimedia adjuntos
function handleFileSelected(input) {
    const file = input.files[0];
    if (!file) return;

    const mediaBox = document.createElement('div');
    mediaBox.className = 'msg-media-box';
    
    if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.className = 'msg-media-preview';
            img.src = e.target.result;
            mediaBox.appendChild(img);
            appendFileMeta(mediaBox, file.name);
        }
        reader.readAsDataURL(file);
    } else {
        const docIcon = document.createElement('div');
        docIcon.className = 'd-flex align-items-center gap-2 py-1 px-2 text-dark small';
        docIcon.innerHTML = `<i class="bi bi-file-earmark-text-fill text-danger fs-4"></i> <span class="text-truncate fw-medium">${file.name}</span>`;
        mediaBox.appendChild(docIcon);
        appendFileMeta(mediaBox, "");
    }
    input.value = '';
}

function appendFileMeta(container, fileName) {
    const cleanName = fileName || document.getElementById('fileAttachmentInput').files[0]?.name || "Documento";
    const label = document.createElement('div');
    label.className = 'text-muted small px-1 d-flex justify-content-between align-items-center';
    label.style.fontSize = '0.72rem';
    label.innerHTML = `<span>Archivo enviado</span> <i class="bi bi-check2-all text-primary"></i>`;
    container.appendChild(label);
    
    if (chatContainer) {
        chatContainer.appendChild(container);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }

    setTimeout(() => {
        const lowerName = cleanName.toLowerCase();
        let botReply = "He recibido tu documento de forma conforme 📥. Se ha indexado en el servidor de tu expediente digital.";
        let matchedMenu = null;
        
        if (typeof documentResponses !== 'undefined') {
            for (let i = 0; i < documentResponses.length; i++) {
                const match = documentResponses[i].keywords?.some(keyword => lowerName.includes(keyword));
                if (match) {
                    botReply = documentResponses[i].msg;
                    matchedMenu = documentResponses[i].menu;
                    break;
                }
            }
        }
        
        pushMessage(botReply, 'bot');
        if (matchedMenu) injectActionMenu(matchedMenu);
    }, 1200);
}

function checkEnter(e) {
    if (e.key === 'Enter') processUserMessage();
}

/* ==========================================
   IMPLEMENTACIÓN DEL RECONOCIMIENTO DE VOZ
   ========================================== */
function initVoiceRecognition() {
    // Comprobar compatibilidad nativa del navegador (Chrome, Edge, Safari)
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        recognition = new SpeechRecognition();
        
        // Ajustes del motor
        recognition.continuous = false;  // Detener la escucha al notar una pausa completa
        recognition.interimResults = false; // No mostrar resultados parciales ruidosos
        recognition.lang = 'es-MX';       // Configurar español de México institucional

        // Evento: Comienza a capturar audio por hardware
        recognition.onstart = () => {
            isListening = true;
            if (btnMic) btnMic.classList.add('listening'); // Lanza la animación CSS del pulso rojo
            if (appInput) appInput.placeholder = "Escuchando tu consulta...";
        };

        // Captura de errores
        recognition.onerror = (event) => {
            console.warn("Reconocimiento de voz detectó un estado vacío o error:", event.error);
            stopListeningState();
        };

        // Evento: El micrófono se apaga
        recognition.onend = () => {
            stopListeningState();
        };

        // Evento: Transcripción exitosa del flujo de audio a cadena de texto
        recognition.onresult = (event) => {
            if (appInput) {
                // Extraer texto analizado
                const transcriptResult = event.results[0][0].transcript;
                appInput.value = transcriptResult;
                
                // Disparo diferido para emular el envío natural del mensaje
                setTimeout(() => { 
                    processUserMessage(); 
                }, 500);
            }
        };
    } else {
        // En caso de navegadores no compatibles, deshabilitar el botón de forma estética
        if (btnMic) {
            btnMic.disabled = true;
            btnMic.title = "El reconocimiento de voz no es compatible con este navegador";
        }
    }
}

// Alternador de estado (Play / Stop) del icono del micrófono
function toggleVoiceRecognition() {
    if (!recognition) return;
    
    if (isListening) {
        recognition.stop();
    } else {
        // Limpiar la barra antes de empezar a escuchar
        if (appInput) appInput.value = ''; 
        recognition.start();
    }
}

// Reseteo gráfico y de banderas de estado
function stopListeningState() {
    isListening = false;
    if (btnMic) btnMic.classList.remove('listening');
    if (appInput) appInput.placeholder = "Escribe, habla o adjunta...";
}