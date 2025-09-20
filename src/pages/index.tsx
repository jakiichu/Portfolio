import { Button } from "@heroui/button";

import AvatarComponent from "@/widget/avatar";
import SocialLinkList from "@/widget/social-link-list/component";
import Header from "@/shared/ui/header";
import SkillsList from "@/widget/skills-list/component";
import TextInformation from "@/widget/text-information";
import ProjectList from "@/widget/projects-list/component";
import { useProjectStore } from "@/entities/project/store";

const IndexPage = () => {
  const { data } = useProjectStore();

  return (
    <main className="mx-auto px-4 py-8 md:py-16">
      <div className="max-w-4xl mx-auto grid grid-cols-1 gap-12 md:gap-16">
        <header className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
          <AvatarComponent />
          <TextInformation />
        </header>
        <section>
          <SocialLinkList />
        </section>
        <section>
          <Header>Skills</Header>
          <SkillsList />
        </section>
        <section>
          <Header>Projects</Header>
          <ProjectList data={data} />
        </section>
        <div className="text-center">
          <Button>Contact Me</Button>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;
