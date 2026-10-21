const { DATABASE_URL } = require("./db.js")

// Start the built tracker on a free port and hand its address to the menu's
// "Open Web UI" entry (pinokio.js reads it back via info.local("start.js")).
module.exports = async (kernel) => {
  const port = await kernel.port()
  return {
    daemon: true,
    run: [
      {
        method: "shell.run",
        params: {
          path: "app",
          env: { DATABASE_URL },
          message: `npm start -- -p ${port}`,
          on: [
            {
              // Next prints "Local: http://localhost:<port>" once it listens.
              event: "/http:\\/\\/\\S+/",
              done: true,
            },
          ],
        },
      },
      {
        method: "local.set",
        params: {
          url: `http://localhost:${port}`,
        },
      },
    ],
  }
}
