import { ReactNode, useEffect, useRef, useState } from "react";
import { Chip } from "@heroui/chip";
import { motion } from "framer-motion";

interface IRunerStokeProps {
  chip: string[];
}

const RunerStoke = ({ chip }: IRunerStokeProps): ReactNode => {
  const ref = useRef<HTMLDivElement | null>(null);

  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    if (ref.current) setWidth(ref.current?.offsetWidth);
  }, [ref.current]);

  //todo поправить
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
            <Chip key={i} className="bg-primary text-white first:ml-4">
              {value}
            </Chip>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default RunerStoke;
