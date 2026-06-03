// Base de datos de conocimiento primaria estructurada por perfiles
const dataProfiles = {
    estudiante: {
        title: "UV - Estudiante Licenciatura",
        welcome: "¡Hola! Bienvenido al canal de Estudiantes Licenciatura. Pregúntame sobre inscripciones SICEUV, becas o bajas temporales.",
        chips: [
            { label: "Inscripciones", text: "¿Cuándo inicia la pre-inscripción en SICEUV?" },
            { label: "Baja Materia", text: "¿Cómo solicito una baja de materias?" },
            { label: "Becas Escolares", text: "Requisitos detallados para la beca escolar" }
        ],
        knowledgeBase: [
            { 
                keys: ['inscrip', 'siceuv', 'bloque'], 
                response: "Las inscripciones en el SICEUV constan de tres fases obligatorias: 1) Pre-iluv (elección proyectada de materias), 2) Publicación de bloques horarios (asignados por tu promedio general del periodo inmediato anterior) y 3) Inscripción en línea. Asegúrate de pagar tu arancel de inscripción antes de la fecha límite para no perder tus experiencias.",
                menu: [
                    { label: "Requisitos e Inscripción de Créditos", query: "Requisitos detallados para la inscripción UV" },
                    { label: "Ver Calendario de Bloques y Fechas", query: "¿Cuál es el calendario oficial de la UV?" },
                    { label: "Costos de Arancel de Inscripción", query: "¿Cuánto cuesta el arancel de inscripción?" }
                ]
            },
            {
                keys: ['baja', 'cancelar', 'retirar', 'materia'],
                response: "El Estatuto de los Alumnos de la UV te permite dar de baja experiencias educativas bajo dos modalidades principales: 1) Baja por Experiencia Educativa (dentro de los primeros 5 días hábiles del periodo) y 2) Baja Temporal del Periodo Completo (justificada ante el Consejo Técnico). Ambas requieren que seas alumno regular o que la baja no afecte tus límites de permanencia.",
                menu: [
                    { label: "Requisitos para Baja de Materia", query: "Paso a paso para dar de baja una materia" },
                    { label: "Consecuencias en la Permanencia", query: "¿Cómo afecta una baja a mi límite de tiempo en la UV?" },
                    { label: "Formato para el Consejo Técnico", query: "¿Cómo redactar la solicitud de baja para el Consejo Técnico?" }
                ]
            },
            {
                keys: ['beca', 'apoyo', 'estimulo'],
                response: "La UV ofrece Becas Escolares por promedio y Estímulos al Rendimiento Académico. Requieres promedio mínimo de 8.5.",
                menu: [
                    { label: "Ver Requisitos Completos", query: "Requisitos detallados para la beca escolar" },
                    { label: "Montos de Apoyo", query: "Montos de la beca" }
                ]
            }
        ],
        defaultAnswer: "Entendido. Procesando tu consulta para la Dirección General de Administración Escolar.",
        trackingData: `
            <div class="tracking-card warning-border mb-3">
                <div class="d-flex justify-content-between align-items-center mb-2">
                    <span class="badge bg-warning text-dark fw-bold rounded-pill" style="font-size:0.75rem;">En Dictamen</span>
                    <small class="text-muted fw-medium">Folio: UV-EST-2026-09</small>
                </div>
                <h6 class="fw-bold text-dark mb-1">Baja Temporal Extemporánea</h6>
                <div class="text-muted mb-2" style="font-size: 0.78rem;">
                    <i class="bi bi-building me-1"></i> Consejo Técnico de la Facultad<br>
                    <i class="bi bi-clock-history me-1"></i> Actualizado: Hace 2 horas
                </div>
                <div class="progress mb-3" style="height: 6px;">
                    <div class="progress-bar bg-warning" role="progressbar" style="width: 66%;"></div>
                </div>
                <div class="timeline-item done text-success fw-medium">✓ 1. Recepción y validación de motivos médicos (Validado)</div>
                <div class="timeline-item active text-primary fw-bold">➔ 2. Evaluación y firmas del Consejo Técnico (En proceso)</div>
                <div class="timeline-item text-muted">○ 3. Modificación de estatus en portal SICEUV (Pendiente)</div>
            </div>

            <div class="tracking-card success-border">
                <div class="d-flex justify-content-between align-items-center mb-2">
                    <span class="badge bg-success text-white fw-bold rounded-pill" style="font-size:0.75rem;">Alta Vigente</span>
                    <small class="text-muted fw-medium">Folio: IMSS-UV-8841</small>
                </div>
                <h6 class="fw-bold text-dark mb-1">Activación de Seguro Facultativo (IMSS)</h6>
                <div class="text-muted mb-2" style="font-size: 0.78rem;">
                    <i class="bi bi-building me-1"></i> Ventanilla de Oficialía Escolar<br>
                    <i class="bi bi-clock-history me-1"></i> Actualizado: Ayer, 11:20 AM
                </div>
                <div class="progress mb-3" style="height: 6px;">
                    <div class="progress-bar bg-success" role="progressbar" style="width: 100%;"></div>
                </div>
                <div class="timeline-item done text-success fw-medium">✓ 1. Envío de Constancia de Derechos Digital (Completado)</div>
                <div class="timeline-item done text-success fw-medium">✓ 2. Sincronización con el sistema institucional (Procesado)</div>
            </div>
        `
    },
    posgrado: {
        title: "UV - Unidad de Posgrado",
        welcome: "Canal de Posgrado activo. Puedo asistirte en convocatorias de maestrías, doctorados y becas CONAHCYT. Sube tu anteproyecto o CVU para revisarlo.",
        chips: [
            { label: "Beca CONAHCYT", text: "Requisitos para la beca CONAHCYT" }
        ],
        knowledgeBase: [
            { 
                keys: ['conahcyt', 'beca'], 
                response: "Para postular a la beca nacional CONAHCYT, debes estar inscrito de tiempo exclusivo y contar con un promedio mínimo de 8.0.",
                menu: [
                    { label: "Registro de CVU", query: "¿Cómo creo mi CVU de CONAHCYT?" },
                    { label: "Ver Estatus de Beca", query: "Ver estatus beca conahcyt" }
                ]
            }
        ],
        defaultAnswer: "Entendido. Analizando tu consulta para los servidores de Posgrado UV.",
        trackingData: `
            <div class="tracking-card success-border mb-3">
                <div class="d-flex justify-content-between align-items-center mb-2">
                    <span class="badge bg-primary text-white fw-bold rounded-pill" style="font-size:0.75rem;">Postulado</span>
                    <small class="text-muted fw-medium">Folio: CON-POS-5542</small>
                </div>
                <h6 class="fw-bold text-dark mb-1">Postulación Beca Nacional CONAHCYT</h6>
                <div class="text-muted mb-2" style="font-size: 0.78rem;">
                    <i class="bi bi-building me-1"></i> Coordinación de Estudios de Posgrado<br>
                    <i class="bi bi-clock-history me-1"></i> Actualizado: 29/05/2026
                </div>
                <div class="progress mb-3" style="height: 6px;">
                    <div class="progress-bar bg-primary" role="progressbar" style="width: 50%;"></div>
                </div>
                <div class="timeline-item done text-success fw-medium">✓ 1. Registro de CVU y pre-expediente (Completado)</div>
                <div class="timeline-item active text-primary fw-bold">➔ 2. Validación y liberación de plataforma por la UV (Enviado)</div>
                <div class="timeline-item text-muted">○ 3. Asignación de recurso por Comité evaluador (Pendiente)</div>
            </div>
        `
    },
    egresado: {
        title: "UV - Egresados y Alumni",
        welcome: "Portal de Egresados UV. Resuelvo dudas sobre modalidades de titulación, aranceles y servicio social. Sube tu constancia de No Adeudo o INE.",
        chips: [
            { label: "Trámite Título", text: "¿Cuáles son los requisitos para tramitar el título?" }
        ],
        knowledgeBase: [
            { 
                keys: ['titulo', 'titulacion', 'arancel'], 
                response: "Para iniciar tu trámite de título necesitas la liberación de servicio social, constancia de no adeudo de biblioteca y el pago del arancel de la UV.",
                menu: [
                    { label: "Costos de Aranceles", query: "¿Cuánto cuesta el arancel de titulación?" },
                    { label: "Subir No Adeudo", query: "Subir constancia de biblioteca" }
                ]
            }
        ],
        defaultAnswer: "Entendido. Procesando tus metadatos para la Oficialía Mayor de la UV.",
        trackingData: `
            <div class="tracking-card warning-border mb-3">
                <div class="d-flex justify-content-between align-items-center mb-2">
                    <span class="badge bg-danger text-white fw-bold rounded-pill" style="font-size:0.75rem;">Rechazado Temporal</span>
                    <small class="text-muted fw-medium">Folio: UV-TIT-2026-11</small>
                </div>
                <h6 class="fw-bold text-dark mb-1">Expedición de Título Profesional</h6>
                <div class="text-muted mb-2" style="font-size: 0.78rem;">
                    <i class="bi bi-building me-1"></i> Dirección General de Oficialía Mayor<br>
                    <i class="bi bi-exclamation-circle-fill text-danger me-1"></i> Detenido por falta de documentos
                </div>
                <div class="progress mb-3" style="height: 6px;">
                    <div class="progress-bar bg-danger" role="progressbar" style="width: 33%;"></div>
                </div>
                <div class="timeline-item done text-success fw-medium">✓ 1. Pago de Aranceles de Titulación (Completado)</div>
                <div class="timeline-item text-danger fw-bold">✕ 2. Validación de Expediente Físico (Detenido)</div>
                <div class="p-2 bg-light border rounded-3 mb-2 text-dark" style="font-size: 0.75rem;">
                    <strong class="text-danger">Observación del Revisor:</strong> Falta adjuntar en formato digital la Constancia de No Adeudo emitida por la Biblioteca Central de la UV.
                </div>
                <div class="timeline-item text-muted">○ 3. Emisión de Cédula y Título Electrónico (Pendiente)</div>
            </div>
        `
    }
};

