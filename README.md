# SoulLink Nuzlocke Tracker — Pinokio launcher

One-click install for the [SoulLink Nuzlocke Tracker](https://github.com/smiei/nuzlocke_tracker) with [Pinokio](https://pinokio.co/). The tracker is a web app for Pokémon Nuzlocke runs, solo or as a SoulLink for 2-4 players. Pinokio takes care of Node.js and Git, so nothing else needs to be installed.

## Install

1. Install [Pinokio](https://pinokio.co/). On its first start, choose a short home folder without spaces, such as `C:\pinokio`.
2. On Pinokio's **Explore** page, paste this into the **GitHub or Hugging Face URL** field and click **Go**:

   ```
   https://github.com/smiei/nuzlocke-tracker-pinokio
   ```

   Older Pinokio versions call this **Download from URL** on the **Discover** page.
3. Click **Install**.
   - If Pinokio asks to install **Coding (Essential)** (Git and Node.js), confirm it.
   - The first install downloads the app, its packages and the Pokémon sprites, then builds it. This takes a few minutes, mostly the sprites.
4. Click **Start**, then **Open Tracker**.

Do not use **Ask → Download → Import task**: that imports a Pinokio *task*, which is something different from an app.

Other devices on your network (your phone, a friend's laptop) can open the tracker at this computer's IP address and the port shown in the terminal.

## Menu

| Entry | What it does |
| --- | --- |
| **Start** | Starts the tracker on a free port. |
| **Update** | Pulls the newest version of the tracker, applies database updates and rebuilds. |
| **Reset** | Deletes the installed app so the next **Install** starts from scratch. Your runs are kept. |

## Your data

Your runs are stored in **`data/nuzlocke.db`** inside this launcher's folder, deliberately outside the app folder, so **Update** and **Reset** never touch them.

For a backup, either:
- copy that file while the tracker is stopped, or
- use the tracker's own export (gear menu → "Back up all runs").

## Requirements

Pinokio's own Node.js has to be version 20.9 or newer; the setup step stops with a clear message if it is older.

Everything else — the tracker's features, Docker and manual installs, licenses and acknowledgements — is described in the [tracker's README](https://github.com/smiei/nuzlocke_tracker#readme).

## License

[MIT](LICENSE). Pokémon is © Nintendo, Creatures Inc., GAME FREAK inc. and The Pokémon Company. This is an unofficial, non-commercial fan project.
