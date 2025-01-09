import { driver } from "driver.js";
import "driver.js/dist/driver.css";
import styles from "../style.module.css";
import { TFunction } from "i18next";
export const useStartTour = ({ t }: { t: TFunction }) => {
  const startTour = () => {
    const driverObj = driver({
      smoothScroll: true,
      animate: true,
      showButtons: ["next", "previous"],
      popoverClass: styles.popoverContainer,
      nextBtnText: t("NEXT_BUTTON_TEXT"),
      prevBtnText: t("PREVIOUS_BUTTON_TEXT"),
      doneBtnText: t("DONE_BUTTON_TEXT"),
      steps: [
        {
          element: "#start",
          popover: {
            title: t("WELCOME_TEXT"),
            description: t("WELCOME_DESCRIPTION"),
            side: "top",
            align: "center",
          },
        },
        {
          element: "#homeTour",
          popover: {
            title: t("HOME_TEXT"),
            description: t("HOME_DESCRIPTION"),
            side: "bottom",
            align: "start",
          },
        },
        {
          element: "#projectsTour",
          popover: {
            title: t("PROJECTS_TEXT"),
            description: t("PROJECTS_DESCRIPTION"),
            side: "bottom",
            align: "start",
          },
        },
        {
          element: "#aboutTour",
          popover: {
            title: t("ABOUT_TEXT"),
            description: t("ABOUT_DESCRIPTION"),
            side: "bottom",
            align: "start",
          },
        },

        {
          element: "#contact",
          popover: {
            title: t("CONTACT_TEXT"),
            description: t("CONTACT_DESCRIPTION"),
            side: "bottom",
            align: "start",
          },
        },
        {
          element: "#language-button",
          popover: {
            title: t("LANGUAGE_BUTTON_TITLE"),
            description: t("LANGUAGE_DESCRIPTION"),
            side: "bottom",
            align: "start",
          },
        },
      ],
    });

    driverObj.drive();
  };
  return { startTour };
};
