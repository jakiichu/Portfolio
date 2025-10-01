import { ReactNode } from "react";

import ProjectItem from "../ui/item/component";

import { IProjectEntity } from "@/entities/project/interface";

interface IProjectListProps {
  data: Array<IProjectEntity>;
}

const ProjectList = ({ data }: IProjectListProps): ReactNode => {
  return (
    <div className="mt-4 grid md:grid-cols-2 grid-cols-1 gap-16">
      {data.map((value, index) => (
        <ProjectItem {...value} key={index} />
      ))}
    </div>
  );
};

export default ProjectList;
