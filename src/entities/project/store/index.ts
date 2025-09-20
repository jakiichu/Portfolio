import { create } from "zustand";

import { IProjectStore } from "../interface";
import { initialProject } from "../const";

const useProjectStore = create<IProjectStore>((_, getState) => ({
  data: initialProject,
  getOne: (id: string) => getState().data.find((value) => value.id === id),
}));

export { useProjectStore };
