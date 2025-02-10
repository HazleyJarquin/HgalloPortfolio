import NotFound from "../../../public/images/NotFound.png";
import { Hammer } from "lucide-react";
import { TFunction } from "i18next";
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
    <div className="w-full h-auto flex flex-col cursor-pointer">
      <LinkPreview url={projectData.url} className="relative font-bold">
        <img
          onError={(e) => {
            const imgElement = e.target as HTMLImageElement;

            if (imgElement.src !== NotFound) {
              imgElement.src = NotFound;
            }
          }}
          className="w-full h-[200px] object-cover object-center rounded-md"
          src={projectData?.image}
        />
        {projectData.isUnderConstruction && (
          <div className="absolute top-2 right-2 bg-black/70 p-1 rounded-md">
            <Hammer className="text-white w-5 h-5" />
          </div>
        )}
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
