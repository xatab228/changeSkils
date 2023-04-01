import MainProvider from "@/app/providers";
import "@/app/index.scss"
import AppRoutes from "@/pages";

const App = () => {
    return (
        <MainProvider>
            <div className="app">
                <AppRoutes/>
            </div>
        </MainProvider>
    )
}
export default App