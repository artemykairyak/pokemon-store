import clsx from 'clsx';
import { Dispatch, FC, SetStateAction } from 'react';

import s from './Tabs.module.scss';


export interface Tab {
  name: string;
  text: string;
  onClick?: (name: string) => void;
  className?: string;
}

interface TabsProps {
  tabs: Tab[];
  selectedTab: string;
  setSelectedTab: Dispatch<SetStateAction<any>>;
}

export const Tabs: FC<TabsProps> = ({ tabs, selectedTab, setSelectedTab }) => {
  return (
    <div className={s.tabs}>
      {tabs.map(({ name, text }) => {
        return (
          <button
            className={clsx(s.tab, {
              [s.selectedTab]: selectedTab === name,
            })}
            style={{ width: `${Math.round(100 / tabs.length)}%` }}
            name={name}
            onClick={() => setSelectedTab(name)}
          >
            {text}
          </button>
        );
      })}
    </div>
  );
};
