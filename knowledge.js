// Base de datos de conocimiento primaria estructurada por perfiles
const subKnowledgeBase = {
    "paso a paso para dar de alta una materia": {
        response: "Pasos para el Alta de Experiencia Educativa (Lugares Vacantes):\n1. Revisa la oferta de lugares vacantes en tu portal MiUV.\n2. Si hay cupo y cumples con los prerrequisitos, selecciona la EE.\n3. Confirma el alta. Se reflejará en tu horario inmediatamente.",
        menu: [{ label: "Ver Requisitos de Baja", query: "paso a paso para dar de baja una materia" }]
    },
    "paso a paso para dar de baja una materia": {
        response: "Pasos para la Baja de Experiencia Educativa:\n1. Ingresa a MiUV en el periodo de Altas y Bajas (primeros 5 días).\n2. Selecciona la opción de 'Bajas'.\n3. Elige la materia que deseas retirar.\n4. Confirma la acción. Recuerda que no afecta tu historial académico.",
        menu: [{ label: "Formato Consejo Técnico", query: "¿cómo redactar la solicitud de baja para el Consejo Técnico?" }]
    },
    "¿cómo redactar la solicitud de baja para el consejo técnico?": {
        response: "La solicitud debe ir dirigida al H. Consejo Técnico de tu Facultad. Debes incluir tu nombre completo, matrícula, programa educativo, el nombre de la materia a dar de baja y una justificación válida con firma autógrafa.",
        menu: []
    },
    "requisitos detallados para la beca escolar": {
        response: "Para solicitar la Beca Escolar requieres:\n1. Promedio mínimo de 9.0 en el semestre anterior.\n2. Ser alumno regular.\n3. No adeudar materias.\n4. Constancia de inscripción vigente.",
        menu: [
            { label: "Ver montos de la beca", query: "montos de la beca" },
            { label: "Subir constancia", query: "subir constancia de inscripción" }
        ]
    },
    "montos de la beca": {
        response: "La Beca Escolar se entrega en una sola exhibición por periodo. El monto varía según el presupuesto del comité técnico, pero oscila entre $2,000.00 y $4,000.00 MXN.",
        menu: [{ label: "Subir Constancia de Inscripción", query: "subir constancia de inscripción" }]
    },
    "costo y pago de reposición de credencial": {
        response: "El arancel de reposición de credencial se genera en el portal MiUV o solicitando el formato en la caja de tu Facultad. Una vez pagado, guarda el comprobante (voucher).",
        menu: [{ label: "Ver siguientes pasos", query: "requisitos de foto y entrega para credencial" }]
    },
    "¿cómo tramitar el acta de extravío?": {
        response: "En caso de robo o extravío, es obligatorio levantar un Acta de Hechos ante la Fiscalía o Ministerio Público, o tramitar la constancia de extravío en línea si tu estado lo permite.",
        menu: [{ label: "Ver siguientes pasos", query: "requisitos de foto y entrega para credencial" }]
    },
    "requisitos de foto y entrega para credencial": {
        response: "Para concluir la reposición, entrega en Oficialía Escolar de tu Facultad:\n1. Voucher de pago original.\n2. Acta de extravío (original y copia).\n3. Dos fotografías tamaño infantil recientes.\nEl trámite demora aproximadamente 15 días hábiles.",
        menu: [{ label: "Subir comprobante de pago", query: "subir mi voucher de pago" }]
    }
};

