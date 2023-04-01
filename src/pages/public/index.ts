import {IRoute} from "@/shared/types";
import {lazy} from "react";
import ROUTES_ENUM from "@/shared/enums";


export const publicRoutes:IRoute[] = [
    {
        path: ROUTES_ENUM.PublicRoutesUrl.MAIN_PAGE,
        component: lazy(() => import("@/pages/public/MainPage"))
    },
]