import { SkillsSlider } from "@/components/SkillsSlider";
import { skillData } from "@/data/skillsData";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export const AboutPage = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <div className="w-full sm:h-full md:h-full lg:h-full xl:h-full flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row gap-2 items-center justify-center">
      <div className="w-full h-auto flex flex-col gap-5 sm:w-[100%] md:w-[50%] lg:w-[50%] xl:w-[50%]">
        <motion.h1
          ref={ref}
          initial={{ y: -10, opacity: 0 }}
          animate={{
            y: inView ? 0 : 10,
            opacity: inView ? 1 : 0,
          }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}
          className="text-xl font-bold text-white"
        >
          {t("ABOUT_ME_TEXT_TITLE")}
        </motion.h1>
        <motion.span
          initial={{ y: 10, opacity: 0 }}
          animate={{
            y: inView ? 0 : -10,
            opacity: inView ? 1 : 0,
          }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}
          className="text-lg text-brand-100"
        >
          {t("ABOUT_ME_TEXT_DESCRIPTION")}
        </motion.span>
      </div>

      <motion.div
        ref={ref}
        className="w-full h-auto sm:w-[100%] md:w-[50%] lg:w-[50%] xl:w-[50%]"
      >
        <h1 className="text-xl font-bold text-white mb-2">
          {t("SKILLS_TEXT")}
        </h1>
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {skillData.map((s, index) => {
            return (
              <motion.div
                className="pb-15 md:pb-0 lg:pb-0 xl:pb-0 2xl:pb-0"
                key={s.id}
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
                <SkillsSlider
                  skillLevel={s.skillLevel}
                  skillName={s.skillName}
                />
              </motion.div>
            );
          })}
        </div>
        <span className="text-lg text-brand-100">{t("AND_MORE_TEXT")}</span>
      </motion.div>
    </div>
  );
};
