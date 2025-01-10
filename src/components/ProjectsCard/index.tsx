import { TFunction } from "i18next";
import NotFound from "../../../public/images/NotFound.png";
import { IProjectsResponse } from "@/interfaces/IProjectsResponse";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

import { AnimatedTooltip } from "../ui/animated-tooltip";
import { LinkPreview } from "../ui/link-preview";
interface Props {
  projectData: IProjectsResponse;
  t: TFunction;
}

export const ProjectsCard = ({ projectData, t }: Props) => {
  return (
    <div
      className="w-full h-auto flex flex-col cursor-pointer"
      // onClick={() => window.open(projectData.url, "_blank")}
    >
      <LinkPreview url={projectData.url} className="font-bold">
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
      </LinkPreview>

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
            <div key={t.id} className="flex items-center p-2">
              <AnimatedTooltip name={t.name} id={t.id} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
