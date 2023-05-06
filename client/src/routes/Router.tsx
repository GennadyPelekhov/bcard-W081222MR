import React from "react";
import { Routes, Route } from "react-router-dom";
import ROUTES, { SANDBOX_ROUTES } from "./routesModel";
import CardsPage from "../cards/pages/CardsPage";
import AboutPage from "../pages/AboutPage";
import ErrorPage from "../pages/ErrorPage";
import SignupPage from "../users/pages/SignupPage";
import LoginPage from "../users/pages/LoginPage";
import CardDetailsPage from "../cards/pages/CardDetailsPage";
import SanboxMenu from "../sandbox/SanboxMenu";
import Template from "../sandbox/components/Template";
import Styles from "../sandbox/components/styles/Styles";
import Logic from "../sandbox/components/Logic";
import ComponentMenu from "../sandbox/components/ComponentMenu";
import StyleModule from "../sandbox/components/styles/StyleModule";
import StyleTest from "../sandbox/components/styles/StyleTest";
import StringInterpolation from "../sandbox/components/StringInterpolation";
import ConditionalRenderingMenu from "../sandbox/conditional-rendering/ConditionalRenderingMenu";
import ConditionalRendering from "../sandbox/conditional-rendering/ConditionalRendering";
import CardEditPage from "../cards/pages/CardEditPage";
import EventsMenu from "../sandbox/events/EventsMenu";
import OnClick from "../sandbox/events/OnClick";
import RaisingEvents from "../sandbox/events/RaisingEvents";
import MuiSandboxMenu from "../sandbox/mui-sandbox/MuiSandboxMenu";
import MuiButton from "../sandbox/mui-sandbox/data-display/MuiButton";
import MuiDivider from "../sandbox/mui-sandbox/data-display/MuiDivider";
import MuiBox from "../sandbox/mui-sandbox/layout/MuiBox";
import MuiTypography from "../sandbox/mui-sandbox/data-display/MuiTypography";
import MuiContainer from "../sandbox/mui-sandbox/layout/MuiContainer";
import MuiGrid from "../sandbox/mui-sandbox/layout/MuiGrid";
import MuiStack from "../sandbox/mui-sandbox/layout/MuiStack";
import MuiAppBar from "../sandbox/mui-sandbox/navigations/MuiAppBar";
import MuiBottomNavigation from "../sandbox/mui-sandbox/navigations/MuiBottomNavigation";
import PropsMenu from "../sandbox/props/PropsMenu";
import FatherPropsObject from "../sandbox/props/props-object/FatherPropsObject";
import FatherPropsString from "../sandbox/props/props-string/FatherPropsString";
import PropsTs from "../sandbox/props/props-ts/PropsTs";
import FatherPropsTwoKeys from "../sandbox/props/props-two-keys/FatherPropsTwoKeys";
import UseStateMenu from "../sandbox/use-state/UseStateMenu";
import UseState from "../sandbox/use-state/UseState";
import UseStateWithFunction from "../sandbox/use-state/UseStateWithFunction";
import UseStateWithObject from "../sandbox/use-state/UseStateWithObject";
import UseStateWithComplexObject from "../sandbox/use-state/UseStateWithComplexObject";
import UseStateWithArrayOfObjects from "../sandbox/use-state/UseStateWithArrayOfObjects";
import SetPost from "../sandbox/use-state/SetPost";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.ROOT} element={<CardsPage />} />
      <Route path={ROUTES.CARDS} element={<CardsPage />} />
      <Route
        path={`${ROUTES.CARD_DETAILS}/:cardId`}
        element={<CardDetailsPage />}
      />
      <Route path={`${ROUTES.CARD_EDIT}/:cardId`} element={<CardEditPage />} />
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      <Route path={ROUTES.SINGUP} element={<SignupPage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.SANDBOX} element={<SanboxMenu />}>
        <Route path={SANDBOX_ROUTES.COMPONENT} element={<ComponentMenu />}>
          <Route path={SANDBOX_ROUTES.TEMPLATE} element={<Template />} />
          <Route path={SANDBOX_ROUTES.LOGIC} element={<Logic />} />
          <Route path={SANDBOX_ROUTES.STYLES} element={<Styles />} />
          <Route path={SANDBOX_ROUTES.STYLE_MODULE} element={<StyleModule />} />
          <Route path={SANDBOX_ROUTES.STYLE_TEST} element={<StyleTest />} />
          <Route
            path={SANDBOX_ROUTES.STRING_INTERPOLATION}
            element={<StringInterpolation />}
          />
        </Route>
        <Route
          path={SANDBOX_ROUTES.CONDITIONAL_RENDERING}
          element={<ConditionalRenderingMenu />}
        >
          <Route
            path={SANDBOX_ROUTES.CONDITIONAL_RENDERING_SANDBOX}
            element={<ConditionalRendering />}
          />
        </Route>
        <Route path={SANDBOX_ROUTES.EVENTS} element={<EventsMenu />}>
          <Route path={SANDBOX_ROUTES.ON_CLICK} element={<OnClick />} />
          <Route
            path={SANDBOX_ROUTES.RAISING_EVENTS}
            element={<RaisingEvents />}
          />
        </Route>
        <Route path={SANDBOX_ROUTES.MUI_SANDBOX} element={<MuiSandboxMenu />}>
          <Route path={SANDBOX_ROUTES.MUI_BUTTON} element={<MuiButton />} />
          <Route path={SANDBOX_ROUTES.MUI_DIVIDER} element={<MuiDivider />} />
          <Route
            path={SANDBOX_ROUTES.MUI_TYPOGRAPHY}
            element={<MuiTypography />}
          />
          <Route path={SANDBOX_ROUTES.MUI_BOX} element={<MuiBox />} />
          <Route
            path={SANDBOX_ROUTES.MUI_CONTAINER}
            element={<MuiContainer />}
          />
          <Route path={SANDBOX_ROUTES.MUI_GRID} element={<MuiGrid />} />
          <Route path={SANDBOX_ROUTES.MUI_STACK} element={<MuiStack />} />
          <Route path={SANDBOX_ROUTES.MUI_APP_BAR} element={<MuiAppBar />} />
          <Route
            path={SANDBOX_ROUTES.MUI_BOTTOM_NAVIGATION}
            element={<MuiBottomNavigation />}
          />
        </Route>
        <Route path={SANDBOX_ROUTES.PROPS} element={<PropsMenu />}>
          <Route
            path={SANDBOX_ROUTES.FATHER_PROPS_OBJECT}
            element={<FatherPropsObject />}
          />
          <Route
            path={SANDBOX_ROUTES.FATHER_PROPS_STRING}
            element={<FatherPropsString />}
          />
          <Route path={SANDBOX_ROUTES.PROPS_TS} element={<PropsTs />} />
          <Route
            path={SANDBOX_ROUTES.FATHER_PROPS_TWO_KEYS}
            element={<FatherPropsTwoKeys />}
          />
        </Route>
        <Route path={SANDBOX_ROUTES.USE_STATE_HOOK} element={<UseStateMenu />}>
          <Route path={SANDBOX_ROUTES.USE_STATE} element={<UseState />} />
          <Route
            path={SANDBOX_ROUTES.USE_STATE_WITH_FUNCTION}
            element={<UseStateWithFunction />}
          />
          <Route
            path={SANDBOX_ROUTES.USE_STATE_WITH_OBJECT}
            element={<UseStateWithObject />}
          />
          <Route
            path={SANDBOX_ROUTES.USE_STATE_WITH_COMPLEX_OBJECT}
            element={<UseStateWithComplexObject />}
          />
          <Route
            path={SANDBOX_ROUTES.USE_STATE_WITH_ARRAY_OF_OBJECTS}
            element={<UseStateWithArrayOfObjects />}
          />
          <Route
            path={SANDBOX_ROUTES.USE_STATE_SET_POST}
            element={<SetPost />}
          />
        </Route>
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;
