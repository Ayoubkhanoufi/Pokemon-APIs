import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import styles from '../styles/Home.module.css'
import Navbar from './Navbar';
import Footer from './Footer';
import 'antd/dist/reset.css';

const { Header, Content, Sider } = Layout;

function Layouts({ children }) {
    
    return (
        <>
            <div className={styles.container}>
            <Layout
                style={{
                    minHeight: '100vh',
                }}
            >
                <main className={styles.main}>
                    <Layout className="site-layout">
                        <Header>
                            <Navbar />
                        </Header>
                        <Content
                            className="site-layout-background"
                            style={{
                                margin: '5px 5px',
                                padding: 7,
                                minHeight: 280,
                            }}
                        >
                            {children}
                        </Content>
                        <Footer/>
                    </Layout>
                </main>
            </Layout>
            </div>

        </>
    )
}

export default Layouts