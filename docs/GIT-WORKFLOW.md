# Git Workflow

## Branching

- `main` for stable work.
- `feat/*` for new presentation features.
- `fix/*` for bug fixes.
- `docs/*` for documentation updates.

## Commit convention

Use Conventional Commits:

`tipo(ámbito): descripción breve`

Examples:

- `chore: initialize project structure`
- `feat(presentation): add slide navigation controls`
- `feat(content): add company profile section`
- `test(navigation): cover slide counter behavior`

## Suggested flow

1. Create a branch from `main`.
2. Implement one logical change.
3. Run lint, tests and build.
4. Review `git status` and `git diff`.
5. Commit with a clear Conventional Commit message.
6. Push and open a pull request when collaboration is required.