// Ramificaciones secuenciales de diálogo secundario
const subKnowledgeBase = {
    "requisitos detallados para la inscripción uv": {
        response: "Para inscribir tus créditos escolares necesitas: \n1. Tener aprobadas las experiencias seriadas antecedentes.\n2. No exceder el límite máximo de créditos por periodo (ajustado a tu tutoría).\n3. Validar tu pre-inscripción en el sistema.",
        menu: [{ label: "Ver Fechas de Ventanilla", query: "¿Cuál es el calendario oficial de la UV?" }]
    },
    "¿cuánto cuesta el arancel de inscripción?": {
        response: "El arancel básico de inscripción de la Universidad Veracruzana incluye la cuota Pro-Mejoras (fijada por el comité de cada facultad), la aportación del comité de alumnos y el seguro de vida estudiantil. El monto total se refleja en tu orden de pago en MiUV.",
        menu: [{ label: "Ver Formas de Pago Disponibles", query: "Formas de pago de aranceles" }]
    },
    "formas de pago de aranceles": {
        response: "Puedes realizar tu pago mediante: \n1. En línea por MiUV (vía transferencia bancaria o tarjeta de crédito/débito con liberación inmediata).\n2. Ventanilla bancaria imprimiendo el formato con código de barras institucional (liberación en 48 horas).",
        menu: [{ label: "Subir mi Comprobante de Pago", query: "Subir mi voucher de pago" }]
    },
    "paso a paso para dar de baja una materia": {
        response: "Pasos para la Baja por Experiencia Educativa (EE):\n1. Ingresa a tu SICEUV durante la primera semana del periodo académico.\n2. Selecciona el apartado 'Baja de EE'.\n3. Confirma la materia (Verifica que no sea una EE en última oportunidad o afecte tus créditos mínimos). No requiere firmas si estás en tiempo ordinario.",
        menu: [{ label: "Revisar implicaciones de permanencia", query: "¿Cómo afecta una baja a mi límite de tiempo en la UV?" }]
    },
    "¿cómo afecta una baja a mi límite de tiempo en la uv?": {
        response: "Una baja en tiempo ordinario (primeros 5 días) no cuenta como oportunidad cursada (no genera reprobación). Sin embargo, debes cuidar no quedar por debajo de los créditos mínimos por periodo semestral, ya que esto podría congelar tu avance regular según el estatuto estudiantil.",
        menu: [{ label: "Ver trámites con el Consejo Técnico", query: "¿Cómo redactar la solicitud de baja para el Consejo Técnico?" }]
    },
    "¿cómo redactar la solicitud de baja para el consejo técnico?": {
        response: "La baja extemporánea (fuera de la primera semana) requiere un oficio formal dirigido al Consejo Técnico de tu Facultad explicando motivos de fuerza mayor (salud, trabajo, etc.) adjuntando evidencias (justificantes médicos oficiales, constancias laborales).",
        menu: [{ label: "Ir a Soporte para descargar plantilla", query: "Formato para el Consejo Técnico" }]
    }
};

// Reglas de respuesta multimedia para adjuntos
const documentResponses = [
    { 
        keywords: ['pago', 'voucher', 'arancel', 'recibo'], 
        msg: "He detectado tu **Voucher de Pago/Arancel UV**. Sello digital de SEFIPLAN validado de forma conforme.",
        menu: [
            { label: "Ver Validación SICEUV", query: "Ver estatus de mi inscripción" },
            { label: "Descargar Comprobante", query: "Descargar comprobante institucional" }
        ]
    },
    { 
        keywords: ['ine', 'identificacion', 'ife'], 
        msg: "Identificación oficial **INE** detectada. Se ha validado la integridad y legibilidad de ambas caras.",
        menu: [
            { label: "Ver mi Expediente Digital", query: "Ver mis documentos cargados" }
        ]
    }
];