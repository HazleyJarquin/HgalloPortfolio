import { Variants } from "@/types/Variants";

export const variantsStyle: Record<Variants, string> = {
  primary: "bg-brand-100 rounded-full p-5 text-white hover:bg-brand-200 ",
  secondary:
    "bg-secondaryColors-400 rounded-full p-5 text-white border-2 border-secondaryColors-200 hover:bg-transparent hover:border-secondaryColors-300",
  tertiary:
    "bg-transparent p-5 text-grayScale-400 hover:bg-transparent hover:text-white",
};
