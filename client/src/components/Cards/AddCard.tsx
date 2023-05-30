import React, { FC } from "react";
import { PlusIcon } from "@heroicons/react/24/outline";

interface IAddCard {
  title: string;
  icon?: React.ReactNode;
}

const AddCard: FC<IAddCard> = ({ title, icon }) => {
  return (
    <div className="p-9 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 cursor-pointer">
      <div className="flex items-center justify-center w-full h-full">
        <div className="text-center">
          <div className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {icon ? (
              icon
            ) : (
              <PlusIcon className="w-8 h-8 mx-auto" strokeWidth={1.5} />
            )}
          </div>
          <p className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-400">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AddCard;
