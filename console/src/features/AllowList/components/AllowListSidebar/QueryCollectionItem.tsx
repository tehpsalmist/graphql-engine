import clsx from 'clsx';
import React from 'react';
import { FaFolder, FaFolderOpen } from 'react-icons/fa';

interface QueryCollectionItemProps extends React.ComponentProps<'a'> {
  name: string;
  selected: boolean;
}

export const QueryCollectionItem: React.FC<QueryCollectionItemProps> =
  props => {
    const { name, selected, className, ...rest } = props;
    const Icon = selected ? FaFolderOpen : FaFolder;
    const textClassName = selected
      ? 'text-amber-500 hover:text-amber-600'
      : 'hover:bg-gray-100 hover:text-gray-900';
    return (
      <a
        className={clsx(
          `cursor-pointer flex items-center text-muted rounded py-1.5 px-sm`,
          textClassName,
          className
        )}
        {...rest}
      >
        <Icon className="mr-1.5" />
        {name}
      </a>
    );
  };
