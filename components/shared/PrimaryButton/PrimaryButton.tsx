import {FC, ReactNode} from "react";
import s from './PrimaryButton.module.scss'
import {ReactSVG} from "react-svg";
import clsx from "clsx";

interface PrimaryButtonProps {
  children: ReactNode | string,
  icon?: { src: string }
  className?: string
}

export const PrimaryButton: FC<PrimaryButtonProps> = ({children, icon, className}) => {
  return (
    <button className={clsx(s.button, className)}>
      {icon && <ReactSVG className={s.icon} src={icon.src}/>}
      {children}
    </button>
  );
};
