import {FC, ReactNode} from "react";
import s from './PrimaryButton.module.scss'
import {ReactSVG} from "react-svg";

interface PrimaryButtonProps {
  children: ReactNode | string,
  icon?: { src: string }
}

export const PrimaryButton: FC<PrimaryButtonProps> = ({children, icon}) => {
  return (
    <button className={s.button}>
      {icon && <ReactSVG className={s.icon} src={icon.src}/>}
      {children}
    </button>
  );
};
