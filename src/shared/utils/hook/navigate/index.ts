import { useNavigate } from "react-router-dom";

import { replaceArgs } from "@/shared/utils/functions/replace-args";

const useCustomNavigate = () => {
  const navigateHook = useNavigate();
  const navigate = (
    to: string,
    option: Record<string, string> | undefined = {},
  ) => navigateHook(replaceArgs(to, option));

  return { navigate };
};

export { useCustomNavigate };
