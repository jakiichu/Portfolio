import { ReactNode } from "react";
import { Button } from "@heroui/button";
import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";
import { cnBase } from "tailwind-variants";
import { motion } from "framer-motion";

import { projectValidation } from "../validation";
import { IProjectItemPageParams } from "../interface";

import { useProjectStore } from "@/entities/project/store";
import { useValidateParams } from "@/shared/utils/hook/validate-params";
import Header from "@/shared/ui/header";
import { useCustomNavigate } from "@/shared/utils/hook/navigate";
import { RouterPath } from "@/shared/constant/enum/router.ts";
import RunnerStoke from "@/features/runner-stoke/component";

const ProjectItemPage = (): ReactNode => {
  const { id } = useValidateParams<IProjectItemPageParams>(projectValidation);
  const { getOne } = useProjectStore();

  const { projectUrl, sourceUrl, name, image, description, chip, hasPreview } =
    getOne(id);

  const { navigate } = useCustomNavigate();
  const handleNavigateBack = (): void => {
    navigate(RouterPath.MAIN);
  };

  return (
    <div className="max-w-4xl mx-auto grid grid-cols-1 gap-12 md:gap-16">
      <Button className="w-fit" variant="light" onClick={handleNavigateBack}>
        <CaretLeftIcon /> Back
      </Button>
      <Header className="uppercase flex justify-between">
        {name}{" "}
        <motion.a
          className={cnBase(
            !sourceUrl && "text-red-500 line-through decoration-white",
          )}
          href={sourceUrl}
          rel="noreferrer"
          target="_blank"
          transition={{ duration: 0.1 }}
          variants={
            hasPreview
              ? {}
              : {
                  shake: {
                    x: [0, -8, 8, -8, 8, 0],
                    y: [0, 2, -1, -4, 8, 0],
                    transition: { duration: 0.4 },
                  },
                }
          }
          whileTap="shake"
        >
          {"< source />"}
        </motion.a>
      </Header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative">
        <img alt={name} className="w-full h-auto rounded-2xl" src={image} />
        <p>{description}</p>
      </div>
      <RunnerStoke chip={chip} />
      {hasPreview ? (
        <iframe className="w-full h-[850px]" src={projectUrl} title={name} />
      ) : (
        <a
          className="flex gap-0.5 p-4 bg-blue-500 w-fit rounded-2xl items-center"
          href={projectUrl}
          rel="noreferrer"
          target="_blank"
        >
          Open project <CaretRightIcon />
        </a>
      )}
    </div>
  );
};

export default ProjectItemPage;
