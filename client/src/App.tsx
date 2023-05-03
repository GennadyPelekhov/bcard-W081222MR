import React from "react";
import "./App.css";
import Layout from "./layout/Layout";
// import SetPost from "./sandbox/use-state/SetPost";
// import UseStateWithArrayOfObjects from "./sandbox/use-state/UseStateWithArrayOfObjects";
// import UseState from "./sandbox/use-state/UseState";
// import AboutPage from "./pages/AboutPage";
// import ErrorPage from "./pages/ErrorPage";
// import CardsPage from "./cards/pages/CardsPage";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
// import OnClick from "./sandbox/events/OnClick";
// import RaisingEvents from "./sandbox/events/RaisingEvents";
// import Card from "./cards/components/card/Card";
// import Cards from "./cards/components/Cards";
// import Card from "./cards/components/card/Card";
// import FatherPropsString from "./sandbox/props/props-string/FatherPropsString";
// import PropsTs from "./sandbox/props/props-ts/PropsTs";
// import Loops from "./sandbox/iteration/Loops";
// import MuiButton from "./sandbox/mui-sandbox/data-display/MuiButton";
// import CardBody from "./cards/components/card/CardBody";
// import MuiTypography from "./sandbox/mui-sandbox/data-display/MuiTypography";
// import Babel from "./introduction/Babel";
// import Template from "./components/Template";
// import Test from "./sandbox/components/Test";
// import StyleTest from "./sandbox/components/styles/StyleTest";
// import Styles from "./sandbox/components/styles/Styles";
// import StyleModule from "./sandbox/components/styles/StyleModule";
// import Logic from "./sandbox/components/Logic";
// import StringIntDemo from "./sandbox/components/StringIntDemo";
// import Template from "./sandbox/components/Template";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          {/* <CardsPage /> */}
          {/* <AboutPage /> */}
          {/* <ErrorPage /> */}
          {/* <Test /> */}
          {/* <Logic /> */}
          {/* <StringIntDemo /> */}
          {/* <Template/> */}
          {/* <Styles /> */}
          {/* <StyleModule /> */}
          {/* <StyleTest /> */}
          {/* <MuiTypography /> */}
          {/* <CardBody /> */}
          {/* <MuiButton /> */}
          {/* <Card /> */}
          {/* <FatherPropsString /> */}
          {/* <PropsTs /> */}
          {/* <Loops /> */}
          {/* <Cards /> */}
          {/* <OnClick /> */}
          {/* <RaisingEvents /> */}
          {/* <UseState /> */}
          {/* <SetPost /> */}
          {/* <UseStateWithArrayOfObjects /> */}
          <Router />
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
