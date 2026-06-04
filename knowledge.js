// Base de datos de conocimiento primaria estructurada por perfiles
const subKnowledgeBase = {
    "paso a paso para dar de alta una materia": {
        response: "Pasos para el Alta de Experiencia Educativa (Lugares Vacantes):\n1. Revisa la oferta de lugares vacantes en tu portal MiUV.\n2. Si hay cupo y cumples con los prerrequisitos, selecciona la EE en SICEUV.\n3. Confirma el alta. Se reflejará en tu horario inmediatamente.",
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
        welcome: "¡Hola! Bienvenido al canal de Estudiantes Licenciatura. Pregúntame sobre inscripciones SICEUV, becas, altas y bajas, o reposición de credencial.",
        chips: [
            { label: "Inscripciones", text: "¿Cuándo inicia la pre-inscripción en SICEUV?" },
            { label: "Altas y Bajas", text: "Proceso para alta o baja de materia" },
            { label: "Becas Escolares", text: "Requisitos detallados para la beca escolar" },
            { label: "Reposición Credencial", text: "Quiero reponer mi credencial" }
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
                keys: ['alta', 'baja', 'cancelar', 'retirar', 'agregar', 'materia'],
                response: "El periodo de Altas y Bajas (primeros 5 días hábiles del semestre) te permite ajustar tu horario. Puedes dar de alta materias si hay cupo (Lugares Vacantes) o dar de baja experiencias educativas en SICEUV sin afectación. También existe la Baja Temporal justificada ante Consejo Técnico.",
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
        trackingData: "<p class='text-muted p-3 text-center small'>No hay trámites activos registrados en Hephys.</p>"
    },
    posgrado: {
        title: "UV - Posgrado",
        welcome: "Hola, estás en el canal de posgrado. Aquí atendemos temas de maestría y especialidades.",
        chips: [],
        knowledgeBase: [],
        defaultAnswer: "Este perfil está en desarrollo.",
        trackingData: ""
    },
    egresado: {
        title: "UV - Egresado / Alumno",
        welcome: "Hola, estás en el canal de egresados. Te ayudamos con titulación y servicio social.",
        chips: [],
        knowledgeBase: [],
        defaultAnswer: "Este perfil está en desarrollo.",
        trackingData: ""
    }
};

// Reglas de respuesta multimedia para adjuntos
const documentResponses = [
    { 
        keywords: ['pago', 'voucher', 'arancel', 'recibo'], 
        msg: "He detectado tu **Voucher de Pago/Arancel UV**. Sello digital validado de forma conforme.",
        menu: [
            { label: "Ver Validación SICEUV", query: "Ver estatus de mi inscripción" },
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