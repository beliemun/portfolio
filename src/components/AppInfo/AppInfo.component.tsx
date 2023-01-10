import React from "react";

interface IAppInfoProps {
  icon: string;
  screens: string;
  title: string;
  description: string;
}

const AppInfo: React.FC<IAppInfoProps> = ({
  icon,
  screens,
  title,
  description,
}) => {
  return (
    <>
      <li className="flex flex-row items-center my-4">
        <img
          className="w-12 h-12 object-contain rounded-2xl border border-custom-main/20"
          src={icon}
          alt="icon"
        />
        <div className="flex flex-col ml-2">
          <h4 className="font-bold">{title}</h4>
          <h4 className="text-sm">{description}</h4>
        </div>
      </li>
      <li className="list-none">
        <img
          className="w-full object-contain rounded-lg"
          src={screens}
          alt="screenshot"
        />
      </li>
    </>
  );
};

export default AppInfo;
