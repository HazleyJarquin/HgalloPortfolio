import { Variants } from "@/types/Variants";
import { Button } from "../ui/button";
import clsx from "clsx";
import { variantsStyle } from "@/constants/variantsStyle";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  text: string;
  mode: Variants;
  textColor?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const CustomButton = ({
  text,
  mode,
  textColor,
  leftIcon,
  rightIcon,
  className,
  ...rest
}: Props) => {
  return (
    <Button
      className={clsx(variantsStyle[mode], textColor, "shadow-none", className)}
      {...rest}
    >
      {leftIcon && leftIcon}
      {text}
      {rightIcon && rightIcon}
    </Button>
  );
};
