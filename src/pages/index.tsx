import {useMemo, FC} from "react"
import {Route, Routes, Navigate} from "react-router-dom";
import {privateRoutes} from "@/pages/private";
import {publicRoutes} from "@/pages/public";
import PageWrapper from "@/features/pageWrapper";
import ROUTE_ENUM from "@/shared/enums"


interface AppRoutesParams {
    isAuth?: Boolean
}

const AppRoutes: FC<AppRoutesParams> = ({isAuth = true}) => {
    const routes = useMemo(() => isAuth ? [...publicRoutes,...privateRoutes] : publicRoutes, [isAuth])
    console.log(routes);
    return (
        <PageWrapper>
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
                    element={<Navigate to={ROUTE_ENUM.PublicRoutesUrl.MAIN_PAGE} replace/>}
                />
            </Routes>
        </PageWrapper>
    )
}
export default AppRoutes