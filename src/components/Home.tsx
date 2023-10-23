import { Layout } from 'antd';
import SlideShow from './user/SlideShow';
import TopMovies from './user/TopMovies';
import TopTVs from './user/TopTVs';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';

// const { Header, Footer, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 50,
    lineHeight: '64px',
    backgroundColor: '#7dbcea',
};

const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#108ee9',
};

const siderStyle: React.CSSProperties = {
    textAlign: 'center',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#3ba0e9',
};

const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#7dbcea',
};

export default function Home() {
    return (
        // <div>
        //     <SlideShow />
        //     <div>
        //         <TopMovies />
        //         <TopTVs />
        //     </div>
        // </div>
        <Layout>
            <Header style={headerStyle}>Header</Header>
            <Layout hasSider>
                <Content style={contentStyle}>Content</Content>
                <Sider style={siderStyle}>Sider</Sider>
            </Layout>
            <Footer style={footerStyle}>Footer</Footer>
        </Layout>
    );
}
