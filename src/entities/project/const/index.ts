import { IProjectEntity } from "@/entities/project/interface";
import { coreLib } from "@/entities/dependencies-chip/coreLib.ts";
import { stateManager } from "@/entities/dependencies-chip/stateManager.ts";
import { styleEngine } from "@/entities/dependencies-chip/styleEngine.ts";
import { tools } from "@/entities/dependencies-chip/tools.ts";
import { cli } from "@/entities/dependencies-chip/cli.ts";
import { language } from "@/entities/dependencies-chip/language.ts";
import { architecture } from "@/entities/dependencies-chip/architecture.ts";

const initialProject = [
  {
    name: "game of life",
    image: "/game-of-life.gif",
    id: "84567c7a-0652-4ead-ad58-148341953a1b",
    sourceUrl: "https://github.com/jakiichu/game-of-life-react",
    projectUrl: "https://game-of-life-react-umber.vercel.app",
    description:
      "The Game of Life is not your typical computer game. It is a cellular automaton, and was invented by Cambridge mathematician John Conway.\n" +
      "\n" +
      "This game became widely known when it was mentioned in an article published by Scientific American in 1970. It consists of a grid of cells which, based on a few mathematical rules, can live, die or multiply. Depending on the initial conditions, the cells form various patterns throughout the course of the game.",
    chip: [
      language.typescript,
      architecture.layeredArchitecture,
      cli.vite,
      coreLib.react,
      stateManager.zustand,
      styleEngine.cssModules,
      tools.eslint,
      tools.esToolkit,
      tools.siberiacancodeReactuse,
    ],
  },
] as Array<IProjectEntity>;

export { initialProject };
