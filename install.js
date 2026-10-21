const { DATABASE_URL } = require("./db.js")

// Clone the tracker into app/, install its packages, then let its own setup
// script do the rest: database migrations, the one-time sprite and badge
// download, and the production build.
module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        message: "git clone https://github.com/smiei/nuzlocke_tracker app",
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
