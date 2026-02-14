import { ReactNode } from "react";
import { useTranslation } from "react-i18next";

import AvatarComponentWithAnimation from "@/widget/avatar";
import SocialLinkList from "@/widget/social-link-list/component";
import Header from "@/shared/ui/header";
import SkillsList from "@/widget/skills-list/component";
import TextInformation from "@/widget/text-information";
import ProjectList from "@/widget/projects-list/component";
import { useProjectStore } from "@/entities/project/store";

const MainPage = (): ReactNode => {
  const { data } = useProjectStore();
  const { t } = useTranslation();

  return (
    <div className="max-w-4xl mx-auto grid grid-cols-1 gap-12 md:gap-16">
      <header className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
        <AvatarComponentWithAnimation />
        <TextInformation />
      </header>
      <section>
        <Header>{t("links.title")}</Header>
        <SocialLinkList />
      </section>
      <section>
        <Header>{t("skills.title")}</Header>
        <SkillsList />
      </section>
      <section>
        <Header>{t("projects.title")}</Header>
        <ProjectList data={data} />
      </section>
    </div>
  );
};

export default MainPage;
