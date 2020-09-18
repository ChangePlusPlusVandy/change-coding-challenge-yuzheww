import React from "react";
import "./App.css";
import Main from "./components/Main";
import { Layout } from "antd";
const { Header, Footer } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header className="App-header">
          <p className="title">Twitter Game</p>
        </Header>
        <Main />
        <Footer className="footer">
          Designed by Barry Wang. yuzhe.wang@vanderbilt.edu
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
