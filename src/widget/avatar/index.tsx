import { ReactNode, useEffect, useRef, useState } from "react";
import { Badge } from "@heroui/badge";
import { Avatar } from "@heroui/avatar";
import { motion } from "framer-motion";

const AvatarComponent = (): ReactNode => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [padding, setPadding] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (![ref.current?.offsetLeft, ref.current?.offsetTop].includes(undefined))
      setPadding({
        x: ref.current?.offsetLeft as number,
        y: ref.current?.offsetTop as number,
      });
  }, [ref.current]);

  const isMd = window.innerWidth > 768;

  return (
    <>
      <motion.div
        animate={{ opacity: 0, display: "none" }}
        className="fixed bg-white w-screen h-screen top-0 left-0"
        initial={{ opacity: 100 }}
        transition={{ delay: 3, duration: 1 }}
      />
      <div>
        <div ref={ref} />
        {padding.x !== 0 && (
          <motion.div
            animate={{ x: 0, y: 0 }}
            initial={{
              x: `calc(50vw ${isMd ? "- 128px" : ""} - ${padding.x}px)`,
              y: `calc(50vh - 64px - ${padding.y}px)`,
            }}
            transition={{ delay: 2, duration: 1 }}
          >
            <Badge
              className="top-10 right-10 bg-white"
              color="default"
              content={
                <motion.div
                  animate={{ scale: [1, 2, 1], rotate: [0, 20, -20, 0] }}
                  initial={{ scale: 2 }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 6 }}
                >
                  👋
                </motion.div>
              }
            >
              <Avatar className="size-64" radius="full" src="/avatar.jpg" />
            </Badge>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default AvatarComponent;
