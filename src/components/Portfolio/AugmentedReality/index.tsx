import PortfolioLayout from "../PortfolioLayout";
import ProjectCard from "@/components/ProjectCard";

const AugmentedReality = () => {
  return (
    <PortfolioLayout>
      <section className="py-10">
        <div>
          <h3 className="text-3xl py-1 dark:text-white ">Portfolio</h3>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            Welcome to my enchanted digital playground, where creativity meets
            code, and imagination knows no bounds. Explore my world of AR
            filters, web applications, mobile apps, and 3D character wonders.
            Get ready to embark on a whimsical journey through the pixels and
            polygons of my work!
          </p>
        </div>
        <div className="lg:flex gap-20 justify-center">
          <ProjectCard
            linkTo="/portfolio/augmented-reality"
            imageSrc={"/web1.png"}
            title="Augmented Reality (AR) Project"
            description="Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order."
            buttonLabel="Explore more"
          />
          <ProjectCard
            linkTo="/portfolio/software-development"
            imageSrc={"/web2.png"}
            title="Augmented Reality (AR) Project"
            description="Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order."
            buttonLabel="Explore more"
          />
          <ProjectCard
            linkTo="/portfolio/3d-design"
            imageSrc={"/web6.png"}
            title="3D Character Design Project"
            description="Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order."
            buttonLabel="Explore more"
          />
        </div>
      </section>
    </PortfolioLayout>
  );
};

export default AugmentedReality;
