import MainProvider from "@/app/providers";
import AppRoutes from "@/pages";
import {Button, Layout} from "antd";
const { Header, Footer, Sider, Content } = Layout;
import "@/app/index.scss"

const App = () => {
    return (
        <MainProvider>
            <div className="app">
                <Layout className="full-height">
                    <Header>
                        Headers
                    </Header>
                    <Layout>
                        <Sider>
                            <Button type="primary">
                                Button Primary
                            </Button>
                            <Button>
                                Button def
                            </Button>
                            SideBar
                        </Sider>
                        <Content>
                            <AppRoutes/>
                        </Content>
                    </Layout>
                    <Footer>
                        Footer
                    </Footer>
                </Layout>
            </div>
        </MainProvider>
    )
}
export default App