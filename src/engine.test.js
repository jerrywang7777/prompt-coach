const assert = require("assert");
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const engineSource = fs.readFileSync(path.join(__dirname, "engine.js"), "utf8");
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(engineSource, sandbox);

const { buildPrompt, detectInputLanguage } = sandbox.window.PromptCoachEngine;

assert.strictEqual(detectInputLanguage("我想让AI帮我写一封邮件"), "zh");
assert.strictEqual(detectInputLanguage("Quiero que la IA me ayude a escribir un correo."), "es");
assert.strictEqual(detectInputLanguage("Help me prepare for an interview."), "en");

const teacherResult = buildPrompt({
  language: "zh",
  task: "向老师请假，我今天感冒不舒服，想发一条礼貌的消息。"
});

assert.ok(teacherResult.optimizedPrompt.includes("场景聚焦"));
assert.ok(teacherResult.optimizedPrompt.includes("教师沟通"));
assert.ok(teacherResult.optimizedPrompt.includes("可直接发送版本"));
assert.ok(teacherResult.summary.categoryLabel.includes("教师沟通"));
assert.ok(Array.isArray(teacherResult.upgradeReport));
assert.strictEqual(teacherResult.upgradeReport.length, 4);
assert.ok(teacherResult.upgradeReport.some((item) => item.label.includes("系统角色")));
assert.ok(teacherResult.explanations.some((item) => item.includes("教师沟通策略")));

const learningResult = buildPrompt({
  language: "zh",
  task: "我在复习物理考试，想让 AI 更准确地帮我做题并解释步骤。"
});

assert.ok(learningResult.optimizedPrompt.includes("考试题目辅导"));
assert.ok(learningResult.optimizedPrompt.includes("最终答案"));
assert.ok(learningResult.summary.categoryLabel.includes("考试题目辅导"));
assert.ok(learningResult.upgradeReport.some((item) => item.value.includes("考试题目辅导") || item.detail.includes("考试辅导策略")));

const interviewResult = buildPrompt({
  task: "Help me prepare a strong interview answer about a time I solved a difficult problem."
});

assert.ok(interviewResult.optimizedPrompt.includes("Interview preparation"));
assert.ok(interviewResult.optimizedPrompt.includes("Brief coaching notes"));
assert.ok(interviewResult.summary.categoryLabel.includes("Interview preparation"));

const spanishSupportResult = buildPrompt({
  language: "es",
  task: "Tengo ansiedad por una situacion personal y quiero pensar con mas calma."
});

assert.ok(spanishSupportResult.optimizedPrompt.includes("Apoyo práctico"));
assert.ok(spanishSupportResult.optimizedPrompt.includes("Siguiente acción concreta"));
assert.ok(spanishSupportResult.summary.modeLabel.length > 0);

console.log("engine.test.js passed");
