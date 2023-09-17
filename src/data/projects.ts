import { getTheme } from "../components"
import ownStore from "./media/own-store.png"
import vlcCam from "./media/vlc-cam.png"
import avatar from "./media/avatar.webp"
import monitor from "./media/monitor.png"

const { color } = getTheme()

export type Project = {
  title: string
  description: string
  image: string
  repoUrl: string
  demoUrl?: string
  docsUrl?: string
}

/*
 _______________
< /r/startpages >
 ---------------
  \
  \ ^__^
    (oo)\________
    (__)\        )\/\
        ||----W ||
        ||      ||
*/

type Year = { year: number; color: string; projects: Project[] }

export const projects: Year[] = [
  {
    year: 2023,
    color: color.orange,
    projects: [
       {
        title: "[WIP]monitor-display-switcher",
        description:
          "A gnome-shell-extension that gives a modern way to change display",
        image: monitor,
        repoUrl: "https://github.com/matheus-aguiar-dev/gnome-shell-display-switcher",
	    },
      {
        title: " vlc-cam",
        description:
          "Developed in C using libVLC, this camera app specializes in capturing video streams and snapshots.",
        image: vlcCam,
        repoUrl: "https://github.com/matheus-aguiar-dev/cam-app",
      },
      {
        title: "own-store",
        description:
          "A GTK application that provides a graphical interface that allows users to explore, install, and manage a variety of applications using Flatpak.", 
        image: ownStore,
        repoUrl: "https://github.com/matheus-aguiar-dev/own-store",
      },
    ],
  },
  {
    year: 2022,
    color: color.red,
    projects: [
      {
        title: "Portfolio v2",
        description:
          "The latest version of my portfolio. You are currently looking at it.",
        image: avatar,
        repoUrl: "https://github.com/matheus-aguiar-dev/matheus-aguiar-dev.github.io",
      },
    ],
  },
]
