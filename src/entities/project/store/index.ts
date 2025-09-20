import { create } from "zustand";

import { IProjectEntity, IProjectStore } from "../interface";
import { initialProject } from "../const";

const useProjectStore = create<IProjectStore>((_, getState) => ({
  data: initialProject,
  getOne: (id: string) =>
    getState().data.find((value) => value.id === id) as IProjectEntity,
}));

export { useProjectStore };
