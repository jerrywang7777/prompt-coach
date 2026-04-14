(function () {
  const rawPrompt = document.getElementById("rawPrompt");
  const goal = document.getElementById("goal");
  const audience = document.getElementById("audience");
  const tone = document.getElementById("tone");
  const format = document.getElementById("format");
  const constraints = document.getElementById("constraints");
  const language = document.getElementById("language");
  const languageNotice = document.getElementById("languageNotice");
  const outputPanel = document.getElementById("outputPanel");

  const optimizedPrompt = document.getElementById("optimizedPrompt");
  const upgradeReport = document.getElementById("upgradeReport");
  const explanations = document.getElementById("explanations");
  const variations = document.getElementById("variations");
  const summaryLift = document.getElementById("summaryLift");
  const summaryLiftDetail = document.getElementById("summaryLiftDetail");
  const summaryLanguage = document.getElementById("summaryLanguage");
  const summaryCategory = document.getElementById("summaryCategory");
  const summaryMode = document.getElementById("summaryMode");
  const summaryModeDetail = document.getElementById("summaryModeDetail");

  const optimizeButton = document.getElementById("optimizeButton");
  const exampleButton = document.getElementById("exampleButton");
  const clearButton = document.getElementById("clearButton");
  const copyPromptButton = document.getElementById("copyPromptButton");
  const hintButtons = document.querySelectorAll(".hint-pill");

  let presetTaskValue = "";
  let presetFieldsActive = false;
  let advancedFieldsTouched = false;

  function currentLanguage() {
    return language.value || "en";
  }

  function uiText() {
    return window.PromptCoachEngine.i18n[currentLanguage()].ui;
  }

  function contentText() {
    return window.PromptCoachEngine.i18n[currentLanguage()].content;
  }

  function currentInput() {
    return {
      language: currentLanguage(),
      task: rawPrompt.value,
      goal: goal.value,
      audience: audience.value,
      tone: tone.value,
      format: format.value,
      constraints: constraints.value
    };
  }

  function markPresetState(taskValue) {
    presetTaskValue = taskValue || "";
    presetFieldsActive = Boolean(taskValue);
    advancedFieldsTouched = false;
  }

  function clearAdvancedFields() {
    goal.value = "";
    audience.value = "";
    tone.value = "";
    format.value = "";
    constraints.value = "";
  }

  function releasePresetFieldsIfNeeded() {
    if (!presetFieldsActive || advancedFieldsTouched) {
      return;
    }

    const currentTask = rawPrompt.value.trim();
    if (!currentTask || currentTask === presetTaskValue) {
      return;
    }

    clearAdvancedFields();
    clearActiveHints();
    presetFieldsActive = false;
    presetTaskValue = "";
  }

  function applyTranslations() {
    const text = uiText();

    document.documentElement.lang = currentLanguage();

    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const key = node.dataset.i18n;
      if (text[key]) {
        node.textContent = text[key];
      }
    });

    document.querySelectorAll("[data-placeholder-key]").forEach((node) => {
      const key = node.dataset.placeholderKey;
      if (text[key]) {
        node.placeholder = text[key];
      }
    });
  }

  function showNotice(message, emphasized) {
    languageNotice.textContent = message;
    languageNotice.classList.toggle("is-emphasized", Boolean(emphasized));
  }

  function setIdleNotice() {
    showNotice(uiText().languageNoticeIdle, false);
  }

  function maybeSwitchLanguageFromInput() {
    releasePresetFieldsIfNeeded();
    const task = rawPrompt.value.trim();
    if (!task) {
      setIdleNotice();
      return;
    }

    const detectedLanguage = window.PromptCoachEngine.detectInputLanguage(task);
    if (detectedLanguage && detectedLanguage !== currentLanguage()) {
      language.value = detectedLanguage;
      applyTranslations();
      showNotice(uiText().languageNoticeSwitched, true);
      return;
    }

    showNotice(uiText().languageNoticeKept, false);
  }

  function renderSummary(summary) {
    summaryLift.textContent = summary.liftLabel;
    summaryLiftDetail.textContent = summary.scoreLine;
    summaryLanguage.textContent = summary.languageLabel;
    summaryCategory.textContent = summary.categoryLabel;
    summaryMode.textContent = summary.modeLabel;
    summaryModeDetail.textContent = summary.modeDetail;
  }

  function renderUpgradeReport(cards) {
    upgradeReport.innerHTML = "";
    cards.forEach((card) => {
      const article = document.createElement("article");
      article.className = "report-card";

      const label = document.createElement("span");
      label.className = "report-label";
      label.textContent = card.label;

      const value = document.createElement("strong");
      value.className = "report-value";
      value.textContent = card.value;

      const detail = document.createElement("p");
      detail.className = "report-detail";
      detail.textContent = card.detail;

      article.appendChild(label);
      article.appendChild(value);
      article.appendChild(detail);
      upgradeReport.appendChild(article);
    });
  }

  function renderResult(result) {
    renderSummary(result.summary);
    renderUpgradeReport(result.upgradeReport || []);
    optimizedPrompt.textContent = result.optimizedPrompt;
    optimizedPrompt.classList.remove("placeholder-box");
    outputPanel.classList.add("is-ready");

    explanations.innerHTML = "";
    result.explanations.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      explanations.appendChild(li);
    });

    variations.innerHTML = "";
    result.variations.forEach((variation) => {
      const card = document.createElement("article");
      card.className = "variation-card";

      const heading = document.createElement("h4");
      heading.textContent = variation.label;

      const pre = document.createElement("pre");
      pre.textContent = variation.text;

      card.appendChild(heading);
      card.appendChild(pre);
      variations.appendChild(card);
    });
  }

  function optimize() {
    maybeSwitchLanguageFromInput();
    const result = window.PromptCoachEngine.buildPrompt(currentInput());
    renderResult(result);
  }

  function loadExample() {
    const content = contentText();
    rawPrompt.value = content.exampleTask;
    goal.value = content.exampleGoal;
    audience.value = content.exampleAudience;
    tone.value = "professional";
    format.value = "script";
    constraints.value = content.exampleConstraints;
    markPresetState(content.exampleTask);
    optimize();
  }

  function clearActiveHints() {
    hintButtons.forEach((button) => {
      button.classList.remove("is-active");
    });
  }

  function clearSummary() {
    const text = uiText();
    summaryLift.textContent = "+0";
    summaryLiftDetail.textContent = text.summaryPlaceholder;
    summaryLanguage.textContent = "-";
    summaryCategory.textContent = "-";
    summaryMode.textContent = "-";
    summaryModeDetail.textContent = text.summaryModeCopy;
  }

  function clearAll() {
    const text = uiText();
    rawPrompt.value = "";
    clearAdvancedFields();
    presetTaskValue = "";
    presetFieldsActive = false;
    advancedFieldsTouched = false;
    optimizedPrompt.textContent = text.promptPlaceholder;
    optimizedPrompt.classList.add("placeholder-box");
    upgradeReport.innerHTML = `<article class="report-card placeholder-card">${text.reportPlaceholder}</article>`;
    explanations.innerHTML = `<li>${text.changesPlaceholder}</li>`;
    variations.innerHTML = `<article class="variation-card placeholder-card">${text.variationsPlaceholder}</article>`;
    outputPanel.classList.remove("is-ready");
    clearActiveHints();
    clearSummary();
    setIdleNotice();
  }

  async function copyPrompt() {
    const text = optimizedPrompt.textContent;
    if (!text || text === uiText().promptPlaceholder) {
      return;
    }

    try {
      await navigator.clipboard.writeText(text);
      copyPromptButton.textContent = currentLanguage() === "zh" ? "已复制" : currentLanguage() === "es" ? "Copiado" : "Copied";
      setTimeout(() => {
        copyPromptButton.textContent = uiText().copyButton;
      }, 1200);
    } catch (error) {
      copyPromptButton.textContent = currentLanguage() === "zh" ? "失败" : currentLanguage() === "es" ? "Error" : "Failed";
      setTimeout(() => {
        copyPromptButton.textContent = uiText().copyButton;
      }, 1200);
    }
  }

  function applyHint(type, button) {
    const content = contentText();
    goal.value = "";
    audience.value = "";
    constraints.value = "";
    clearActiveHints();
    button.classList.add("is-active");

    if (type === "study") {
      rawPrompt.value = content.hintStudyFill;
      tone.value = "";
      format.value = "";
    } else if (type === "email") {
      rawPrompt.value = content.hintEmailFill;
      tone.value = "professional";
      format.value = "script";
    } else if (type === "career") {
      rawPrompt.value = content.hintCareerFill;
      tone.value = "professional";
      format.value = "bullet list";
    } else if (type === "support") {
      rawPrompt.value = content.hintSupportFill;
      tone.value = "supportive";
      format.value = "paragraphs";
    }

    markPresetState(rawPrompt.value.trim());
    maybeSwitchLanguageFromInput();
  }

  [goal, audience, tone, format, constraints].forEach((field) => {
    field.addEventListener("input", () => {
      advancedFieldsTouched = true;
      presetFieldsActive = false;
    });

    field.addEventListener("change", () => {
      advancedFieldsTouched = true;
      presetFieldsActive = false;
    });
  });

  optimizeButton.addEventListener("click", optimize);
  exampleButton.addEventListener("click", loadExample);
  clearButton.addEventListener("click", clearAll);
  copyPromptButton.addEventListener("click", copyPrompt);
  language.addEventListener("change", () => {
    applyTranslations();
    clearSummary();
    setIdleNotice();
  });
  rawPrompt.addEventListener("input", maybeSwitchLanguageFromInput);

  hintButtons.forEach((button) => {
    button.addEventListener("click", () => {
      applyHint(button.dataset.fill, button);
    });
  });

  applyTranslations();
  clearAll();
})();
