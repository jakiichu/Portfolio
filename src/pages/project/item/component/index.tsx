import { ReactNode } from "react";
import { Button } from "@heroui/button";
import { CaretLeftIcon } from "@phosphor-icons/react";

import { projectValidation } from "../validation";
import { IProjectItemPageParams } from "../interface";

import { useProjectStore } from "@/entities/project/store";
import { useValidateParams } from "@/shared/utils/hook/validate-params";
import Header from "@/shared/ui/header";
import { useCustomNavigate } from "@/shared/utils/hook/navigate";
import { ERouterPath } from "@/shared/constant/enum/router";
import RunnerStoke from "@/features/runner-stoke/component";

const ProjectItemPage = (): ReactNode => {
  const { id } = useValidateParams<IProjectItemPageParams>(projectValidation);
  const { getOne } = useProjectStore();

  const { projectUrl, sourceUrl, name, image, description, chip } = getOne(id);

  const { navigate } = useCustomNavigate();
  const handleNavigateBack = (): void => {
    navigate(ERouterPath.MAIN);
  };

  return (
    <div className="max-w-4xl mx-auto grid grid-cols-1 gap-12 md:gap-16">
      <Button className="w-fit" variant="light" onClick={handleNavigateBack}>
        <CaretLeftIcon /> Back
      </Button>
      <Header className="uppercase flex justify-between">
        {name}{" "}
        <a href={sourceUrl} rel="noreferrer" target="_blank">
          {"< source />"}
        </a>
      </Header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative">
        <img alt={name} className="w-full h-auto rounded-2xl" src={image} />
        <p>{description}</p>
      </div>
      <RunnerStoke chip={chip} />
      <iframe className="w-full h-[850px]" src={projectUrl} title={name} />
    </div>
  );
};

export default ProjectItemPage;
