# Prompt Coach Roadmap

## Current Position

Prompt Coach has reached a solid MVP checkpoint:

- the core prompt upgrade flow works
- multilingual support is in place
- scenario-aware prompting is working for several useful task types
- the product now exposes an optimization report instead of hiding value inside one long output block

The next goal is not just to add more features. It is to increase product clarity, result quality, and differentiation.

## Release Themes

### v0.2 - Product Clarity

Focus:

- make the before-and-after value easier to understand
- improve repository presentation and in-product messaging
- tighten scenario labeling and result explanation

Target outcomes:

- clearer result comparison
- more explicit system-added value
- stronger GitHub first impression

### v0.3 - Stronger Task Systems

Focus:

- deepen scenario-specific prompt generation
- add more robust study, communication, and career flows
- improve prompt quality for high-value use cases

Target outcomes:

- less generic prompt structure
- more expert-like task framing
- stronger usefulness for repeat scenarios

### v0.4 - Real Product Depth

Focus:

- save prompt sessions locally
- allow history and reuse
- introduce optional model-aware prompt presets
- make the app feel less like a demo and more like a tool users return to

Target outcomes:

- better retention
- higher practical value
- clearer path toward a real product

### v0.5 - Domain Tuning Direction

Focus:

- experiment with education-oriented prompt tuning
- design a workflow for course-specific study support
- prepare for uploaded materials such as slides and mock exams

Target outcomes:

- a stronger monetizable direction
- clearer differentiation from generic prompt tools
- a bridge toward agent tuning instead of only prompt rewriting

## Recommended Next Commits

These are the next commits I would make to keep the repo feeling like a real engineering project instead of a one-shot upload.

### Commit 1

`feat: add before-after comparison panel`

Scope:

- show the original request next to the upgraded prompt
- highlight what the system inferred automatically
- make the value of optimization easier to scan

### Commit 2

`feat: improve scenario coverage for study and communication flows`

Scope:

- refine study-scene detection
- improve teacher-message and formal-request prompting
- add more explicit guardrails for high-risk ambiguity cases

### Commit 3

`feat: add local history for recent prompt sessions`

Scope:

- store recent requests in local storage
- let users reopen and re-run past prompt sessions
- improve repeat usability without adding a backend

### Commit 4

`docs: add screenshots and homepage polish`

Scope:

- add real screenshots to the README
- tighten wording and feature presentation
- improve the first impression for GitHub visitors

### Commit 5

`feat: add model-targeted output modes`

Scope:

- let users generate variants tuned for different model styles
- keep the UI simple while increasing practical usefulness

## Execution Notes

To keep the project disciplined, I would continue using this pattern:

1. Improve one visible user-facing behavior at a time
2. Keep the frontend readable and lightweight
3. Add or update a small verification step when engine behavior changes
4. Preserve the product direction: real users first, prompt hobbyists second

## Near-Term Priority

If only one thing should happen next, it should be this:

- make the difference between the raw request and the upgraded prompt more visually obvious

That change would improve both the product experience and the GitHub presentation at the same time.
