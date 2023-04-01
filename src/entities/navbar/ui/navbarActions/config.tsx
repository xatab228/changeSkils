import {ButtonProps} from "antd";
import {HeartOutlined, BellOutlined, SettingOutlined} from "@ant-design/icons";
import {redirect, useNavigate} from "react-router-dom";
import ROUTES_ENUM from "@/shared/enums"

export const actionItems: ButtonProps[] = [
    {
        type: "text",
        icon: <HeartOutlined/>,
        onClick: () => {
            redirect(ROUTES_ENUM.PrivateRoutesUrl.USER)
        },
    },
    {
        type: "text",
        icon: <BellOutlined/>,
        onClick: () => redirect(ROUTES_ENUM.PrivateRoutesUrl.USER)
        ,
    },
    {
        type: "text",
        icon: <SettingOutlined/>,
        onClick: () => {
            redirect(ROUTES_ENUM.PrivateRoutesUrl.USER)
        },
    },
]