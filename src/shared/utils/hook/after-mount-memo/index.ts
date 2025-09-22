import { useEffect, useState } from "react";

const useAfterMountMemo = <T>(callback: () => T, deps: unknown[]) => {
  const [value, setValue] = useState<T>();

  useEffect(() => {
    setValue(callback());
  }, deps);

  return value;
};

export { useAfterMountMemo };
