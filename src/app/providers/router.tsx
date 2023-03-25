
import {Suspense, ReactNode} from "react";
import {BrowserRouter} from "react-router-dom";

const Loader = () => (<div>Loading...</div>)
const Router = ({children}: {children: ReactNode}) => {
    return (
        <BrowserRouter>
            <Suspense fallback={<Loader/>}>
                {children}
            </Suspense>
        </BrowserRouter>
    )
}
export default Router