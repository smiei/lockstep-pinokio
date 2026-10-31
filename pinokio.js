module.exports = {
  version: "7.0",
  title: "Lockstep",
  description:
    "SoulLink & Nuzlocke tracker. Track Pokémon Nuzlocke runs solo or as a SoulLink for 2-4 players: encounters, team, deaths, level caps, catch rates. https://github.com/smiei/lockstep",
  icon: "icon.png",
  menu: async (kernel, info) => {
    // app/.next only exists once setup finished its build.
    const installed = info.exists("app/.next")
    const running = {
      install: info.running("install.js"),
      start: info.running("start.js"),
      update: info.running("update.js"),
      reset: info.running("reset.js"),
    }

    if (running.install) {
      return [{ default: true, icon: "fa-solid fa-plug", text: "Installing", href: "install.js" }]
    }
    if (running.update) {
      return [{ default: true, icon: "fa-solid fa-terminal", text: "Updating", href: "update.js" }]
    }
    if (running.reset) {
      return [{ default: true, icon: "fa-solid fa-terminal", text: "Resetting", href: "reset.js" }]
    }
    if (!installed) {
      return [{ default: true, icon: "fa-solid fa-plug", text: "Install", href: "install.js" }]
    }
    if (running.start) {
      const local = info.local("start.js")
      if (local && local.url) {
        return [
          { default: true, icon: "fa-solid fa-rocket", text: "Open Lockstep", href: local.url, popout: true },
          { icon: "fa-solid fa-terminal", text: "Terminal", href: "start.js" },
        ]
      }
      return [{ default: true, icon: "fa-solid fa-terminal", text: "Starting", href: "start.js" }]
    }
    return [
      { default: true, icon: "fa-solid fa-power-off", text: "Start", href: "start.js" },
      { icon: "fa-solid fa-rotate", text: "Update", href: "update.js" },
      {
        icon: "fa-regular fa-circle-xmark",
        text: "Reset",
        href: "reset.js",
        confirm: "Delete the installed app? Your runs (data/nuzlocke.db) are kept.",
      },
    ]
  },
}
