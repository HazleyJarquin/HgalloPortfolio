import { TFunction } from "i18next";
import NotFound from "../../../public/images/NotFound.png";
import { IProjectsResponse } from "@/interfaces/IProjectsResponse";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
interface Props {
  projectData: IProjectsResponse;
  t: TFunction;
}

export const ProjectsCard = ({ projectData, t }: Props) => {
  const iconByTecnologyName: Record<string, React.ReactNode> = {
    React: <img src="/icons/React.svg" alt="React" className="w-6 h-6" />,
    TypeScript: (
      <img src="/icons/Typescript.svg" alt="TypeScript" className="w-6 h-6" />
    ),
    Firebase: (
      <img src="/icons/Firebase.svg" alt="Firebase" className="w-6 h-6" />
    ),
    "Material-UI": (
      <img src="/icons/MaterialUI.svg" alt="Material-UI" className="w-6 h-6" />
    ),
    Axios: <img src="/icons/Axios.svg" alt="Axios" className="w-6 h-6" />,
    Tailwind: (
      <img src="/icons/Tailwind.svg" alt="Tailwind" className="w-6 h-6" />
    ),
    ShadcnUI: (
      <img src="/icons/Shadcn.svg" alt="Tailwind" className="w-6 h-6" />
    ),
    "Next.js": <img src="/icons/NextJs.svg" alt="NextJs" className="w-6 h-6" />,
    Zustand: (
      <img src="/images/ZustandLogo.png" alt="Tailwind" className="w-6 h-6" />
    ),
    "React-Query": (
      <img src="/icons/ReactQuery.svg" alt="React-Query" className="w-6 h-6" />
    ),
  };
  return (
    <div
      className="w-full h-auto flex flex-col cursor-pointer"
      onClick={() => window.open(projectData.url, "_blank")}
    >
      <img
        onError={(e) => {
          const imgElement = e.target as HTMLImageElement;

          if (imgElement.src !== NotFound) {
            imgElement.src = NotFound;
          }
        }}
        className="w-full h-[200px] object-cover rounded-md"
        src={projectData?.image}
      />

      <p className="text-white font-bold line-clamp-2 text-center">
        {projectData.title}
      </p>

      <Tooltip>
        <TooltipTrigger asChild>
          <p className="text-secondaryColors-200 line-clamp-2 text-center">
            {t(projectData.description)}
          </p>
        </TooltipTrigger>
        <TooltipContent className="w-[200px]">
          <p className="text-white text-center">{t(projectData.description)}</p>
        </TooltipContent>
      </Tooltip>

      <div className="w-full flex justify-center items-center gap-2 p-2">
        {projectData?.tecnologies.map((t) => {
          return (
            <div key={t.id} className="flex items-center">
              <Tooltip>
                <TooltipTrigger asChild>
                  {iconByTecnologyName[t.name]}
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-white text-center">{t.name}</p>
                </TooltipContent>
              </Tooltip>
            </div>
          );
        })}
      </div>
    </div>
  );
};
