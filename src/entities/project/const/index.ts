import { IProjectEntity } from "@/entities/project/interface";
import { coreLib } from "@/entities/dependencies-chip/coreLib.ts";
import { stateManager } from "@/entities/dependencies-chip/stateManager.ts";
import { styleEngine } from "@/entities/dependencies-chip/styleEngine.ts";
import { tools } from "@/entities/dependencies-chip/tools.ts";
import { cli } from "@/entities/dependencies-chip/cli.ts";
import { language } from "@/entities/dependencies-chip/language.ts";
import { architecture } from "@/entities/dependencies-chip/architecture.ts";
import { routerChip } from "@/entities/dependencies-chip/router";
import { payments } from "@/entities/dependencies-chip/payments.ts";

const initialProject = [
  {
    hasPreview: true,
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
  {
    hasPreview: false,
    name: "journey fairy tale",
    image: "/fairy-tale.png",
    id: "a50aece4-c2c0-4eae-bae0-fb19badc3985",
    projectUrl: "https://t.me/journeyfairy_bot",
    description:
      "This project is an innovative digital platform that harnesses the power of artificial intelligence to create unique, personalized fairytales for each user. By analyzing user preferences and input, the AI crafts captivating stories tailored to individual tastes, interests, and chosen characters. The result is an immersive storytelling experience, where every fairytale is distinct and emotionally engaging, encouraging creativity, literacy, and imagination in readers of all ages.",
    chip: [
      language.typescript,
      architecture.FSD,
      cli.vite,
      coreLib.react,
      stateManager.tanstackReactStore,
      stateManager.tanstackQuery,
      styleEngine.tailwindcss,
      styleEngine.classVarianceAuthority,
      styleEngine.framerMotion,
      tools.eslint,
      tools.lodash,
      tools.amplitude,
      payments.paddle,
      payments.yookassa,
      tools.telegramAppsSdkReact,
    ],
  },

  {
    hasPreview: true,
    name: "todo vue",
    image: "/todo.png",
    id: "236899d-1235-4aad-ad11-14133212341a",
    sourceUrl: "https://github.com/jakiichu/todo-vue",
    projectUrl: "https://todo-vue-nine-topaz.vercel.app/",
    description:
      "This is my first attempt at building something with Vue.js.\n" +
      "\n" +
      "It’s a simple TODO application — nothing fancy, just the basics: adding tasks, marking them as done, and deleting them.\n" +
      "\n" +
      "The project is more of a learning experiment (a kind of 'trial run') to get familiar with Vue’s components, reactivity, and overall workflow. Over time, I may expand it with more features, but for now it’s just a small step into the Vue ecosystem.",
    chip: [
      language.typescript,
      architecture.layeredArchitecture,
      cli.vite,
      coreLib.vue,
      styleEngine.tailwindcss,
      stateManager.tanstackQuery,
      tools.eslint,
      routerChip.vueRouter,
    ],
  },
] as Array<IProjectEntity>;

export { initialProject };
