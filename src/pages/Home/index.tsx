import { CustomButton } from "@/components/CustomButton";
import { DownloadIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export const HomePage = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const { t } = useTranslation();
  const downloadCv = () => {
    const link = document.createElement("a");
    link.href = "/pdf/CV.docx";
    link.download = "CV.docx";
    link.click();
  };
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
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
        className="text-white text-3xl font-bold text-center"
      >
        {t("HOME_PAGE_TITLE")}{" "}
        <span className="text-brand-100 font-bold text-3xl">
          {t("DEVELOPER_TEXT")}
        </span>
      </motion.h1>
      <motion.span
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="text-center text-white font-bold"
      >
        {t("HOME_PAGE_DESCRIPTION")}
      </motion.span>

      <motion.div
        ref={ref}
        initial={{ y: 10, opacity: 0 }}
        animate={{
          y: inView ? 0 : 10,
          opacity: inView ? 1 : 0,
        }}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
        }}
      >
        <CustomButton
          className="mt-5"
          mode="primary"
          text={t("DOWNLOAD_CV")}
          onClick={downloadCv}
          rightIcon={<DownloadIcon />}
        />
      </motion.div>
    </div>
  );
};
