import { ReactNode, useRef } from "react";
import { animate, motion, useMotionValue } from "framer-motion";

import { IProjectEntity } from "@/entities/project/interface";
import { useCustomNavigate } from "@/shared/utils/hook/navigate";
import { RouterPath } from "@/shared/constant/enum/router.ts";

const ProjectItem = ({
  name,
  id,
  image,
  description,
}: IProjectEntity): ReactNode => {
  const ref = useRef<HTMLButtonElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const handleMouseMove = (event: React.MouseEvent): void => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();

    const positionToButtonX = event.clientX - rect.left;
    const positionToButtonY = event.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;

    rotateX.set(((midX - positionToButtonX) / midX) * 7);
    rotateY.set(((midY - positionToButtonY) / midY) * 7);
  };

  const handleMouseLeave = () => {
    animate(rotateX, 0, { duration: 0.4 });
    animate(rotateY, 0, { duration: 0.4 });
  };

  const { navigate } = useCustomNavigate();
  const handleNavigate = () => {
    navigate(RouterPath.ONE_PROJECT, { ":id": id });
  };

  return (
    <motion.button
      ref={ref}
      className="border border-black dark:border-white rounded-2xl hover:overflow-ellipsis overflow-hidden cursor-pointer hover:shadow-2xl transition-shadow"
      style={{
        rotateX,
        rotateY,
      }}
      whileHover={{ scale: 1.02 }}
      onClick={handleNavigate}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <img alt={name} className="h-auto w-full" src={image} />
      <div className="p-2 flex flex-col gap-4">
        <p>{name}</p>
        <p className="truncate max-h-20 h-full">{description}</p>
      </div>
    </motion.button>
  );
};

export default ProjectItem;
