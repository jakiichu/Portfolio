interface IProjectEntity {
  name: string;
  image: string;
  id: string;
  description: string;
}

interface IProjectStore {
  data: Array<IProjectEntity>;
  getOne: (id: string) => IProjectEntity | undefined;
}

export type { IProjectEntity, IProjectStore };
