import React from 'react';
import { Layout, Typography } from 'antd';
const { Footer } = Layout;
const {Text} = Typography
const FooterLayout = () => {
  
  return (
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        <Text strong>Pokemon ©2022 Created by AK</Text>
      </Footer>
  );
};
export default FooterLayout;