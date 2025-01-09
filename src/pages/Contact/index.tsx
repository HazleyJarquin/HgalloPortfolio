import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { ContactCard } from "@/components/ContactCard";
import { socialMediaData } from "@/data/socialMediaData";
import { iconByTecnologyName } from "@/constants/iconByTecnologyName";

export const ContactPage = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="w-full h-auto flex flex-col gap-2 items-center">
      <div className="w-full flex flex-col justify-start pb-2 border-b-2 border-secondaryColors-200">
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
          {t("CONTACT_TITLE_TEXT")}
        </motion.h1>
      </div>

      <motion.div
        ref={ref}
        initial={{ y: -50, opacity: 0 }}
        animate={{
          y: inView ? 0 : 50,
          opacity: inView ? 1 : 0,
        }}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
        }}
        className="w-full sm:h-full md:h-full lg:h-full xl:h-full flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row gap-2 items-center justify-center"
      >
        <ContactCard />
      </motion.div>
      <div className="w-full flex items-center justify-center gap-3 mt-2">
        {socialMediaData.map((s, index) => {
          return (
            <motion.div
              className="pb-15 md:pb-0 lg:pb-0 xl:pb-0 2xl:pb-0 cursor-pointer"
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
              onClick={() => window.open(s.url, "_blank")}
            >
              {iconByTecnologyName[s.name]}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
