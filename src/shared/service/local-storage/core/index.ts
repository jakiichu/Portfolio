import { ILocalStorageTypes } from "../types";

class LocalStorage {
  get<T extends keyof ILocalStorageTypes>(key: T): ILocalStorageTypes[T] {
    return localStorage.getItem(key) as ILocalStorageTypes[T];
  }

  set<T extends keyof ILocalStorageTypes>(
    key: T,
    value: ILocalStorageTypes[T],
  ) {
    localStorage.setItem(key, value);
  }
}

export { LocalStorage };
