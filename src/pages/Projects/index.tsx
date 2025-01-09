import { ProjectsCard } from "@/components/ProjectsCard";
import { projectsData } from "@/data/projectsData";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export const ProjectsPage = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="w-full h-auto flex flex-col gap-2 items-center p-10">
      <div className="w-full flex flex-col justify-start pb-20 border-b-2 border-secondaryColors-200">
        <motion.h1
          initial={{ y: -10, opacity: 0 }}
          animate={{
            y: inView ? 0 : 10,
            opacity: inView ? 1 : 0,
          }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}
          className="text-3xl font-bold text-white"
        >
          {t("MY_PROJECTS_TEXT")}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{
            opacity: inView ? 1 : 0,
          }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}
          className="text-sm text-secondaryColors-200 mt-2"
        >
          {t("MY_PROJECTS_DESCRIPTION")}
        </motion.p>
      </div>

      <motion.div
        ref={ref}
        className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        {projectsData.map((project, index) => {
          return (
            <motion.div
              className="pb-15 md:pb-0 lg:pb-0 xl:pb-0 2xl:pb-0"
              key={project.id}
              initial={{ y: 50, opacity: 0 }}
              animate={{
                y: inView ? 0 : 50,
                opacity: inView ? 1 : 0,
              }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
                delay: index * 0.2,
              }}
            >
              <ProjectsCard projectData={project} t={t} />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};
