import { ELocalStorage } from "../enum";

interface ILocalStorageTypes {
  [ELocalStorage.theme]: "light" | "dark";
}

export type { ILocalStorageTypes };
