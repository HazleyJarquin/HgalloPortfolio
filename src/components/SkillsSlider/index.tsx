import { iconByTecnologyName } from "@/constants/iconByTecnologyName";

interface Props {
  skillName: string;
  skillLevel: number;
}

export const SkillsSlider = ({ skillLevel, skillName }: Props) => {
  return (
    <div className="mb-4 w-full">
      <div className="flex justify-between items-center mb-1">
        <div className="flex items-center gap-2">
          <span className="text-gray-700 font-medium">
            {iconByTecnologyName[skillName]}
          </span>
          <span className="text-gray-700 font-medium">{skillName}</span>
        </div>
        <span className="text-gray-500 text-sm">{skillLevel}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-1">
        <div
          className="bg-brand-100 h-1 rounded-full"
          style={{ width: `${skillLevel}%` }}
        ></div>
      </div>
    </div>
  );
};
