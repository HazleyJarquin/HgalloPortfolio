import { IProjectsResponse } from "@/interfaces/IProjectsResponse";
import LuiredBg from "../../public/images/Luired.png";
import UserFlowBg from "../../public/images/UserFlow.png";
import TesloShop from "../../public/images/TesloShop.png";
import ClimaSense from "../../public/images/ClimaSense.png";
import BarberShop from "../../public/images/BarberShop.png";
import TaskApp from "../../public/images/TaskApp.png";
import AuraKit from "../../public/images/AuraKit.png";
import HjarquinCross from "../../public/images/HjarquinCross.png";

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
      { id: 8, name: "Vite" },
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
      { id: 9, name: "Vite" },
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
      { id: 6, name: "Vite" },
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
      { id: 5, name: "Material-UI" },
      { id: 6, name: "Vite" },
    ],
  },
  {
    id: 5,
    title: "Barber Shop Landing",
    description: "BARBER_SHOP_DESCRIPTION",
    image: BarberShop,
    url: "https://barber-shop-landing-os.vercel.app/",
    tecnologies: [
      { id: 1, name: "React" },
      { id: 2, name: "TypeScript" },
      { id: 3, name: "ShadcnUI" },
      { id: 4, name: "Vite" },
    ],
  },
  {
    id: 6,
    title: "Task App",
    description: "TASK_APP_DESCRIPTION",
    image: TaskApp,
    url: "https://hgallo-task-app-web.vercel.app/home",
    tecnologies: [
      { id: 1, name: "React" },
      { id: 2, name: "TypeScript" },
      { id: 3, name: "AuraKit" },
      { id: 4, name: "Axios" },
      { id: 5, name: "React-Query" },
      { id: 6, name: "Zustand" },
      { id: 7, name: "Hjarquin-cross" },
      { id: 8, name: "Vite" },
    ],
  },
  {
    id: 7,
    title: "Aura-kit UI",
    description: "AURA_KIT_DESCRIPTION",
    image: AuraKit,
    url: "https://hgallo-aura-kit-ui.vercel.app/?path=/docs/components-avatar--documentation",
    tecnologies: [
      { id: 1, name: "React" },
      { id: 2, name: "TypeScript" },
      { id: 3, name: "Storybook" },
      { id: 4, name: "Material-UI" },
      { id: 5, name: "Vite" },
    ],
  },
  {
    id: 8,
    title: "Hjarquin Cross",
    description: "HJARQUIN_CROSS_DESCRIPTION",
    image: HjarquinCross,
    url: "https://hjarquin-cross.vercel.app/",
    tecnologies: [
      { id: 1, name: "React" },
      { id: 2, name: "TypeScript" },
      { id: 3, name: "Axios" },
      { id: 4, name: "React-Query" },
    ],
  },
];