const dataProfiles = {
    estudiante: {
        title: "UV - Estudiante Licenciatura",
        welcome: "¡Hola! Bienvenido al canal de Estudiantes Licenciatura. Pregúntame sobre inscripciones, becas, altas y bajas, o reposición de credencial.",
        chips: [
            { label: "Inscripciones", text: "¿Cuándo inicia la pre-inscripción?" },
            { label: "Altas y Bajas", text: "Proceso para alta o baja de materia" },
            { label: "Becas Escolares", text: "Requisitos detallados para la beca escolar" },
            { label: "Reposición Credencial", text: "Quiero reponer mi credencial" }
        ],
        knowledgeBase: [
            { 
                keys: ['inscrip', 'bloque'], 
                response: "Las inscripciones constan de tres fases obligatorias: 1) Pre-iluv (elección proyectada de materias), 2) Publicación de bloques horarios (asignados por tu promedio general del periodo inmediato anterior) y 3) Inscripción en línea. Asegúrate de pagar tu arancel de inscripción antes de la fecha límite para no perder tus experiencias.",
                menu: [
                    { label: "Requisitos e Inscripción de Créditos", query: "Requisitos detallados para la inscripción UV" },
                    { label: "Ver Calendario de Bloques y Fechas", query: "¿Cuál es el calendario oficial de la UV?" },
                    { label: "Costos de Arancel de Inscripción", query: "¿Cuánto cuesta el arancel de inscripción?" }
                ]
            },
            {
                keys: ['alta', 'baja', 'cancelar', 'retirar', 'agregar', 'materia'],
                response: "El periodo de Altas y Bajas (primeros 5 días hábiles del semestre) te permite ajustar tu horario. Puedes dar de alta materias si hay cupo (Lugares Vacantes) o dar de baja experiencias educativas sin afectación. También existe la Baja Temporal justificada ante Consejo Técnico.",
                menu: [
                    { label: "Paso a paso: Dar de Alta", query: "paso a paso para dar de alta una materia" },
                    { label: "Paso a paso: Dar de Baja", query: "paso a paso para dar de baja una materia" },
                    { label: "Formato Consejo Técnico", query: "¿Cómo redactar la solicitud de baja para el Consejo Técnico?" }
                ]
            },
            {
                keys: ['beca', 'escolar', 'apoyo', 'economico'],
                response: "La Universidad Veracruzana ofrece la Beca Escolar a estudiantes con buen desempeño. ¿Te gustaria conocer los requisitos o los montos?",
                menu: [
                    { label: "Requisitos de la beca", query: "requisitos detallados para la beca escolar" },
                    { label: "Montos de la beca", query: "montos de la beca" }
                ]
            },
            {
                keys: ['credencial', 'reposicion', 'extravio', 'perdi', 'perdí', 'reponer'],
                response: "El trámite de reposición de credencial escolar requiere levantar un acta de extravío, pagar el arancel correspondiente y entregar los requisitos físicos en Oficialía Escolar.",
                menu: [
                    { label: "Paso 1: Arancel y Pago", query: "costo y pago de reposición de credencial" },
                    { label: "Paso 2: Acta de extravío", query: "¿cómo tramitar el acta de extravío?" }
                ]
            }
        ],
        defaultAnswer: "No encontré una respuesta exacta a tu consulta. Puedes intentar reescribir tu pregunta usando palabras clave como 'baja de materia', 'beca', 'credencial', etc.",
        // Dentro de dataProfiles.estudiante en knowledge.js:
        trackingData: `
            <div class="p-2">
                <p class="text-muted mb-3" style="font-size: 0.78rem;">Flujos de validación en tiempo real para el Periodo Escolar 2026.</p>
                
                <div class="tracking-card warning-border bg-white mb-3">
                    <div class="d-flex justify-content-between align-items-center mb-2">
                        <span class="badge bg-warning-subtle text-warning-emphasis rounded-pill px-2 py-1 fw-bold" style="font-size: 0.65rem;">En Revisión</span>
                        <small class="text-muted fw-medium">Folio: #UV-7742</small>
                    </div>
                    <h6 class="fw-bold text-dark m-0 small">Baja de Experiencia Educativa</h6>
                    <p class="text-muted m-0 mt-1" style="font-size: 0.75rem;">Materia: Inglés II (AFBG)</p>
                    <hr class="my-2 text-black-50">
                    <div class="d-flex align-items-center gap-2 text-muted" style="font-size: 0.72rem;">
                        <i class="bi bi-clock-history text-warning"></i>
                        <span>En espera de dictamen por el H. Consejo Técnico.</span>
                    </div>
                </div>

                <div class="tracking-card success-border bg-white mb-3">
                    <div class="d-flex justify-content-between align-items-center mb-2">
                        <span class="badge bg-success-subtle text-success rounded-pill px-2 py-1 fw-bold" style="font-size: 0.65rem;">Aprobado</span>
                        <small class="text-muted fw-medium">Folio: #IMSS-9012</small>
                    </div>
                    <h6 class="fw-bold text-dark m-0 small">Alta de Seguro Facultativo IMSS</h6>
                    <p class="text-muted m-0 mt-1" style="font-size: 0.75rem;">Constancia de Vigencia de Derechos</p>
                    <hr class="my-2 text-black-50">
                    <div class="d-flex align-items-center gap-2 text-muted" style="font-size: 0.72rem;">
                        <i class="bi bi-shield-check text-success"></i>
                        <span>Registro completado conforme ante la clínica correspondiente.</span>
                    </div>
                </div>

                <div class="tracking-card border-start border-5 border-danger bg-white mb-3">
                    <div class="d-flex justify-content-between align-items-center mb-2">
                        <span class="badge bg-danger-subtle text-danger rounded-pill px-2 py-1 fw-bold" style="font-size: 0.65rem;">Acción Requerida</span>
                        <small class="text-muted fw-medium">Folio: #CRE-3341</small>
                    </div>
                    <h6 class="fw-bold text-dark m-0 small">Reposición de Credencial UV</h6>
                    <p class="text-muted m-0 mt-1" style="font-size: 0.75rem;">Trámite por Extravío / Robo</p>
                    <hr class="my-2 text-black-50">
                    <div class="d-flex align-items-center gap-2 text-danger fw-medium" style="font-size: 0.72rem;">
                        <i class="bi bi-exclamation-triangle-fill"></i>
                        <span>Falta subir el voucher de pago arancelario.</span>
                    </div>
                </div>
            </div>
        `
    },
    posgrado: {
        title: "UV - Posgrado",
        welcome: "¡Hola! Bienvenido al canal de Posgrado UV. Consulta información sobre becas CONAHCYT, revalidaciones, procesos de movilidad estudiantil o fechas de ventanilla para maestrías y doctorados.",
        chips: [
            { label: "Becas CONAHCYT", text: "Requisitos para postulación de beca CONAHCYT" },
            { label: "Movilidad", text: "¿Cómo aplicar a una estancia de movilidad nacional o internacional?" },
            { label: "Ventanilla Posgrado", text: "abrir_fechas_ventanilla" },
            { label: "Subir Constancia", text: "subir constancia de biblioteca" }
        ],
        knowledgeBase: [
            { 
                keys: ['conahcyt', 'beca', 'postula', 'conacyt'], 
                response: "Las becas nacionales CONAHCYT requieren que el programa de posgrado esté inscrito en el Sistema Nacional de Posgrados (SNP). Debes mantener un promedio mínimo de 8.0 (o el equivalente institucional), ser estudiante de dedicación exclusiva y enviar tu expediente digital en las fechas de la convocatoria vigente.",
                menu: [
                    { label: "Documentos para Beca", query: "Requisitos de expediente CONAHCYT" },
                    { label: "Ver Calendario de Fechas", query: "abrir_fechas_ventanilla" }
                ]
            },
            {
                keys: ['movilidad', 'estancia', 'intercambio'],
                response: "Para realizar una estancia académica de movilidad debes: 1) Haber concluido el primer periodo escolar, 2) Contar con la carta de aceptación de la institución receptora y 3) Tener el visto bueno de tu coordinador de posgrado y tutor institucional.",
                menu: [
                    { label: "Subir Oficio de Aceptación", query: "subir constancia de biblioteca" }
                ]
            }
        ],
        defaultAnswer: "No encontré una coincidencia exacta en el repositorio de Posgrado. Intenta usando palabras clave como 'CONAHCYT', 'movilidad' o 'estancia'.",
        trackingData: `
            <div class="p-2">
                <p class="text-muted mb-3" style="font-size: 0.78rem;">Sincronización de dictámenes de Posgrado (Periodo 2026).</p>
                
                <div class="tracking-card warning-border bg-white mb-3">
                    <div class="d-flex justify-content-between align-items-center mb-2">
                        <span class="badge bg-warning-subtle text-warning-emphasis rounded-pill px-2 py-1 fw-bold" style="font-size: 0.65rem;">Validando SNP</span>
                        <small class="text-muted fw-medium">Folio: #POS-8821</small>
                    </div>
                    <h6 class="fw-bold text-dark m-0 small">Postulación de Beca Nacional</h6>
                    <p class="text-muted m-0 mt-1" style="font-size: 0.75rem;">Convocatoria CONAHCYT 2026</p>
                    <hr class="my-2 text-black-50">
                    <div class="d-flex align-items-center gap-2 text-muted" style="font-size: 0.72rem;">
                        <i class="bi bi-clock-history text-warning"></i>
                        <span>En espera del cierre de plataforma y asignación presupuestal.</span>
                    </div>
                </div>
            </div>
        `
    },
    egresado: {
        title: "UV - Egresado / Alumno",
        welcome: "¡Hola! Bienvenido al canal de Egresados y Alumnos UV. Te asisto en tus trámites de titulación, liberación de servicio social, expedición de certificados y vinculación laboral.",
        chips: [
            { label: "Titulación", text: "¿Cuáles son los requisitos para iniciar el trámite de titulación?" },
            { label: "Servicio Social", text: "Proceso para la liberación de servicio social" },
            { label: "Bolsa de Trabajo", text: "Quiero acceder a la Bolsa de Trabajo UV" }
        ],
        knowledgeBase: [
            { 
                keys: ['titula', 'titulo', 'acta', 'examen'], 
                response: "El trámite de titulación requiere la validación de tu expediente completo: 1) Estatus de egresado (100% de créditos aprobados), 2) Constancia de no adeudo de biblioteca y laboratorios, 3) Pago del arancel de expedición de título y 4) Acta de examen o exención aprobada.",
                menu: [
                    { label: "Requisitos de No Adeudo", query: "requisitos de biblioteca egresados" },
                    { label: "Subir Constancia de Biblioteca", query: "subir constancia de biblioteca" }
                ]
            },
            {
                keys: ['servicio', 'social', 'libera'],
                response: "Para liberar tu Servicio Social como egresado, debes entregar en la Oficialía de tu Facultad el reporte final global firmado por el responsable de la dependencia receptora, junto con tus reportes trimestrales y la carta de terminación oficial.",
                menu: [
                    { label: "Ver Bolsa de Trabajo", query: "Quiero acceder a la Bolsa de Trabajo UV" }
                ]
            }
        ],
        defaultAnswer: "No localicé esa consulta en el módulo Alumno. Prueba con términos como 'titulación', 'servicio social' o 'certificado'.",
        trackingData: `
            <div class="p-2">
                <p class="text-muted mb-3" style="font-size: 0.78rem;">Expedientes de egreso en Oficialía Mayor (Periodo 2026).</p>
                
                <div class="tracking-card success-border bg-white mb-3">
                    <div class="d-flex justify-content-between align-items-center mb-2">
                        <span class="badge bg-success-subtle text-success rounded-pill px-2 py-1 fw-bold" style="font-size: 0.65rem;">Liberado</span>
                        <small class="text-muted fw-medium">Folio: #SS-4410</small>
                    </div>
                    <h6 class="fw-bold text-dark m-0 small">Liberación de Servicio Social</h6>
                    <p class="text-muted m-0 mt-1" style="font-size: 0.75rem;">Reporte Global Aprobado</p>
                    <hr class="my-2 text-black-50">
                    <div class="d-flex align-items-center gap-2 text-muted" style="font-size: 0.72rem;">
                        <i class="bi bi-patch-check-fill text-success"></i>
                        <span>Expediente de servicio social concluido y sellado.</span>
                    </div>
                </div>

                <div class="tracking-card warning-border bg-white mb-3">
                    <div class="d-flex justify-content-between align-items-center mb-2">
                        <span class="badge bg-warning-subtle text-warning-emphasis rounded-pill px-2 py-1 fw-bold" style="font-size: 0.65rem;">En Proceso</span>
                        <small class="text-muted fw-medium">Folio: #TIT-0092</small>
                    </div>
                    <h6 class="fw-bold text-dark m-0 small">Expedición de Título Electrónico</h6>
                    <p class="text-muted m-0 mt-1" style="font-size: 0.75rem;">Validación de Firmas y SICEUV</p>
                    <hr class="my-2 text-black-50">
                    <div class="d-flex align-items-center gap-2 text-muted" style="font-size: 0.72rem;">
                        <i class="bi bi-clock-history text-warning"></i>
                        <span>En revisión de actas de nacimiento y CURP ante Oficialía Escolar.</span>
                    </div>
                </div>
            </div>
        `
    },
};

// Reglas de respuesta multimedia para adjuntos
const documentResponses = [
    { 
        keywords: ['pago', 'voucher', 'arancel', 'recibo'], 
        msg: "He detectado tu **Voucher de Pago/Arancel UV**. Sello digital validado de forma conforme.",
        menu: [
            { label: "Ver Validación", query: "Ver estatus de mi inscripción" },
            { label: "Descargar Comprobante", query: "Descargar comprobante institucional" }
        ]
    },
    { 
        keywords: ['ine', 'identificacion', 'ife'], 
        msg: "Identificación oficial **INE+* detectada. Se ha validado la integridad y legibilidad de ambas caras.",
        menu: [
            { label: "Ver mi Expediente Digital", query: "Ver mis documentos cargados" }
        ]
    },
    {
        keywords: ['constancia', 'inscripcion', 'kardex'], 
        msg: "He detectado tu **Constancia de Inscripción**/**Kardex**. Se ha indexado a tu expediente de solicitud de beca de forma conforme.",
        menu: [
            { label: "Ver mi Expediente Digital", query: "Ver mis documentos cargados" }
        ]
    }
];