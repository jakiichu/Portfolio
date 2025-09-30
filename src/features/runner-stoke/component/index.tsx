import { ReactNode, useRef } from "react";
import { Chip } from "@heroui/chip";
import { motion } from "framer-motion";

import { useAfterMountMemo } from "@/shared/utils/hook/after-mount-memo";

interface IRunnerStokeProps {
  chip: string[];
}

const RunnerStoke = ({ chip }: IRunnerStokeProps): ReactNode => {
  const ref = useRef<HTMLDivElement | null>(null);

  const width = useAfterMountMemo(() => {
    if (!ref.current) return;

    return ref.current?.offsetWidth;
  }, []);

  return (
    <div className="w-full overflow-hidden">
      {!ref.current && (
        <div ref={ref} className="fixed flex gap-4 opacity-0">
          {chip.map((value, i) => (
            <Chip key={i} className="first:ml-4">
              {value}
            </Chip>
          ))}
        </div>
      )}

      {width && (
        <motion.div
          animate={{ x: -width }}
          className="flex gap-4 whitespace-nowrap"
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "linear",
          }}
        >
          {chip.concat(chip).map((value, i) => (
            <Chip
              key={i}
              className="bg-primary text-white first:ml-4 uppercase"
            >
              {value}
            </Chip>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default RunnerStoke;
