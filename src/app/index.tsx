import MainProvider from "@/app/providers";
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