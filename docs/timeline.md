# Prompt Coach Timeline

## Phase 1: Product Framing

- Defined the problem as a consumer prompt coaching problem, not a prompt management problem
- Chose a local-first MVP to keep the first version easy to run and easy to evaluate
- Decided the first release should focus on learning and usability rather than model integrations

## Phase 2: MVP Scope

- Reduced the first version to one main workflow:
  raw intent -> improved prompt -> explanation -> variations
- Avoided authentication, databases, and deployment complexity in the MVP
- Kept the logic heuristic-based so the product idea could be demonstrated immediately

## Phase 2.5: Product Reframe

- Reframed the project away from a developer-facing prompt utility
- Simplified the experience so ordinary users can start with one text box
- Moved advanced settings behind an optional section instead of making them mandatory
- Added multilingual support to make the concept more broadly usable

## Phase 3: Engineering Setup

- Created a standalone project folder
- Used a small built-in Node server instead of adding a framework dependency
- Added a small test file for the prompt engine so the project has at least one repeatable verification step

## Phase 4: UX and Interface

- Built a two-panel interface so the workflow is obvious
- Added guided prompt hints for common user goals
- Added copy support and prompt variations so the output is immediately usable
- Added a roadmap section in the interface so the bigger product direction is visible

## Phase 5: Smarter Defaults

- Changed tone and format controls to default to Auto instead of forcing extra decisions
- Added lightweight scene detection for study, communication, career, support, and technical requests
- Improved the prompt engine so common use cases get more suitable defaults without extra user effort

## Phase 6: Documentation

- Wrote a README aimed at GitHub visitors
- Documented the product idea, MVP, feature list, and future direction
- Added this timeline to make the project feel like a real engineering effort with a clear progression

## Suggested Next Steps

1. Add prompt history and export
2. Add a scoring layer that shows why a prompt is weak
3. Add model-specific prompt presets
4. Add an optional LLM-backed rewrite mode
5. Add deploy support for Vercel or Render
6. Add file upload for study material and domain-specific prompt tuning
7. Test a course-specific workflow where students upload slides and mock exams before generating prompts
