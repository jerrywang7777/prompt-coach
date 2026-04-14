(function () {
  const I18N = {
    en: {
      ui: {
        eyebrow: "Prompt Coach",
        languageLabel: "Language",
        heroTitle: "Turn rough ideas into better AI prompts.",
        heroCopy:
          "Describe what you want in plain language. The app rewrites it into a stronger prompt, explains the upgrade, and gives you a few versions you can use right away.",
        heroCardLabel: "Product Positioning",
        heroCardTitle: "Built for real users, not prompt hobbyists.",
        heroCardCopy:
          "The product goal is simple: help ordinary people get better AI results without having to learn prompt engineering first.",
        trustPill1: "Auto language match",
        trustPill2: "Use-case detection",
        trustPill3: "Prompt lift scoring",
        inputTitle: "What do you want help with?",
        inputCopy: "Describe your objective in natural language. The system will structure it into a stronger prompt.",
        taskLabel: "Your request",
        taskPlaceholder:
          "Example: I want AI to help me write a respectful message to my professor asking for a short extension.",
        languageNoticeIdle: "Input language can be detected automatically and applied to the output.",
        languageNoticeKept: "The current interface language has been preserved for this session.",
        languageNoticeSwitched: "The interface language has been updated to match the detected input language.",
        hintStudy: "Study help",
        hintEmail: "Email writing",
        hintCareer: "Career prep",
        hintSupport: "Personal support",
        advancedSummary: "Optional advanced settings",
        goalLabel: "Goal",
        goalPlaceholder: "What result do you want?",
        audienceLabel: "Audience",
        audiencePlaceholder: "Who is this for?",
        toneLabel: "Tone",
        toneAuto: "Auto",
        toneClear: "Clear",
        toneFriendly: "Friendly",
        toneProfessional: "Professional",
        toneSupportive: "Supportive",
        toneDirect: "Direct",
        formatLabel: "Output format",
        formatAuto: "Auto",
        formatParagraphs: "Paragraphs",
        formatBulletList: "Bullet list",
        formatStepByStep: "Step by step plan",
        formatTable: "Table",
        formatScript: "Script",
        constraintsLabel: "Constraints",
        constraintsPlaceholder: "Any limits, must-haves, or boundaries?",
        optimizeButton: "Optimize Prompt",
        exampleButton: "Load Example",
        clearButton: "Clear",
        resultsTitle: "Results",
        resultsCopy: "Review the optimized prompt together with the supporting rationale.",
        summaryTitle: "Session Snapshot",
        summaryCopy:
          "A concise summary of the detected context, task type, and prompt improvement level.",
        summaryLiftLabel: "Prompt lift",
        summaryLanguageLabel: "Detected language",
        summaryCategoryLabel: "Detected use case",
        summaryModeLabel: "Optimization mode",
        summaryPlaceholder: "Waiting for your first prompt.",
        summaryLanguageCopy: "We follow the language the user actually writes in.",
        summaryCategoryCopy: "The engine shapes the prompt around the real task.",
        summaryModeCopy:
          "Automatic mode applies recommended defaults until manual adjustments are needed.",
        optimizedPromptTitle: "Optimized Prompt",
        copyButton: "Copy",
        promptPlaceholder: "Your improved prompt will appear here.",
        reportTitle: "Optimization Report",
        reportCopy: "A clearer view of what the system added beyond your original request.",
        reportPlaceholder: "System additions will appear here after optimization.",
        changesTitle: "What Changed",
        changesPlaceholder: "Write a request to generate your coaching notes.",
        variationsTitle: "Prompt Variations",
        variationsPlaceholder: "Variations will appear here after optimization.",
        principlesTitle: "Built for regular people, not prompt experts.",
        principlesCopy:
          "The product is designed to improve practical AI use for a broader set of users.",
        principle1Title: "Less setup",
        principle1Copy: "Most people should only need one text box.",
        principle2Title: "More guidance",
        principle2Copy: "The app explains why the new prompt is stronger.",
        principle3Title: "Better outcomes",
        principle3Copy: "The product should raise response quality, not just polish wording.",
        roadmapTitle: "Where this can go next",
        roadmapCopy:
          "The bigger opportunity is not just prompt cleanup. It is helping people tune AI for real tasks.",
        roadmap1Title: "Study agent tuning",
        roadmap1Copy:
          "Let students upload slides and mock exams so the system can shape prompts around a specific course.",
        roadmap2Title: "Task-specific coaching",
        roadmap2Copy:
          "Build flows for studying, job applications, email writing, and personal planning.",
        roadmap3Title: "Result quality first",
        roadmap3Copy:
          "Focus on getting more useful answers, not just prettier prompts."
      },
      content: {
        defaultTask: "Help the user with the request they described.",
        defaultGoal: "Produce the most useful possible result for the user.",
        defaultAudience: "A general reader unless the request suggests otherwise.",
        introRole: "You are",
        sectionTask: "Task",
        sectionObjective: "Objective",
        sectionAudience: "Target Audience",
        sectionTone: "Tone",
        sectionFormat: "Output Format",
        sectionConstraints: "Constraints",
        instruction1:
          "Infer the missing context carefully instead of giving a generic answer.",
        instruction2: "Make the output specific, practical, and ready to use.",
        instruction3:
          "If the request is ambiguous, choose the most reasonable assumption and continue.",
        explainRole:
          "Added a clear role so the AI has a stronger point of view before answering.",
        explainStructure:
          "Separated the request into task, goal, audience, tone, and format to reduce vague output.",
        explainConstraints:
          "Kept your constraints visible so the AI is less likely to ignore them.",
        explainFlexible:
          "Left some flexibility because no strict constraints were provided.",
        explainSupport:
          "Used a supportive coaching role instead of pretending to be a licensed professional.",
        explainTechnical:
          "Pushed the AI toward concrete steps instead of a broad explanation.",
        explainAuto:
          "Auto-picked a tone and format so the user does not need to make prompt-engineering decisions first.",
        variation1: "Beginner-Friendly",
        variation2: "High-Structure",
        variation3: "Ask Less, Deliver More",
        variationStructure: "Output in this structure",
        variationStructureList: "1. Short answer\n2. Key reasoning\n3. Actionable next steps",
        variationAssume:
          "Use the most likely reasonable assumptions and provide a complete first draft.",
        fallbackConstraints: "Keep the answer concise and useful.",
        exampleTask:
          "I want AI to help me write a respectful message to my professor asking for a short extension because I have been overwhelmed this week.",
        exampleGoal: "Write a message that sounds honest, polite, and responsible.",
        exampleAudience: "A university professor",
        exampleConstraints:
          "Keep it under 180 words and avoid sounding dramatic or manipulative.",
        hintStudyFill:
          "I am studying for a physics or chemistry exam and I want AI to help me solve problems more accurately and explain the steps clearly.",
        hintEmailFill:
          "I need AI to help me write a polite and effective email.",
        hintCareerFill:
          "I want AI to help me prepare for a job application or interview.",
        hintSupportFill:
          "I want AI to help me think through a stressful personal situation in a calm and practical way.",
        categoryGeneral: "General",
        categoryCommunication: "Communication",
        categoryLearning: "Study help",
        categoryCareer: "Career prep",
        categorySupport: "Personal support",
        categoryTechnical: "Technical help",
        modeManual: "Manual guidance",
        modeAuto: "Auto guidance",
        scoreLine: "Strength score {raw} -> {improved}",
        liftLabel: "+{lift} points"
      }
    },
    zh: {
      ui: {
        eyebrow: "Prompt Coach",
        languageLabel: "语言",
        heroTitle: "把模糊想法变成更强的 AI Prompt。",
        heroCopy:
          "你只需要用自然语言说出你想做什么。这个工具会自动把它改写成更高质量的 prompt，并解释为什么这样更有效，还会给你几个可以直接复制使用的版本。",
        heroCardLabel: "产品定位",
        heroCardTitle: "服务真实用户，而不是只服务 Prompt 爱好者。",
        heroCardCopy:
          "这个产品的目标很简单：让普通人不用先学 prompt engineering，也能更好地使用 AI。",
        trustPill1: "自动语言匹配",
        trustPill2: "场景识别",
        trustPill3: "Prompt 提升评分",
        inputTitle: "你想让 AI 帮你做什么？",
        inputCopy: "请直接描述你的目标，系统会自动将其整理为更高质量的 Prompt。",
        taskLabel: "你的需求",
        taskPlaceholder:
          "例如：我想让 AI 帮我写一封礼貌的邮件，向老师申请短暂延期。",
        languageNoticeIdle: "系统可自动识别输入语言，并同步应用到输出结果。",
        languageNoticeKept: "当前会话已保持现有界面语言设置。",
        languageNoticeSwitched: "系统已根据检测结果切换为对应的界面语言。",
        hintStudy: "学习辅导",
        hintEmail: "邮件写作",
        hintCareer: "求职准备",
        hintSupport: "个人支持",
        advancedSummary: "可选高级设置",
        goalLabel: "目标",
        goalPlaceholder: "你最想要的结果是什么？",
        audienceLabel: "对象",
        audiencePlaceholder: "结果是给谁看的？",
        toneLabel: "语气",
        toneAuto: "自动",
        toneClear: "清晰",
        toneFriendly: "友好",
        toneProfessional: "专业",
        toneSupportive: "支持性",
        toneDirect: "直接",
        formatLabel: "输出格式",
        formatAuto: "自动",
        formatParagraphs: "自然段",
        formatBulletList: "要点列表",
        formatStepByStep: "分步骤计划",
        formatTable: "表格",
        formatScript: "脚本/文案",
        constraintsLabel: "限制条件",
        constraintsPlaceholder: "有没有必须满足的要求、限制或边界？",
        optimizeButton: "优化 Prompt",
        exampleButton: "载入示例",
        clearButton: "清空",
        resultsTitle: "结果",
        resultsCopy: "这里将展示优化后的 Prompt 以及对应的优化依据。",
        summaryTitle: "本次识别摘要",
        summaryCopy: "用于概览系统识别结果、任务类型以及本次 Prompt 的增强幅度。",
        summaryLiftLabel: "Prompt 提升",
        summaryLanguageLabel: "识别语言",
        summaryCategoryLabel: "识别场景",
        summaryModeLabel: "优化模式",
        summaryPlaceholder: "等待你的第一次输入。",
        summaryLanguageCopy: "系统会跟随用户真正输入的语言。",
        summaryCategoryCopy: "引擎会围绕真实任务去组织 Prompt。",
        summaryModeCopy: "自动模式会优先采用推荐配置，必要时再进行手动调整。",
        optimizedPromptTitle: "优化后的 Prompt",
        copyButton: "复制",
        promptPlaceholder: "优化后的 prompt 会显示在这里。",
        reportTitle: "优化报告",
        reportCopy: "这里会拆解系统在原始需求之外新增的关键设定。",
        reportPlaceholder: "优化后这里会展示系统新增的关键设定。",
        changesTitle: "改进说明",
        changesPlaceholder: "先输入一个需求，系统会在这里解释改进原因。",
        variationsTitle: "不同版本",
        variationsPlaceholder: "优化后这里会出现几个不同风格的版本。",
        principlesTitle: "这是给普通人用的，不是给 Prompt 专家用的。",
        principlesCopy:
          "产品重点在于提升 AI 的实际使用效果，而非增加额外学习成本。",
        principle1Title: "更少填写",
        principle1Copy: "大多数人只需要一个输入框就够了。",
        principle2Title: "更多解释",
        principle2Copy: "系统会说明为什么新的 prompt 更强。",
        principle3Title: "更好结果",
        principle3Copy: "重点是提高 AI 的实际效果，而不是只润色文字。",
        roadmapTitle: "接下来可以走向哪里",
        roadmapCopy:
          "更大的机会不只是润色 prompt，而是帮助用户把 AI 调整到真实任务里更好用。",
        roadmap1Title: "学习 Agent 调优",
        roadmap1Copy:
          "让学生上传课件和模拟题，再围绕某一门课程去组织更适合的 prompt。",
        roadmap2Title: "场景化辅导",
        roadmap2Copy:
          "围绕学习、求职、邮件写作和个人规划做更具体的流程。",
        roadmap3Title: "结果优先",
        roadmap3Copy:
          "重点是让回答更有用，而不是只让 prompt 看起来更漂亮。"
      },
      content: {
        defaultTask: "帮助用户完成他刚才描述的需求。",
        defaultGoal: "给用户提供最有用、最可直接使用的结果。",
        defaultAudience: "默认面向普通读者，除非用户的需求另有说明。",
        introRole: "你现在是",
        sectionTask: "任务",
        sectionObjective: "目标",
        sectionAudience: "目标对象",
        sectionTone: "语气",
        sectionFormat: "输出格式",
        sectionConstraints: "限制条件",
        instruction1: "在回答前先合理推断缺失信息，不要给出空泛答案。",
        instruction2: "输出要具体、实用，并且能马上拿来使用。",
        instruction3: "如果需求有歧义，请选择最合理的假设继续完成。",
        explainRole: "加入了清晰角色，让 AI 在回答前先建立更明确的视角。",
        explainStructure: "把需求拆成任务、目标、对象、语气和格式，减少泛泛而谈的输出。",
        explainConstraints: "把你的限制条件单独写出来，降低 AI 忽略它们的概率。",
        explainFlexible: "因为你没有给出硬性限制，所以保留了一些灵活推断空间。",
        explainSupport: "用了支持型教练角色，而不是假装成持证专业人士。",
        explainTechnical: "把输出方向推向更具体的步骤，而不是泛泛解释。",
        explainAuto: "系统自动判断了更合适的语气和格式，减少用户手动调 prompt 的负担。",
        variation1: "新手友好版",
        variation2: "高结构版",
        variation3: "少提问先交付版",
        variationStructure: "请按以下结构输出",
        variationStructureList: "1. 简短答案\n2. 核心理由\n3. 下一步行动建议",
        variationAssume: "在合理范围内自动补全上下文，并先给出一版完整结果。",
        fallbackConstraints: "尽量简洁、实用。",
        exampleTask:
          "我想让 AI 帮我写一封礼貌的邮件，向老师申请短暂延期，因为我这周压力很大。",
        exampleGoal: "写出一封听起来诚恳、礼貌、负责任的邮件。",
        exampleAudience: "大学教授",
        exampleConstraints: "控制在 180 词以内，不要显得夸张或情绪化。",
        hintStudyFill:
          "我现在在复习物理或化学考试，我想让 AI 更准确地帮我做题，并且把步骤讲清楚。",
        hintEmailFill:
          "我需要 AI 帮我写一封礼貌又有效的邮件。",
        hintCareerFill:
          "我想让 AI 帮我准备求职申请或面试。",
        hintSupportFill:
          "我想让 AI 用冷静、实际的方式帮助我理清一个让我焦虑的个人问题。",
        categoryGeneral: "通用",
        categoryCommunication: "沟通表达",
        categoryLearning: "学习辅导",
        categoryCareer: "求职准备",
        categorySupport: "个人支持",
        categoryTechnical: "技术问题",
        modeManual: "手动引导",
        modeAuto: "自动引导",
        scoreLine: "强度评分 {raw} -> {improved}",
        liftLabel: "+{lift} 分"
      }
    },
    es: {
      ui: {
        eyebrow: "Prompt Coach",
        languageLabel: "Idioma",
        heroTitle: "Convierte ideas vagas en mejores prompts para IA.",
        heroCopy:
          "Describe lo que quieres con lenguaje natural. La app lo reescribe como un prompt más fuerte, explica la mejora y te da varias versiones listas para usar.",
        heroCardLabel: "Posicionamiento",
        heroCardTitle: "Pensado para usuarios reales, no solo para fanáticos del prompt.",
        heroCardCopy:
          "La meta del producto es simple: ayudar a personas comunes a obtener mejores resultados con IA sin tener que estudiar prompt engineering primero.",
        trustPill1: "Idioma automático",
        trustPill2: "Detección de uso",
        trustPill3: "Puntuación de mejora",
        inputTitle: "¿En qué quieres ayuda?",
        inputCopy: "Describe tu objetivo en lenguaje natural. El sistema lo estructurará como un prompt más sólido.",
        taskLabel: "Tu solicitud",
        taskPlaceholder:
          "Ejemplo: Quiero que la IA me ayude a escribir un mensaje respetuoso para pedir una pequeña extensión.",
        languageNoticeIdle: "El idioma de entrada puede detectarse automáticamente y aplicarse al resultado.",
        languageNoticeKept: "Se ha mantenido el idioma actual de la interfaz para esta sesión.",
        languageNoticeSwitched: "La interfaz se ha actualizado para coincidir con el idioma detectado en la entrada.",
        hintStudy: "Ayuda para estudiar",
        hintEmail: "Escritura de correos",
        hintCareer: "Preparación profesional",
        hintSupport: "Apoyo personal",
        advancedSummary: "Opciones avanzadas",
        goalLabel: "Objetivo",
        goalPlaceholder: "¿Qué resultado quieres obtener?",
        audienceLabel: "Audiencia",
        audiencePlaceholder: "¿Para quién es el resultado?",
        toneLabel: "Tono",
        toneAuto: "Automático",
        toneClear: "Claro",
        toneFriendly: "Amable",
        toneProfessional: "Profesional",
        toneSupportive: "De apoyo",
        toneDirect: "Directo",
        formatLabel: "Formato de salida",
        formatAuto: "Automático",
        formatParagraphs: "Párrafos",
        formatBulletList: "Lista con viñetas",
        formatStepByStep: "Plan paso a paso",
        formatTable: "Tabla",
        formatScript: "Guion",
        constraintsLabel: "Restricciones",
        constraintsPlaceholder: "¿Hay límites, condiciones o requisitos?",
        optimizeButton: "Optimizar Prompt",
        exampleButton: "Cargar ejemplo",
        clearButton: "Limpiar",
        resultsTitle: "Resultados",
        resultsCopy: "Aquí se presenta el prompt optimizado junto con la lógica de mejora correspondiente.",
        summaryTitle: "Resumen de la sesión",
        summaryCopy: "Resumen del contexto detectado, el tipo de tarea y el nivel de mejora aplicado al prompt.",
        summaryLiftLabel: "Mejora del prompt",
        summaryLanguageLabel: "Idioma detectado",
        summaryCategoryLabel: "Caso de uso detectado",
        summaryModeLabel: "Modo de optimización",
        summaryPlaceholder: "Esperando tu primer prompt.",
        summaryLanguageCopy: "Seguimos el idioma que el usuario realmente escribe.",
        summaryCategoryCopy: "El motor adapta el prompt a la tarea real.",
        summaryModeCopy: "El modo automático aplica valores recomendados hasta que se requiera un ajuste manual.",
        optimizedPromptTitle: "Prompt optimizado",
        copyButton: "Copiar",
        promptPlaceholder: "Tu prompt mejorado aparecerá aquí.",
        reportTitle: "Informe de optimización",
        reportCopy: "Aquí verás con más claridad lo que el sistema añadió más allá de tu solicitud original.",
        reportPlaceholder: "Las adiciones del sistema aparecerán aquí después de optimizar.",
        changesTitle: "Qué cambió",
        changesPlaceholder: "Escribe una solicitud para generar notas de mejora.",
        variationsTitle: "Variaciones del prompt",
        variationsPlaceholder: "Las variaciones aparecerán aquí después de optimizar.",
        principlesTitle: "Pensado para gente común, no solo para expertos.",
        principlesCopy:
          "El producto está orientado a mejorar el uso práctico de la IA para una audiencia más amplia.",
        principle1Title: "Menos configuración",
        principle1Copy: "La mayoría de las personas solo deberían necesitar una caja de texto.",
        principle2Title: "Más guía",
        principle2Copy: "La app explica por qué el nuevo prompt es mejor.",
        principle3Title: "Mejores resultados",
        principle3Copy: "El objetivo es mejorar la calidad real de las respuestas.",
        roadmapTitle: "Hacia dónde puede crecer",
        roadmapCopy:
          "La oportunidad grande no es solo limpiar prompts. Es ayudar a las personas a ajustar la IA para tareas reales.",
        roadmap1Title: "Ajuste para agentes de estudio",
        roadmap1Copy:
          "Permitir que estudiantes suban diapositivas y exámenes de práctica para adaptar prompts a una materia concreta.",
        roadmap2Title: "Coaching por tarea",
        roadmap2Copy:
          "Crear flujos para estudiar, buscar trabajo, escribir correos y organizar planes personales.",
        roadmap3Title: "Primero la calidad del resultado",
        roadmap3Copy:
          "La prioridad es conseguir respuestas más útiles, no solo prompts más bonitos."
      },
      content: {
        defaultTask: "Ayuda al usuario con la solicitud que describió.",
        defaultGoal: "Produce el resultado más útil posible para el usuario.",
        defaultAudience: "Una audiencia general, salvo que la solicitud indique otra cosa.",
        introRole: "Actúa como",
        sectionTask: "Tarea",
        sectionObjective: "Objetivo",
        sectionAudience: "Audiencia objetivo",
        sectionTone: "Tono",
        sectionFormat: "Formato de salida",
        sectionConstraints: "Restricciones",
        instruction1: "Infiere el contexto faltante con cuidado en lugar de responder de forma genérica.",
        instruction2: "Haz que la respuesta sea específica, práctica y lista para usar.",
        instruction3: "Si la solicitud es ambigua, elige la suposición más razonable y continúa.",
        explainRole: "Se añadió un rol claro para darle a la IA un mejor punto de vista.",
        explainStructure: "Se separó la solicitud en tarea, objetivo, audiencia, tono y formato para reducir respuestas vagas.",
        explainConstraints: "Se mantuvieron visibles tus restricciones para que la IA no las ignore.",
        explainFlexible: "Se dejó cierta flexibilidad porque no se dieron restricciones estrictas.",
        explainSupport: "Se usó un rol de apoyo en lugar de fingir ser un profesional con licencia.",
        explainTechnical: "Se empujó a la IA hacia pasos concretos en vez de explicaciones amplias.",
        explainAuto: "El sistema eligió tono y formato automáticamente para reducir la carga del usuario.",
        variation1: "Versión para principiantes",
        variation2: "Versión estructurada",
        variation3: "Menos preguntas, más entrega",
        variationStructure: "Entrega la respuesta con esta estructura",
        variationStructureList: "1. Respuesta breve\n2. Razones clave\n3. Próximos pasos accionables",
        variationAssume:
          "Usa las suposiciones razonables más probables y entrega una primera versión completa.",
        fallbackConstraints: "Mantén la respuesta breve y útil.",
        exampleTask:
          "Quiero que la IA me ayude a escribir un mensaje respetuoso para pedir una pequeña extensión a mi profesor porque esta semana me he sentido abrumado.",
        exampleGoal: "Escribir un mensaje honesto, amable y responsable.",
        exampleAudience: "Un profesor universitario",
        exampleConstraints:
          "Mantén el mensaje por debajo de 180 palabras y evita sonar dramático o manipulador.",
        hintStudyFill:
          "Estoy estudiando para un examen de física o química y quiero que la IA me ayude a resolver problemas con más precisión y explicar mejor los pasos.",
        hintEmailFill:
          "Necesito que la IA me ayude a escribir un correo educado y efectivo.",
        hintCareerFill:
          "Quiero que la IA me ayude a prepararme para una solicitud de trabajo o una entrevista.",
        hintSupportFill:
          "Quiero que la IA me ayude a pensar con calma y de forma práctica sobre una situación personal estresante.",
        categoryGeneral: "General",
        categoryCommunication: "Comunicación",
        categoryLearning: "Ayuda para estudiar",
        categoryCareer: "Preparación profesional",
        categorySupport: "Apoyo personal",
        categoryTechnical: "Ayuda técnica",
        modeManual: "Guía manual",
        modeAuto: "Guía automática",
        scoreLine: "Puntuación {raw} -> {improved}",
        liftLabel: "+{lift} puntos"
      }
    }
  };

  function normalizeText(value) {
    return (value || "").trim();
  }

  function detectInputLanguage(task) {
    const value = normalizeText(task);
    if (!value) {
      return "en";
    }

    if (/[\u4e00-\u9fff]/.test(value)) {
      return "zh";
    }

    const lower = value.toLowerCase();
    const spanishSignals = [
      "quiero",
      "necesito",
      "ayuda",
      "correo",
      "estudi",
      "examen",
      "trabajo",
      "entrevista",
      "ansiedad",
      "situacion",
      "profesor",
      "mensaje"
    ];

    if (/[áéíóúñ¿¡]/i.test(value) || spanishSignals.some((word) => lower.includes(word))) {
      return "es";
    }

    return "en";
  }

  function detectTaskCategory(task) {
    const lower = task.toLowerCase();

    if (
      lower.includes("email") ||
      lower.includes("mail") ||
      lower.includes("message") ||
      lower.includes("text") ||
      lower.includes("write to") ||
      lower.includes("send") ||
      lower.includes("correo") ||
      lower.includes("mensaje") ||
      lower.includes("写邮件") ||
      lower.includes("邮件") ||
      lower.includes("消息") ||
      lower.includes("沟通") ||
      lower.includes("请假") ||
      lower.includes("老师") ||
      lower.includes("教授") ||
      lower.includes("导师")
    ) {
      return "communication";
    }
    if (
      lower.includes("study") ||
      lower.includes("learn") ||
      lower.includes("exam") ||
      lower.includes("physics") ||
      lower.includes("chemistry") ||
      lower.includes("复习") ||
      lower.includes("考试") ||
      lower.includes("物理") ||
      lower.includes("化学") ||
      lower.includes("做题") ||
      lower.includes("解题") ||
      lower.includes("题目") ||
      lower.includes("公式") ||
      lower.includes("推导") ||
      lower.includes("已知条件") ||
      lower.includes("最终答案") ||
      lower.includes("单位") ||
      lower.includes("结果是否合理") ||
      lower.includes("estudi") ||
      lower.includes("examen")
    ) {
      return "learning";
    }
    if (
      lower.includes("resume") ||
      lower.includes("job") ||
      lower.includes("interview") ||
      lower.includes("career") ||
      lower.includes("简历") ||
      lower.includes("面试") ||
      lower.includes("trabajo") ||
      lower.includes("entrevista")
    ) {
      return "career";
    }
    if (
      lower.includes("feel") ||
      lower.includes("stress") ||
      lower.includes("anxious") ||
      lower.includes("overwhelmed") ||
      lower.includes("焦虑") ||
      lower.includes("压力") ||
      lower.includes("estrés") ||
      lower.includes("ansiedad")
    ) {
      return "support";
    }
    if (
      lower.includes("code") ||
      lower.includes("bug") ||
      lower.includes("debug") ||
      lower.includes("build") ||
      lower.includes("代码") ||
      lower.includes("报错") ||
      lower.includes("código") ||
      lower.includes("error")
    ) {
      return "technical";
    }
    return "general";
  }

  function roleForCategory(category, tone, language) {
    const roles = {
      en: {
        communication: "a thoughtful communication assistant",
        learning: "a patient tutor who explains clearly",
        career: "a practical career coach",
        support: "a calm and supportive coach",
        technical: "a careful technical assistant",
        general: "a clear and reliable assistant"
      },
      zh: {
        communication: "一位擅长沟通表达的写作助手",
        learning: "一位耐心、讲解清楚的辅导老师",
        career: "一位务实的求职教练",
        support: "一位冷静且支持性的教练",
        technical: "一位谨慎的技术助手",
        general: "一位清晰可靠的助手"
      },
      es: {
        communication: "un asistente de comunicación considerado",
        learning: "un tutor paciente que explica con claridad",
        career: "un coach profesional práctico",
        support: "un coach tranquilo y de apoyo",
        technical: "un asistente técnico cuidadoso",
        general: "un asistente claro y confiable"
      }
    };

    if (language === "en" && tone === "professional" && category === "communication") {
      return "a professional communication strategist";
    }

    return roles[language][category];
  }

  function detectScenario(task, category) {
    const lower = task.toLowerCase();

    if (category === "communication") {
      if ((/teacher|professor|prof|老师|教授|导师|profesor/.test(lower)) && (/sick|ill|leave|absence|extension|deadline|感冒|生病|不舒服|请假|延期|correo|permiso/.test(lower))) {
        return "teacher_message";
      }
      if (/deadline|extension|follow up|request|申请|延期|请求|solicitud|prórroga/.test(lower)) {
        return "formal_request";
      }
      return "general_communication";
    }

    if (category === "learning") {
      if (/physics|chemistry|exam|problem|equation|物理|化学|考试|做题|题目|公式|física|química|examen/.test(lower)) {
        return "exam_tutoring";
      }
      return "concept_explanation";
    }

    if (category === "career") {
      if (/interview|面试|entrevista/.test(lower)) {
        return "interview_prep";
      }
      return "application_materials";
    }

    if (category === "support") {
      return "stress_support";
    }

    if (category === "technical") {
      return "debug_support";
    }

    return "general_assistance";
  }

  function localizedSectionLabels(language) {
    const map = {
      en: {
        scenario: "Scenario Focus",
        deliverables: "Deliverables"
      },
      zh: {
        scenario: "场景聚焦",
        deliverables: "交付要求"
      },
      es: {
        scenario: "Enfoque del caso",
        deliverables: "Entregables"
      }
    };

    return map[language];
  }

  function scenarioProfile(language, scenario, category) {
    const profiles = {
      en: {
        teacher_message: {
          label: "Teacher communication",
          role: "an academic communication specialist",
          goal: "Draft one ready-to-send note to a teacher and one more formal backup version.",
          audience: "A teacher or professor",
          tone: "polite, concise, and credible",
          format: "message draft with one formal alternative",
          deliverables: "1. One direct version ready to send. 2. One more formal alternative.",
          instructions: [
            "Keep the message concise and believable without over-explaining.",
            "State the absence or request clearly, mention responsibility, and close respectfully.",
            "Avoid dramatic language, excessive apologies, or unnecessary detail."
          ],
          explanation: "Applied a teacher-communication strategy so the prompt asks for directly usable messaging instead of a generic reply.",
          summaryDetail: "A teacher-facing communication workflow was applied for message quality and credibility."
        },
        formal_request: {
          label: "Formal request",
          role: "a professional writing strategist for formal requests",
          goal: "Produce a concise request that is respectful, persuasive, and easy to act on.",
          audience: "A recipient evaluating the request",
          tone: "professional and respectful",
          format: "final message plus concise alternative",
          deliverables: "1. One polished version. 2. One shorter alternative.",
          instructions: [
            "Lead with the request clearly and early.",
            "Keep the wording efficient and avoid repetition.",
            "Preserve a professional tone throughout."
          ],
          explanation: "Shifted the prompt toward formal-request writing so the output is more actionable and recipient-aware.",
          summaryDetail: "A formal-request strategy was applied to improve clarity, tone, and decision-readiness."
        },
        general_communication: {
          label: "Communication drafting",
          summaryDetail: "A communication-focused drafting strategy was applied."
        },
        exam_tutoring: {
          label: "Exam problem tutoring",
          role: "a high-precision STEM tutor",
          goal: "Improve answer accuracy while explaining the reasoning in a way a student can follow under exam pressure.",
          audience: "A student preparing for assessments",
          tone: "clear and methodical",
          format: "step-by-step solution with final answer check",
          deliverables: "1. Identify what is known. 2. Show the method. 3. Give the final answer. 4. Verify it briefly.",
          instructions: [
            "Solve the problem step by step and make each transition explicit.",
            "Call out formulas, assumptions, and the final answer clearly.",
            "Briefly verify whether the result is reasonable before finishing."
          ],
          explanation: "Applied an exam-tutoring strategy so the prompt prioritizes correctness, method, and answer checking.",
          summaryDetail: "An exam-oriented tutoring strategy was applied to improve accuracy and reasoning quality."
        },
        concept_explanation: {
          label: "Concept explanation",
          summaryDetail: "A teaching-oriented explanation strategy was applied."
        },
        interview_prep: {
          label: "Interview preparation",
          role: "an interview coach focused on strong, credible responses",
          goal: "Generate an answer that sounds prepared, specific, and professionally persuasive.",
          audience: "An interviewer or hiring manager",
          tone: "professional and confident",
          format: "best-answer draft plus stronger backup version",
          deliverables: "1. One polished answer. 2. One sharper alternative. 3. Brief coaching notes.",
          instructions: [
            "Use concrete examples instead of vague claims.",
            "Keep the answer concise and structured.",
            "Balance confidence with credibility."
          ],
          explanation: "Applied an interview-prep strategy so the prompt asks for stronger examples and more credible professional language.",
          summaryDetail: "An interview coaching strategy was applied to improve specificity and professional positioning."
        },
        application_materials: {
          label: "Application materials",
          summaryDetail: "An application-writing strategy was applied."
        },
        stress_support: {
          label: "Practical emotional support",
          role: "a calm support coach focused on practical next steps",
          goal: "Help the user think more clearly, reduce emotional noise, and identify the most useful next step.",
          audience: "A user under stress who needs calm structure",
          tone: "supportive and grounded",
          format: "short reflection plus practical next steps",
          deliverables: "1. Brief reframing. 2. What matters most right now. 3. The next concrete step.",
          instructions: [
            "Do not imitate a licensed therapist or make clinical claims.",
            "Use grounded language and avoid empty reassurance.",
            "Prioritize emotional clarity and the next practical action."
          ],
          explanation: "Applied a support-focused strategy so the prompt aims for calm structure and practical movement instead of generic comfort.",
          summaryDetail: "A practical support strategy was applied to improve clarity and next-step usefulness."
        },
        debug_support: {
          label: "Debug diagnosis",
          role: "a diagnostic engineering assistant",
          goal: "Surface the likely cause, the evidence, and the next debugging steps clearly.",
          audience: "A developer trying to resolve an issue efficiently",
          tone: "direct and precise",
          format: "diagnosis with next actions",
          deliverables: "1. Likely cause. 2. Evidence. 3. Fix path. 4. Verification step.",
          instructions: [
            "Prioritize the most likely cause before listing alternatives.",
            "Keep the reasoning concise and evidence-based.",
            "End with a concrete verification step."
          ],
          explanation: "Applied a debugging strategy so the prompt requests diagnosis, evidence, and validation instead of broad troubleshooting.",
          summaryDetail: "A diagnostic workflow was applied to improve technical clarity and actionability."
        },
        general_assistance: {
          label: "General assistance",
          summaryDetail: "A general-purpose optimization strategy was applied."
        }
      },
      zh: {
        teacher_message: {
          label: "教师沟通",
          role: "一位擅长校内沟通与正式消息表达的助手",
          goal: "生成 1 个可直接发送给老师的版本，并额外提供 1 个更正式的备选版本。",
          audience: "老师或教授",
          tone: "礼貌、简洁、可信",
          format: "可直接发送的消息 + 更正式备选",
          deliverables: "1. 一个可直接发送版本。2. 一个更正式的备选版本。",
          instructions: [
            "保持内容简洁真实，不要过度解释。",
            "清楚说明请假或请求事项，同时体现责任感和礼貌。",
            "避免夸张措辞、过度道歉或无关细节。"
          ],
          explanation: "系统已切换到教师沟通策略，使 Prompt 更关注可直接发送、礼貌且可信的消息表达。",
          summaryDetail: "本次已应用教师沟通策略，以提升消息质量与可信度。"
        },
        formal_request: {
          label: "正式请求",
          role: "一位擅长正式请求表达的写作策略助手",
          goal: "生成一段简洁、礼貌、便于对方处理的正式请求内容。",
          audience: "需要做出判断的接收方",
          tone: "专业、克制、礼貌",
          format: "正式版本 + 简洁备选",
          deliverables: "1. 一个正式版本。2. 一个更简洁的备选版本。",
          instructions: [
            "尽早明确提出核心请求。",
            "避免重复表达，保持结构紧凑。",
            "全程保持专业语气。"
          ],
          explanation: "系统已应用正式请求策略，使输出更适合真实沟通和对方决策。",
          summaryDetail: "本次已应用正式请求策略，以增强清晰度和执行性。"
        },
        general_communication: {
          label: "沟通写作",
          summaryDetail: "本次已应用沟通写作策略。"
        },
        exam_tutoring: {
          label: "考试题目辅导",
          role: "一位强调准确率和推理过程的理科学习辅导老师",
          goal: "在提高答案准确率的同时，把关键推理步骤讲清楚，适合考试复习场景。",
          audience: "正在备考的学生",
          tone: "清晰、严谨、有条理",
          format: "分步骤解题 + 最终答案校验",
          deliverables: "1. 先列出已知信息。2. 展示解题过程。3. 给出最终答案。4. 做简短校验。",
          instructions: [
            "按步骤解题，并把每一步过渡讲清楚。",
            "明确标出公式、假设条件和最终答案。",
            "结束前简短判断结果是否合理。"
          ],
          explanation: "系统已应用考试辅导策略，使 Prompt 更关注准确率、过程说明和答案校验。",
          summaryDetail: "本次已应用考试辅导策略，以提升解题准确率和推理质量。"
        },
        concept_explanation: {
          label: "概念讲解",
          summaryDetail: "本次已应用教学讲解策略。"
        },
        interview_prep: {
          label: "面试准备",
          role: "一位强调具体性与说服力的面试教练",
          goal: "生成一段更具体、更可信、职业表达更强的面试回答。",
          audience: "面试官或招聘负责人",
          tone: "专业、自信、克制",
          format: "标准回答 + 更强版本 + 简短建议",
          deliverables: "1. 一个标准回答。2. 一个更强版本。3. 简短优化建议。",
          instructions: [
            "优先使用具体例子，而不是空泛表述。",
            "回答结构要紧凑，重点清晰。",
            "在自信和可信之间保持平衡。"
          ],
          explanation: "系统已应用面试准备策略，使 Prompt 更强调具体案例与职业表达。",
          summaryDetail: "本次已应用面试准备策略，以提升回答的说服力与职业感。"
        },
        application_materials: {
          label: "求职材料",
          summaryDetail: "本次已应用求职材料优化策略。"
        },
        stress_support: {
          label: "情绪梳理",
          role: "一位强调冷静分析与实际下一步的支持型教练",
          goal: "帮助用户更清楚地理解当前情况，并找到最有价值的下一步行动。",
          audience: "需要情绪整理和现实建议的用户",
          tone: "支持性、稳定、务实",
          format: "简短梳理 + 下一步建议",
          deliverables: "1. 简短重述。2. 当前最重要的问题。3. 下一步具体行动。",
          instructions: [
            "不要模仿持证心理治疗师或给出临床结论。",
            "避免空泛安慰，优先提供清晰结构。",
            "重点放在梳理情绪和下一步行动。"
          ],
          explanation: "系统已应用情绪梳理策略，使 Prompt 更偏向冷静分析和可执行建议。",
          summaryDetail: "本次已应用情绪梳理策略，以提升清晰度和行动价值。"
        },
        debug_support: {
          label: "问题排查",
          role: "一位强调诊断逻辑与验证步骤的技术助手",
          goal: "清楚给出最可能原因、依据和后续排查步骤。",
          audience: "希望高效解决问题的开发者",
          tone: "直接、精确、有依据",
          format: "问题诊断 + 下一步操作",
          deliverables: "1. 最可能原因。2. 判断依据。3. 修复路径。4. 验证方式。",
          instructions: [
            "优先给出最可能原因，再列出次要可能性。",
            "解释保持简洁，并以证据为基础。",
            "最后给出可执行的验证步骤。"
          ],
          explanation: "系统已应用问题排查策略，使 Prompt 更强调诊断、依据和验证。",
          summaryDetail: "本次已应用问题排查策略，以增强技术定位和行动性。"
        },
        general_assistance: {
          label: "通用优化",
          summaryDetail: "本次已应用通用优化策略。"
        }
      },
      es: {
        teacher_message: {
          label: "Comunicación con docentes",
          role: "un especialista en comunicación académica",
          goal: "Redactar una versión lista para enviar a un profesor y una alternativa más formal.",
          audience: "Un profesor o docente",
          tone: "educado, breve y creíble",
          format: "mensaje listo para enviar con alternativa formal",
          deliverables: "1. Una versión lista para enviar. 2. Una alternativa más formal.",
          instructions: [
            "Mantén el mensaje breve y verosímil, sin explicar demasiado.",
            "Expón la ausencia o la petición con claridad y cierra con respeto.",
            "Evita dramatizar, pedir perdón en exceso o añadir detalles innecesarios."
          ],
          explanation: "Se aplicó una estrategia de comunicación con docentes para pedir mensajes utilizables y creíbles en lugar de una respuesta genérica.",
          summaryDetail: "Se aplicó una estrategia de comunicación académica para mejorar la calidad y credibilidad del mensaje."
        },
        formal_request: {
          label: "Solicitud formal",
          role: "un estratega de redacción para solicitudes formales",
          goal: "Producir una solicitud breve, respetuosa y fácil de procesar para el destinatario.",
          audience: "Un destinatario que debe evaluar la solicitud",
          tone: "profesional y respetuoso",
          format: "versión formal más alternativa breve",
          deliverables: "1. Una versión pulida. 2. Una alternativa más breve.",
          instructions: [
            "Expón la solicitud principal desde el inicio.",
            "Evita repeticiones y mantén una estructura eficiente.",
            "Conserva un tono profesional en todo momento."
          ],
          explanation: "Se aplicó una estrategia de solicitud formal para mejorar claridad, tono y capacidad de respuesta.",
          summaryDetail: "Se aplicó una estrategia de solicitud formal para aumentar claridad y capacidad de decisión."
        },
        general_communication: {
          label: "Redacción de comunicación",
          summaryDetail: "Se aplicó una estrategia de redacción comunicativa."
        },
        exam_tutoring: {
          label: "Tutoría para exámenes",
          role: "un tutor STEM orientado a la precisión",
          goal: "Aumentar la exactitud de la respuesta y explicar con claridad el razonamiento paso a paso.",
          audience: "Un estudiante que se prepara para evaluaciones",
          tone: "claro y metódico",
          format: "solución paso a paso con verificación final",
          deliverables: "1. Identificar datos conocidos. 2. Mostrar el método. 3. Dar la respuesta final. 4. Verificarla brevemente.",
          instructions: [
            "Resuelve el problema paso a paso y explica cada transición.",
            "Destaca fórmulas, supuestos y respuesta final.",
            "Comprueba brevemente si el resultado es razonable antes de terminar."
          ],
          explanation: "Se aplicó una estrategia de tutoría para exámenes que prioriza exactitud, método y verificación.",
          summaryDetail: "Se aplicó una estrategia de tutoría para exámenes para mejorar exactitud y calidad del razonamiento."
        },
        concept_explanation: {
          label: "Explicación de conceptos",
          summaryDetail: "Se aplicó una estrategia de explicación didáctica."
        },
        interview_prep: {
          label: "Preparación para entrevistas",
          role: "un coach de entrevistas centrado en respuestas creíbles y sólidas",
          goal: "Generar una respuesta más específica, convincente y profesional.",
          audience: "Un entrevistador o responsable de contratación",
          tone: "profesional y seguro",
          format: "respuesta base más versión reforzada y notas breves",
          deliverables: "1. Una respuesta pulida. 2. Una alternativa más fuerte. 3. Breves notas de mejora.",
          instructions: [
            "Usa ejemplos concretos en lugar de afirmaciones vagas.",
            "Mantén la respuesta breve y bien estructurada.",
            "Equilibra confianza con credibilidad."
          ],
          explanation: "Se aplicó una estrategia de preparación para entrevistas para reforzar ejemplos, estructura y lenguaje profesional.",
          summaryDetail: "Se aplicó una estrategia de entrevista para mejorar especificidad y posicionamiento profesional."
        },
        application_materials: {
          label: "Materiales de postulación",
          summaryDetail: "Se aplicó una estrategia para materiales de postulación."
        },
        stress_support: {
          label: "Apoyo práctico",
          role: "un coach de apoyo centrado en claridad emocional y pasos concretos",
          goal: "Ayudar al usuario a pensar con más claridad y elegir la siguiente acción más útil.",
          audience: "Una persona bajo estrés que necesita estructura tranquila",
          tone: "de apoyo y sereno",
          format: "reencuadre breve más próximos pasos",
          deliverables: "1. Reencuadre breve. 2. Qué importa ahora. 3. Siguiente acción concreta.",
          instructions: [
            "No imites a un profesional clínico ni hagas afirmaciones terapéuticas.",
            "Evita consuelo vacío y prioriza claridad práctica.",
            "Céntrate en reducir ruido emocional y avanzar."
          ],
          explanation: "Se aplicó una estrategia de apoyo práctico para priorizar claridad y movimiento útil por encima de consuelo genérico.",
          summaryDetail: "Se aplicó una estrategia de apoyo práctico para mejorar claridad y utilidad inmediata."
        },
        debug_support: {
          label: "Diagnóstico técnico",
          role: "un asistente técnico orientado al diagnóstico",
          goal: "Exponer con claridad la causa probable, la evidencia y los siguientes pasos de depuración.",
          audience: "Un desarrollador que quiere resolver un problema con eficiencia",
          tone: "directo y preciso",
          format: "diagnóstico más siguientes acciones",
          deliverables: "1. Causa probable. 2. Evidencia. 3. Ruta de corrección. 4. Verificación.",
          instructions: [
            "Prioriza la causa más probable antes de listar alternativas.",
            "Mantén la explicación breve y basada en evidencia.",
            "Termina con una acción concreta de verificación."
          ],
          explanation: "Se aplicó una estrategia de diagnóstico técnico para pedir causa, evidencia y validación en lugar de sugerencias genéricas.",
          summaryDetail: "Se aplicó un flujo de diagnóstico para mejorar claridad técnica y capacidad de acción."
        },
        general_assistance: {
          label: "Asistencia general",
          summaryDetail: "Se aplicó una estrategia general de optimización."
        }
      }
    };

    const languageProfiles = profiles[language];
    const fallbackKey = {
      communication: "general_communication",
      learning: "concept_explanation",
      career: "application_materials",
      support: "stress_support",
      technical: "debug_support",
      general: "general_assistance"
    }[category];

    return languageProfiles[scenario] || languageProfiles[fallbackKey] || languageProfiles.general_assistance;
  }

  function localizedSectionLabels(language) {
    const map = {
      en: {
        scenario: "Scenario Focus",
        deliverables: "Deliverables"
      },
      zh: {
        scenario: "场景聚焦",
        deliverables: "交付要求"
      },
      es: {
        scenario: "Enfoque del caso",
        deliverables: "Entregables"
      }
    };

    return map[language];
  }

  function inferGoal(task, category, localeText) {
    if (!task) {
      return localeText.defaultGoal;
    }

    if (category === "learning") {
      if (localeText === I18N.zh.content) {
        return "让答案更准确，同时把推理步骤解释清楚。";
      }
      if (localeText === I18N.es.content) {
        return "Mejorar la precisión y dejar claros los pasos del razonamiento.";
      }
      return "Improve accuracy and explain the reasoning clearly.";
    }

    if (category === "communication") {
      if (localeText === I18N.zh.content) {
        return "写出清楚、礼貌、有效并且能直接发送的内容。";
      }
      if (localeText === I18N.es.content) {
        return "Crear un mensaje claro, educado y listo para enviar.";
      }
      return "Create a clear, respectful, and ready-to-send message.";
    }

    return localeText.defaultGoal;
  }

  function inferAudience(category, localeText) {
    if (category === "learning") {
      if (localeText === I18N.zh.content) {
        return "正在学习这门课的学生";
      }
      if (localeText === I18N.es.content) {
        return "Un estudiante que está aprendiendo la materia";
      }
      return "A student trying to learn the topic";
    }

    return localeText.defaultAudience;
  }

  function inferTone(category, localeText) {
    if (category === "communication" || category === "career") {
      if (localeText === I18N.zh.content) {
        return "专业";
      }
      if (localeText === I18N.es.content) {
        return "profesional";
      }
      return "professional";
    }

    if (category === "support") {
      if (localeText === I18N.zh.content) {
        return "支持性";
      }
      if (localeText === I18N.es.content) {
        return "de apoyo";
      }
      return "supportive";
    }

    if (category === "technical") {
      if (localeText === I18N.zh.content) {
        return "直接";
      }
      if (localeText === I18N.es.content) {
        return "directo";
      }
      return "direct";
    }

    if (localeText === I18N.zh.content) {
      return "清晰";
    }
    if (localeText === I18N.es.content) {
      return "claro";
    }
    return "clear";
  }

  function inferFormat(category, localeText) {
    if (category === "learning" || category === "technical") {
      if (localeText === I18N.zh.content) {
        return "分步骤计划";
      }
      if (localeText === I18N.es.content) {
        return "plan paso a paso";
      }
      return "step by step plan";
    }

    if (category === "communication") {
      if (localeText === I18N.zh.content) {
        return "脚本/文案";
      }
      if (localeText === I18N.es.content) {
        return "guion";
      }
      return "script";
    }

    if (category === "career") {
      if (localeText === I18N.zh.content) {
        return "要点列表";
      }
      if (localeText === I18N.es.content) {
        return "lista con viñetas";
      }
      return "bullet list";
    }

    if (localeText === I18N.zh.content) {
      return "自然段";
    }
    if (localeText === I18N.es.content) {
      return "párrafos";
    }
    return "paragraphs";
  }

  function rawPromptScore(task, constraints) {
    let score = 16;
    const normalizedTask = normalizeText(task);
    const normalizedConstraints = normalizeText(constraints);

    if (normalizedTask.length > 20) {
      score += 12;
    }
    if (normalizedTask.length > 60) {
      score += 10;
    }
    if (detectTaskCategory(normalizedTask) !== "general") {
      score += 10;
    }
    if (/(under|avoid|keep|must|不要|必须|限制|limit|max|exactly)/i.test(normalizedTask + " " + normalizedConstraints)) {
      score += 8;
    }

    return Math.min(score, 58);
  }

  function improvedPromptScore(task, goal, audience, constraints, autoSelected, scenarioProfileData) {
    let score = rawPromptScore(task, constraints) + 20;

    if (normalizeText(goal)) {
      score += 8;
    }
    if (normalizeText(audience)) {
      score += 6;
    }
    if (normalizeText(constraints)) {
      score += 6;
    }
    if (autoSelected) {
      score += 4;
    }
    if (scenarioProfileData.instructions && scenarioProfileData.instructions.length) {
      score += 6;
    }
    if (scenarioProfileData.deliverables) {
      score += 4;
    }

    return Math.min(score, 96);
  }

  function categoryLabel(category, text) {
    const map = {
      general: text.categoryGeneral,
      communication: text.categoryCommunication,
      learning: text.categoryLearning,
      career: text.categoryCareer,
      support: text.categorySupport,
      technical: text.categoryTechnical
    };
    return map[category];
  }

  function languageLabel(language) {
    if (language === "zh") {
      return "中文";
    }
    if (language === "es") {
      return "Español";
    }
    return "English";
  }

  function interpolate(template, values) {
    return template.replace(/\{(\w+)\}/g, (_, key) => values[key]);
  }

  function buildExplanations(text, category, hasConstraints, autoSelected, scenarioProfileData) {
    const explanations = [text.explainRole, text.explainStructure];

    if (scenarioProfileData.explanation) {
      explanations.push(scenarioProfileData.explanation);
    }

    if (hasConstraints) {
      explanations.push(text.explainConstraints);
    } else {
      explanations.push(text.explainFlexible);
    }

    if (autoSelected) {
      explanations.push(text.explainAuto);
    }

    if (category === "support") {
      explanations.push(text.explainSupport);
    }

    if (category === "technical" || category === "learning") {
      explanations.push(text.explainTechnical);
    }

    return explanations;
  }

  function buildVariations(input) {
    const { text, task, goal, audience, tone, format, constraints, role, scenarioProfileData } = input;
    const baseTask = task || text.defaultTask;
    const baseGoal = goal || text.defaultGoal;
    const baseAudience = audience || text.defaultAudience;
    const extra = constraints
      ? `${text.sectionConstraints}: ${constraints}`
      : `${text.sectionConstraints}: ${text.fallbackConstraints}`;
    const deliverables = scenarioProfileData.deliverables ? `
${scenarioProfileData.deliverables}` : "";

    return [
      {
        label: text.variation1,
        text:
          `${text.introRole} ${role}.
` +
          `${text.sectionTask}: ${baseTask}
` +
          `${text.sectionObjective}: ${baseGoal}
` +
          `${text.sectionAudience}: ${baseAudience}
` +
          `${text.sectionFormat}: ${format}${deliverables}
` +
          `${extra}`
      },
      {
        label: text.variation2,
        text:
          `${text.introRole} ${role}.
` +
          `${text.sectionTask}: ${baseTask}
` +
          `${text.sectionObjective}: ${baseGoal}
` +
          `${text.sectionTone}: ${tone}
` +
          `${text.variationStructure}:
${text.variationStructureList}${deliverables}
` +
          `${extra}`
      },
      {
        label: text.variation3,
        text:
          `${text.introRole} ${role}.
` +
          `${text.variationAssume}
` +
          `${text.sectionTask}: ${baseTask}
` +
          `${text.sectionObjective}: ${baseGoal}
` +
          `${text.sectionAudience}: ${baseAudience}
` +
          `${text.sectionTone}: ${tone}${deliverables}
` +
          `${extra}`
      }
    ];
  }

  function buildSummary(language, category, text, rawScore, improvedScore, autoSelected, scenarioProfileData) {
    const lift = improvedScore - rawScore;
    return {
      liftLabel: interpolate(text.liftLabel, { lift }),
      scoreLine: interpolate(text.scoreLine, { raw: rawScore, improved: improvedScore }),
      languageLabel: languageLabel(language),
      categoryLabel: scenarioProfileData.label || categoryLabel(category, text),
      modeLabel: autoSelected ? text.modeAuto : text.modeManual,
      modeDetail: scenarioProfileData.summaryDetail || (autoSelected ? text.explainAuto : text.explainStructure)
    };
  }

  function buildUpgradeReport(language, text, role, format, constraints, autoSelected, scenarioProfileData) {
    const labels = {
      en: {
        role: "Assigned role",
        roleDetail: "The system selected a working role so the model answers from a stronger perspective.",
        strategy: "Scenario strategy",
        strategyDetail: scenarioProfileData.summaryDetail || "The prompt has been shaped around the detected task.",
        delivery: "Delivery spec",
        deliveryDetail: scenarioProfileData.instructions && scenarioProfileData.instructions.length
          ? scenarioProfileData.instructions[0]
          : text.instruction2,
        guardrails: "Guardrails",
        guardrailsValue: constraints || "Default practical guardrails",
        guardrailsDetail: constraints
          ? "Your explicit limits were promoted into the final prompt."
          : "The system kept practical defaults for ambiguity, specificity, and missing context."
      },
      zh: {
        role: "系统角色",
        roleDetail: "系统先为模型分配了更合适的工作身份，避免回答没有视角。",
        strategy: "场景策略",
        strategyDetail: scenarioProfileData.summaryDetail || "系统已围绕识别出的任务场景组织 Prompt。",
        delivery: "交付规范",
        deliveryDetail: scenarioProfileData.instructions && scenarioProfileData.instructions.length
          ? scenarioProfileData.instructions[0]
          : text.instruction2,
        guardrails: "保护约束",
        guardrailsValue: constraints || "默认实用约束",
        guardrailsDetail: constraints
          ? "你明确写出的限制条件已被提升到最终 Prompt 中。"
          : "即使你没有额外填写限制，系统仍保留了缺失信息判断、具体输出和避免空泛回答的默认约束。"
      },
      es: {
        role: "Rol asignado",
        roleDetail: "El sistema asignó una identidad de trabajo más útil para evitar respuestas sin perspectiva.",
        strategy: "Estrategia del caso",
        strategyDetail: scenarioProfileData.summaryDetail || "El prompt fue reorganizado según la tarea detectada.",
        delivery: "Especificación de entrega",
        deliveryDetail: scenarioProfileData.instructions && scenarioProfileData.instructions.length
          ? scenarioProfileData.instructions[0]
          : text.instruction2,
        guardrails: "Guardrails",
        guardrailsValue: constraints || "Restricciones prácticas por defecto",
        guardrailsDetail: constraints
          ? "Tus límites explícitos se incorporaron al prompt final."
          : "Aunque no añadiste límites, el sistema mantuvo reglas prácticas para contexto faltante y resultados útiles."
      }
    };

    const copy = labels[language];
    return [
      {
        label: copy.role,
        value: role,
        detail: copy.roleDetail
      },
      {
        label: copy.strategy,
        value: scenarioProfileData.label,
        detail: copy.strategyDetail
      },
      {
        label: copy.delivery,
        value: scenarioProfileData.deliverables || format,
        detail: copy.deliveryDetail
      },
      {
        label: copy.guardrails,
        value: copy.guardrailsValue,
        detail: copy.guardrailsDetail
      }
    ];
  }

  function buildPrompt(input) {
    const chosenLanguage = input.language || detectInputLanguage(input.task);
    const locale = I18N[chosenLanguage];
    const text = locale.content;
    const labels = localizedSectionLabels(chosenLanguage);

    const task = normalizeText(input.task);
    const category = detectTaskCategory(task);
    const scenario = detectScenario(task, category);
    const scenarioProfileData = scenarioProfile(chosenLanguage, scenario, category);
    const goal = normalizeText(input.goal) || scenarioProfileData.goal || inferGoal(task, category, text);
    const audience = normalizeText(input.audience) || scenarioProfileData.audience || inferAudience(category, text);
    const tone = normalizeText(input.tone) || scenarioProfileData.tone || inferTone(category, text);
    const format = normalizeText(input.format) || scenarioProfileData.format || inferFormat(category, text);
    const constraints = normalizeText(input.constraints);
    const autoSelected = !normalizeText(input.tone) || !normalizeText(input.format);
    const role = scenarioProfileData.role || roleForCategory(category, tone, chosenLanguage);
    const rawScore = rawPromptScore(task, constraints);
    const improvedScore = improvedPromptScore(task, goal, audience, constraints, autoSelected, scenarioProfileData);

    const lines = [
      `${text.introRole} ${role}.`,
      "",
      `${labels.scenario}:`,
      scenarioProfileData.label || categoryLabel(category, text),
      "",
      `${text.sectionTask}:`,
      task || text.defaultTask,
      "",
      `${text.sectionObjective}:`,
      goal,
      "",
      `${text.sectionAudience}:`,
      audience,
      "",
      `${text.sectionTone}:`,
      tone,
      "",
      `${text.sectionFormat}:`,
      format
    ];

    if (scenarioProfileData.deliverables) {
      lines.push("", `${labels.deliverables}:`, scenarioProfileData.deliverables);
    }

    if (constraints) {
      lines.push("", `${text.sectionConstraints}:`, constraints);
    }

    if (scenarioProfileData.instructions && scenarioProfileData.instructions.length) {
      lines.push("", ...scenarioProfileData.instructions);
    }

    lines.push("", text.instruction1, text.instruction2, text.instruction3);

    return {
      optimizedPrompt: lines.join("\n"),
      explanations: buildExplanations(text, category, !!constraints, autoSelected, scenarioProfileData),
      variations: buildVariations({
        text,
        task,
        goal,
        audience,
        tone,
        format,
        constraints,
        role,
        scenarioProfileData
      }),
      summary: buildSummary(chosenLanguage, category, text, rawScore, improvedScore, autoSelected, scenarioProfileData),
      upgradeReport: buildUpgradeReport(chosenLanguage, text, role, format, constraints, autoSelected, scenarioProfileData)
    };
  }

  window.PromptCoachEngine = {
    buildPrompt,
    optimizePrompt: buildPrompt,
    detectInputLanguage,
    i18n: I18N
  };
})();
