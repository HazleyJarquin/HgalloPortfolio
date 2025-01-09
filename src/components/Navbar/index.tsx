/* eslint-disable react-hooks/exhaustive-deps */

import { CustomButton } from "../CustomButton";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/context/I18nProvider";
import { useEffect, useState } from "react";
import { useTourStore } from "@/store/useTourStore";
import { useStartTour } from "./hooks/useStartTour";
import { MenuIcon, XIcon } from "lucide-react";
import { NavLinks } from "./components/NavLinks";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const { t } = useTranslation();
  const { changeLanguage, language } = useLanguage();
  const { tour, setTour } = useTourStore();
  const { startTour } = useStartTour({ t });
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const languageText =
    language === "en" ? t("SPANISH_TEXT") : t("ENGLISH_TEXT");

  const handleLanguageChange = () => {
    changeLanguage(language === "en" ? "es" : "en");
  };

  useEffect(() => {
    if (!tour) {
      setTour(true);
      startTour();
    }
  }, [tour]);

  return (
    <div className="bg-transparent w-full p-2 flex justify-between items-center">
      <div id="start" className="flex-none hidden" />
      <div className="flex items-center justify-between w-full md:hidden">
        <button
          className="text-white text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <XIcon /> : <MenuIcon />}
        </button>
        {!isMenuOpen && (
          <div className="ml-auto">
            <CustomButton
              id="contact"
              mode="secondary"
              text={t("CONTACT_TEXT")}
              onClick={() => {
                navigate("/contact");
              }}
            />
            <CustomButton
              mode="tertiary"
              text={languageText}
              onClick={handleLanguageChange}
              id="language-button"
            />
          </div>
        )}
      </div>

      <NavLinks isMenuOpen={isMenuOpen} t={t} />

      <div className="hidden md:block ml-auto">
        <CustomButton
          mode="tertiary"
          text={languageText}
          onClick={handleLanguageChange}
          id="language-button"
        />
      </div>
    </div>
  );
};
