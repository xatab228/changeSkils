import {IRoute} from "@/shared/types";
import {lazy} from "react";

export enum PublicRoutesUrl {
    MAIN_PAGE = '/'
}

export const publicRoutes:IRoute[] = [
    {
        path: PublicRoutesUrl.MAIN_PAGE,
        component: lazy(() => import("@/pages/public/MainPage"))
    },
]