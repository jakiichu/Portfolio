import { ReactNode } from "react";

import { socialLinkList } from "@/widget/social-link-list/const";
import SocialLink from "@/features/social-link/component";

const SocialLinkList = (): ReactNode => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {socialLinkList.map((value, index) => (
        <SocialLink key={index} {...value} />
      ))}
    </div>
  );
};

export default SocialLinkList;
