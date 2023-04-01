import {lazy} from "react";
import {IRoute} from "@/shared/types";
import ROUTE_ENUM from "@/shared/enums"


export const privateRoutes:IRoute[] = [
    {
        path: ROUTE_ENUM.PrivateRoutesUrl.USER,
        component: lazy(() => import("@/pages/private/UserInfoPage"))
    },
]