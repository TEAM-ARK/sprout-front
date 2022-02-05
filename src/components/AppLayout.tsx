import React, { FC } from 'react';
import { Layout, Menu } from 'antd';
import {
  HomeOutlined,
  TeamOutlined,
  ReadOutlined,
  QuestionCircleOutlined,
  MessageOutlined,
  GithubOutlined,
} from '@ant-design/icons';
import Image from 'next/image';
import programmersLogo from '../../public/images/programmers_logo.png';
import githubLogo from '../../public/images/github_logo.png';

React.useLayoutEffect = React.useEffect;

const AppLayout: FC = ({ children }) => {
  const siderStyle = {
    height: '100vh',
    paddingTop: '40px',
  };

  const loginWrapper = {
    padding: '20px 20px 40px 20px',
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 0.65)',
  };

  const loginButton = {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    border: '1px solid rgba(255, 255, 255, 0.65)',
    borderRadius: '8px',
    padding: '5px 10px',
  };

  const siteMove = {
    bottom: 0,
    position: 'absolute',
    textAlign: 'center',
    padding: '20px 20px',
    width: '100%',
  };

  const siteMoveButton = {
    backgroundColor: 'rgba(0,0,0,0)',
    borderWidth: 0,
    paddingRight: '10px',
  };
  const { Sider, Content } = Layout;
  return (
    <Layout>
      <Sider style={siderStyle} width={270}>
        <div style={loginWrapper}>
          <p>
            회원 가입없이 간편하게
            <br /> Github로 로그인하세요 :)
          </p>
          <button type="button" style={loginButton}>
            <GithubOutlined />
            <span style={{ marginLeft: '4px' }}>Github로 로그인하기</span>
          </button>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
          <Menu.Item key="1" icon={<HomeOutlined />}>
            홈
          </Menu.Item>
          <Menu.Item key="2" icon={<TeamOutlined />}>
            스터디
          </Menu.Item>
          <Menu.Item key="3" icon={<MessageOutlined />}>
            자유 게시판
          </Menu.Item>
          <Menu.Item key="4" icon={<QuestionCircleOutlined />}>
            Q&A
          </Menu.Item>
          <Menu.Item key="5" icon={<ReadOutlined />}>
            홍보
          </Menu.Item>
          <div style={siteMove}>
            {/* <input type="image"></input> */}
            <button type="button" style={siteMoveButton}>
              <Image src={githubLogo} />
            </button>
            <button type="button" style={siteMoveButton}>
              <Image src={programmersLogo} width={32} height={32} />
            </button>
          </div>
        </Menu>
      </Sider>
      <Content>{children}</Content>
    </Layout>
  );
};

export default AppLayout;
