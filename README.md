# Prompt Coach

Prompt Coach is a local-first web app that helps ordinary users turn rough requests into stronger AI prompts.

The core belief behind the project is simple: most people do not want to become formal prompt engineers before they can benefit from AI. They want to describe what they need in normal language and still get strong results. Prompt Coach tries to close that gap.

## Why This Project Exists

A lot of people already use AI, but many still ask for things in a vague way:

- "help me write this better"
- "make a prompt for studying"
- "ask AI to explain this"

Those requests are understandable, but they often lead to generic answers. Prompt Coach tries to close that gap by adding:

- a clearer role
- a specific objective
- a target audience
- a tone
- an output format
- useful constraints

## Product Direction

This project is not trying to be another prompt storage tool for developers.

It is trying to become a coaching layer for normal users:

- one simple input first
- stronger prompts automatically
- optional advanced controls later
- explanations that help the user improve over time
- automatic tone and format selection when the user does not want to decide

## MVP Scope

This version focuses on one job and does it clearly:

1. Accept a raw user request in plain language
2. Convert it into an improved prompt
3. Explain what changed
4. Generate a few useful prompt variations
5. Support English, Chinese, and Spanish
6. Infer useful defaults so the user does not need to fill a long form

The app is intentionally local-first and dependency-light so the product idea stays easy to understand.

## Features

- Single main input for low-friction use
- Optional advanced settings for users who want more control
- Automatic tone and format selection for common scenarios
- Prompt optimization with a simple coaching engine
- Prompt variations for different use cases
- Three-language UI and prompt output support
- Copy-ready output
- A polished interface that works on desktop and mobile
- No external API required for the MVP

## Project Structure

```text
prompt-coach/
├── docs/
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

## How To Run

From the `prompt-coach` folder:

```bash
npm start
```

Then open:

```text
http://localhost:4173
```

## How To Test

```bash
npm test
```

## Bigger Vision

This repo is the first version of a bigger idea: a tool that helps regular users become better prompt engineers without making them study prompt engineering first.

Future directions:

- model-specific prompt styles
- task-specific prompt packs
- side-by-side prompt comparison
- prompt quality scoring
- history and saved drafts
- optional AI-powered prompt rewriting
- document upload and task-specific agent tuning
- education-focused prompt optimization for course materials and mock exams
- study workflows that adapt prompts around one specific class instead of generic homework help

## Design Notes

- The project avoids heavy dependencies on purpose.
- The app is easy to read, easy to demo, and easy to build on.
- The first screen is intentionally simpler than before because ordinary users should not have to fill a large prompt form.
- The visual style is meant to feel intentional instead of looking like a generic dashboard.
- The product direction is moving toward better outcomes, not just prettier prompt text.

## Status

This project is at the MVP stage, but the core interaction is already usable:

- write a rough request
- get a stronger prompt
- understand why it improved
- switch between English, Chinese, and Spanish
- rely on automatic defaults when you do not want to fine-tune settings

That is enough to communicate the product direction clearly on GitHub.
