import { ReactNode } from "react";

import { IProjectEntity } from "@/entities/project/interface";
import ProjectItem from "@/features/project-item/component";

interface IProjectListProps {
  data: Array<IProjectEntity>;
}

const ProjectList = ({ data }: IProjectListProps): ReactNode => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-16">
      {data.map((value, index) => (
        <ProjectItem {...value} key={index} />
      ))}
    </div>
  );
};

export default ProjectList;
