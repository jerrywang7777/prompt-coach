# Prompt Coach

> A multilingual AI prompt coach that turns plain-language requests into stronger, scenario-aware prompts for real-world tasks.

Prompt Coach is a local-first web app for people who want better AI results without having to learn prompt engineering first.

Instead of asking users to build prompts from scratch, the app starts from a normal request, detects the likely use case, and upgrades that request into a more structured and usable prompt.

## Why It Matters

Most people already use AI, but many still struggle with the same gap:

- they know what they want
- they do not know how to ask for it well
- they get generic answers because the input is too vague

Prompt Coach is designed to close that gap.

It focuses on a simple idea: a user should be able to write one rough request and still receive a stronger, more task-aware prompt.

## What The Product Does

- Accepts a plain-language request
- Detects language automatically across English, Chinese, and Spanish
- Identifies the likely use case behind the request
- Generates a stronger prompt with clearer structure and better defaults
- Explains what the system added and why it matters
- Produces prompt variations for different levels of structure

## Current Product Highlights

- Low-friction workflow with one primary input field
- Scenario-aware prompt generation for study, communication, career, support, and technical tasks
- An optimization report that makes system-added structure visible
- Multilingual UI and multilingual prompt output
- Local-first MVP with no external API dependency
- Lightweight test coverage for the prompt engine

## Preview

The current repo already includes three core product surfaces:

| Surface | What it shows | Why it matters |
| --- | --- | --- |
| Main workspace | A low-friction input flow with optional advanced controls | Keeps the experience accessible for non-technical users |
| Optimization report | The role, scenario strategy, delivery spec, and guardrails added by the system | Makes the product value explicit instead of hiding it inside one long prompt |
| Scenario-aware output | Different prompt structures for teacher communication, exam tutoring, interview prep, and more | Moves the project beyond generic prompt rewriting |

Recommended screenshot order for the GitHub homepage:

1. Main workspace overview
2. Study-use-case result with the optimization report visible
3. Scenario-specific output example such as teacher communication or interview prep

## Core Workflow

```text
Raw request
  -> language detection
  -> use-case detection
  -> stronger prompt structure
  -> optimization report
  -> prompt variations
```

## Product Direction

This project is not trying to become another prompt storage tool for developers.

It is trying to become a coaching layer for regular users:

- one simple input first
- stronger prompts automatically
- optional controls later
- explanations that teach while they help
- better outcomes, not just prettier wording

## Example Use Cases

- A student wants AI to act like a better physics exam helper
- A user wants to write a respectful professor email without sounding manipulative
- A job seeker wants a stronger interview answer with better examples
- A stressed user wants a calmer, more practical way to frame a personal situation

## Tech Stack

- Vanilla HTML, CSS, and JavaScript
- Small Node server for local development
- Heuristic prompt engine for the MVP
- Minimal dependency surface to keep the project easy to run and easy to understand

## Project Structure

```text
prompt-coach/
├── docs/
│   ├── roadmap.md
│   └── timeline.md
├── src/
│   ├── app.js
│   ├── engine.js
│   ├── engine.test.js
│   └── styles.css
├── index.html
├── package.json
├── README.md
└── server.js
```

## Run Locally

```bash
npm start
```

Then open:

```text
http://localhost:4173
```

## Test

```bash
npm test
```

## Roadmap

The next phase is already scoped in a more product-like way.

See:

- [docs/timeline.md](./docs/timeline.md)
- [docs/roadmap.md](./docs/roadmap.md)

## Longer-Term Vision

The bigger opportunity is not just prompt cleanup.

The more valuable direction is helping users tune AI for real tasks:

- course-specific study prompting
- uploaded slides and mock exams
- task-specific prompt systems
- model-aware prompt styles
- optional LLM-backed rewriting mode
- saved history and reusable prompt sessions

## Status

Prompt Coach is currently at the MVP stage, but the core interaction is already working:

- write a rough request
- get a stronger prompt
- see what the system added
- copy a result that is more usable than the original input

That is enough to demonstrate both the product idea and the next logical direction.
