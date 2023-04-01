import {FC, ReactNode} from 'react';
import {Button, Layout, Tabs} from "antd";
const { Header, Footer, Sider, Content } = Layout;
import "@/features/pageWrapper/ui.scss"
import Navbar from "@/entities/navbar";
export interface IPageWrapper {
    children: ReactNode
}

const PageWrapper: FC<IPageWrapper> = ({children}) => {


    return (
        <div className="page-wrapper">
            <Layout className="full-height">
                <Header>
                    <Navbar/>
                </Header>
                <Layout>
                    <Sider>

                    </Sider>
                    <Content>
                        {children}
                    </Content>
                </Layout>
                <Footer>
                    Footer
                </Footer>
            </Layout>
        </div>
    )
}
export default PageWrapper