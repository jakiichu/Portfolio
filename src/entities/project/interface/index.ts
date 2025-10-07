interface IProjectEntity {
  name: string;
  image: string;
  id: string;
  description: string;
  projectUrl: string;
  hasPreview: boolean;
  sourceUrl?: string;
  chip: Array<string>;
}

interface IProjectStore {
  data: Array<IProjectEntity>;
  getOne: (id: string) => IProjectEntity;
}

export type { IProjectEntity, IProjectStore };
