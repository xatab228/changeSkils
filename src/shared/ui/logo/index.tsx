import {FC} from 'react';
import {QqOutlined} from "@ant-design/icons";
import "@/shared/ui/logo/index.scss"
export interface ILogo {
  className?: string
}

const Logo: FC<ILogo> = ({className}) => {
  const defaultClassName = 'logo'
  const localClassName = className ? `${className} ${defaultClassName}` : defaultClassName;
  return (
    <div className={localClassName}>
        <QqOutlined/>
        <span>LOGO</span>
    </div>
  )
}
export default Logo