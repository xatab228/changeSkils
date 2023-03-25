import {lazy} from "react";
import {IRoute} from "@/shared/types";

export enum PrivateRoutesUrl {
    USER = '/user'
}

export const privateRoutes:IRoute[] = [
    {
        path: PrivateRoutesUrl.USER,
        component: lazy(() => import("@/pages/private/UserInfoPage"))
    },
]