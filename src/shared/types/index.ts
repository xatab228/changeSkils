import {ComponentType, LazyExoticComponent} from "react";

export interface IRoute {
    path: string,
    component: LazyExoticComponent<ComponentType>
}
