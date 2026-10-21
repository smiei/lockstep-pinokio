const { DATABASE_URL } = require("./db.js")

// Pull the newest launcher and tracker, then re-run the tracker's setup: it
// applies new database migrations, fetches sprites a new game needs and
// rebuilds. Runs in data/ are untouched.
module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        message: "git pull",
      },
    },
    {
      method: "shell.run",
      params: {
        path: "app",
        message: ["git pull", "npm install --no-audit --no-fund"],
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
  ],
}
