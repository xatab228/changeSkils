import {FC} from 'react';
import NavbarActions from "@/entities/navbar/ui/navbarActions";
import {AutoComplete, Avatar, Space} from "antd";
import {UserOutlined} from "@ant-design/icons";
import "@/entities/navbar/index.scss"
import Logo from "@/shared/ui/logo";
export interface INavbar {
}

const Navbar: FC<INavbar> = () => {
    return (
        <div className="navbar">
          <Logo className="navbar__logo"/>
          <NavbarActions className="navbar__actions"/>
        </div>
    )
}
export default Navbar