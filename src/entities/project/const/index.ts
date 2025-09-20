import { IProjectEntity } from "@/entities/project/interface";

const initialProject = [
  {
    name: "game of life",
    image: "/game-of-life.gif",
    id: crypto.randomUUID(),
    description:
      "The Game of Life is not your typical computer game. It is a cellular automaton, and was invented by Cambridge mathematician John Conway.\n" +
      "\n" +
      "This game became widely known when it was mentioned in an article published by Scientific American in 1970. It consists of a grid of cells which, based on a few mathematical rules, can live, die or multiply. Depending on the initial conditions, the cells form various patterns throughout the course of the game.",
  },
] as Array<IProjectEntity>;

export { initialProject };
