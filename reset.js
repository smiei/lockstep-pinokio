// Delete the installed app (code, packages, build, downloaded sprites) so the
// next Install starts from scratch. The runs in data/ are kept on purpose.
module.exports = {
  run: [
    {
      method: "fs.rm",
      params: {
        path: "app",
      },
    },
  ],
}
