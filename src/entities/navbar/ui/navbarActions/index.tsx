import {FC} from 'react';
import ActionBar from "@/shared/ui/actionBar";
import {actionItems} from "@/entities/navbar/ui/navbarActions/config";
import {UserOutlined} from "@ant-design/icons";
import {AutoComplete, Avatar} from "antd";
import "@/entities/navbar/ui/navbarActions/index.scss"
import {useNavigate} from "react-router-dom";

export interface INavbarActions {
  className?: string
}

const NavbarActions: FC<INavbarActions> = ({className}) => {
  const navigate = useNavigate()
  const defaultClassName = 'navbar-actions'
  const localClassName = className ? `${className} ${defaultClassName}` : defaultClassName;
  return (
    <div className={localClassName}>
      <AutoComplete style={{width: "240px", marginRight: "auto"}}/>
      <ActionBar items={actionItems}/>
      <Avatar
        className="ml-2"
        icon={<UserOutlined/>}
        onClick={() => navigate('/')}
      />
    </div>
  )
}
export default NavbarActions