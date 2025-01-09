import { CustomButton } from "@/components/CustomButton";
import { navBarLinks } from "@/constants/navbarLinks";
import { TFunction } from "i18next";
import { useLocation, useNavigate } from "react-router-dom";

interface Props {
  isMenuOpen: boolean;
  t: TFunction;
}

export const NavLinks = ({ isMenuOpen, t }: Props) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <div
      className={`${
        isMenuOpen ? "flex w-full" : "hidden"
      } flex-row md:flex md:flex-row justify-center flex-grow space-x-4`}
    >
      {isMenuOpen ? (
        <>
          {navBarLinks.map((l) => (
            <CustomButton
              id={l.idTour}
              text={t(l.title)}
              mode="tertiary"
              onClick={() => {
                navigate(l.path);
              }}
              textColor={pathname === l.path ? "text-white" : ""}
            />
          ))}
        </>
      ) : (
        <div>
          {navBarLinks.map((l) => {
            return (
              <CustomButton
                id={l.idTour}
                key={l.id}
                text={t(l.title)}
                mode="tertiary"
                onClick={() => {
                  navigate(l.path);
                }}
                textColor={pathname === l.path ? "text-white" : ""}
              />
            );
          })}
          <CustomButton
            id="contact"
            mode="secondary"
            text={t("CONTACT_TEXT")}
          />
        </div>
      )}
    </div>
  );
};
