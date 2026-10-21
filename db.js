// Where the tracker's database lives: data/nuzlocke.db next to these scripts,
// deliberately OUTSIDE app/. "Reset" deletes app/ and "Install" clones it
// fresh, so a database inside it would take every run with it.
const fs = require("fs")
const path = require("path")

const dir = path.resolve(__dirname, "data")
fs.mkdirSync(dir, { recursive: true })

// Prisma wants forward slashes, also on Windows.
module.exports = {
  DATABASE_URL: "file:" + path.join(dir, "nuzlocke.db").replace(/\\/g, "/"),
}
