import { IProjectsResponse } from "@/interfaces/IProjectsResponse";
import LuiredBg from "../../public/images/Luired.png";
import UserFlowBg from "../../public/images/UserFlow.png";
import TesloShop from "../../public/images/TesloShop.png";
import ClimaSense from "../../public/images/ClimaSense.png";

export const projectsData: IProjectsResponse[] = [
  {
    id: 1,
    title: "Luired Shop",
    description: "LUIRED_DESCRIPTION",
    image: LuiredBg,
    url: "https://luired.vercel.app/home",
    tecnologies: [
      { id: 1, name: "React" },
      { id: 2, name: "TypeScript" },
      { id: 3, name: "Firebase" },
      { id: 4, name: "Axios" },
      { id: 5, name: "React-Query" },
      { id: 6, name: "Material-UI" },
      { id: 7, name: "Zustand" },
    ],
  },
  {
    id: 2,
    title: "User Flow",
    description: "USER_FLOW_DESCRIPTION",
    image: UserFlowBg,
    url: "https://hgallo-user-flow.vercel.app/login",
    tecnologies: [
      { id: 1, name: "React" },
      { id: 2, name: "TypeScript" },
      { id: 4, name: "Axios" },
      { id: 5, name: "Tailwind" },
      { id: 5, name: "ShadcnUI" },
      { id: 6, name: "Firebase" },
      { id: 7, name: "React-Query" },
      { id: 8, name: "Zustand" },
    ],
  },
  {
    id: 3,
    title: "Teslo Shop",
    description: "TESLO_SHOP_DESCRIPTION",
    image: TesloShop,
    url: "https://hgallo-teslo-shop.vercel.app/",
    tecnologies: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "Axios" },
      { id: 3, name: "React-Query" },
      { id: 4, name: "Firebase" },
      { id: 5, name: "Zustand" },
    ],
  },
  {
    id: 4,
    title: "ClimaSense",
    description: "CLIMA_SENSE_DESCRIPTION",
    image: ClimaSense,
    url: "https://hgallo-clima-sense.vercel.app/",
    tecnologies: [
      { id: 1, name: "React" },
      { id: 2, name: "TypeScript" },
      { id: 3, name: "Axios" },
      { id: 4, name: "React-Query" },
      { id: 4, name: "Material-UI" },
    ],
  },
];
