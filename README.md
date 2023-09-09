<p align="center"><a href="https://aoe-elo.com/" target="_blank"><img src="https://media.githubusercontent.com/media/aoe-elo/aoe-elo-frontend/main/assets/logo-light-300.png" width="150" alt="Aoe-Elo Logo"></a></p>

# AoE Tournament Elo (Frontend)

🌐 Hosted here: <https://aoe-elo.com> (still the old backend)\
🗨 Discord: <https://discord.gg/hZzheB2kVE>

## Outlook (Drafting stage)

<p align="center"><a href="https://media.githubusercontent.com/media/aoe-elo/aoe-elo-frontend/main/docs/design/high_fidelity/Home.png" target="_blank"><img src="https://media.githubusercontent.com/media/aoe-elo/aoe-elo-frontend/main/docs/design/high_fidelity/Home.png" width="150" alt="Aoe-Elo New Home"></a> <a href="https://media.githubusercontent.com/media/aoe-elo/aoe-elo-frontend/main/docs/design/high_fidelity/Main1.png" target="_blank"><img src="https://media.githubusercontent.com/media/aoe-elo/aoe-elo-frontend/main/docs/design/high_fidelity/Main1.png" width="150" alt="Aoe-Elo New Tournaments Overview"></a> <a href="https://media.githubusercontent.com/media/aoe-elo/aoe-elo-frontend/main/docs/design/high_fidelity/tournaments-all1.png" target="_blank"><img src="https://media.githubusercontent.com/media/aoe-elo/aoe-elo-frontend/main/docs/design/high_fidelity/tournaments-all1.png" width="150" alt="Aoe-Elo New Tournaments Overview"></a>
</p>
<p align="center">
<a href="https://media.githubusercontent.com/media/aoe-elo/aoe-elo-frontend/main/docs/design/high_fidelity/Main1_Light.png" target="_blank"><img src="https://media.githubusercontent.com/media/aoe-elo/aoe-elo-frontend/main/docs/design/high_fidelity/Main1_Light.png" width="150" alt="Aoe-Elo New Home"></a> <a href="https://media.githubusercontent.com/media/aoe-elo/aoe-elo-frontend/main/docs/design/high_fidelity/home-first_pass.png" target="_blank"><img src="https://media.githubusercontent.com/media/aoe-elo/aoe-elo-frontend/main/docs/design/high_fidelity/home-first_pass.png" width="150" alt="Aoe-Elo New Tournaments Overview"></a> <a href="https://media.githubusercontent.com/media/aoe-elo/aoe-elo-frontend/main/docs/design/high_fidelity/tournaments-all.png" target="_blank"><img src="https://media.githubusercontent.com/media/aoe-elo/aoe-elo-frontend/main/docs/design/high_fidelity/tournaments-all.png" width="150" alt="Aoe-Elo New Home"></a>
</p>

## Tech Stack

### Frontend (here)

- Svelte(Kit)
- Tailwind CSS

### [Backend](https://github.com/aoe-elo/aoe-elo-backend)

- PHP 8.2
- SQLite database
- Hosted on root server with Docker(?)

## Development

You need both `node.js` (for frontend development) and `php` + `composer` (for
backend development). The installation instructions for the backend you will
find in the [backend repository](https://github.com/aoe-elo/aoe-elo-backend).

### Installing language tooling

#### Windows

Utilizing [`scoop`](https://scoop.sh/) is probably the easiest here:

- Install [`scoop`](https://scoop.sh/)

- open PowerShell ( `Win + R` -> type in `powershell` )

- run `scoop install hurl,fnm,just`

- add `fnm` to your `powershell` profile:
  <https://github.com/Schniz/fnm#powershell>

- navigate to the repository root

- run `fnm install` to install the node.js version from `.node-version`

### Installing dependencies

Run `npm install`.

### Developing

Once you've created a project and installed dependencies with `npm install` (or
`pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

You can preview the production build with `npm run preview`.

### Dev-Documentation

We use `just` as our task runner. Run `just -l` to see all available commands.

- **just fmt**: Format the whole project
- **just blint**: Lint the backend part of the project
- **just flint**: Lint the `frontend` part of the project
- **just ftest**: Test the `frontend` part of the project
- **just pr**: Run all commands needed for creating a PR for the `frontend` part
  of the project.

Before committing, make sure to run `just fmt` and depending on what you have
changed:

- **Backend**: `just btest`

- **Frontend**: `just flint` **and** `just ftest` or

You can also check the [`Development docs`](/docs/dev/) and
[Dev-FAQ](/docs/dev/FAQ.md) to make it easier to get started.

## Building

To create a production version of your app:

```bash
npm run build
```

## License

The aoe-elo frontend is open-sourced software licensed under the
[GNU Affero General Public License v3.0 or later](./LICENSE).
