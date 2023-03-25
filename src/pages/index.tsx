import {useMemo, FC} from "react"
import {Route, Routes, Navigate} from "react-router-dom";
import {privateRoutes} from "@/pages/private";
import {publicRoutes, PublicRoutesUrl} from "@/pages/public";


interface AppRoutesParams {
    isAuth?: Boolean
}

const AppRoutes: FC<AppRoutesParams> = ({isAuth = true}) => {
    const routes = useMemo(() => isAuth ? [...publicRoutes,...privateRoutes] : publicRoutes, [isAuth])
    console.log(routes);
    return (
        <Routes>
            {routes.map(route =>
                <Route
                    key={route.path}
                    path={route.path}
                    element={<route.component/>}
                />
            )}
            <Route
                path="*"
                element={<Navigate to={PublicRoutesUrl.MAIN_PAGE} replace/>}
            />
        </Routes>
    )
}
export default AppRoutes