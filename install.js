const { DATABASE_URL } = require("./db.js")

// Clone Lockstep into app/, install its packages, then let its own setup
// script do the rest: database migrations, the one-time sprite and badge
// download, and the production build.
module.exports = {
  // Git and Node.js come from Pinokio's "Coding (Essential)" bundle. Declaring
  // it makes Pinokio offer to install it first, instead of the first command
  // failing with "conda not found" on a fresh Pinokio.
  requires: {
    bundle: "dev",
  },
  run: [
    {
      method: "shell.run",
      params: {
        message: "git clone https://github.com/smiei/lockstep app",
      },
    },
    {
      method: "shell.run",
      params: {
        path: "app",
        message: "npm install --no-audit --no-fund",
      },
    },
    {
      method: "shell.run",
      params: {
        path: "app",
        env: { DATABASE_URL },
        message: "npm run setup",
      },
    },
    {
      method: "notify",
      params: {
        html: "Installed. Click <b>Start</b> to open the tracker.",
      },
    },
  ],
}
