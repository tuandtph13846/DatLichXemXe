import React from "react";
import { Layout } from "antd";

import { Outlet } from "react-router-dom";

import AppHeader from "../../components/client/Header/AppHeader";
import Footer from "../../components/client/Footer/Footer";
const WebsiteLayout = () => {
  const { Header, Content } = Layout;
  return (
    <Layout>
      <AppHeader/>
      <Content className="">
        <Outlet />
      </Content>
      <Footer/>
    </Layout>
  );
};

export default WebsiteLayout;
