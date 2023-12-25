import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import appInfo from "../constants/app-info";
import routes from "../routing/app-routes";
import { SideNavInnerToolbar as SideNavBarLayout } from "../layouts";
import { ChatUserList, Footer } from "../components";

export default function () {
  return (
    <SideNavBarLayout title={appInfo.title}>
      <div className="zzPageContent">
        <div className="zzPageWidth">
          <Switch>
            {routes.map(({ path, component }) => (
              <Route exact key={path} path={path} component={component} />
            ))}
            <Redirect to={"/home"} />
          </Switch>
        </div>
        <ChatUserList />
      </div>
      <Footer>
        Copyright © 2021-{new Date().getFullYear()} {appInfo.title} Inc.
        <br />
        All trademarks or registered trademarks are property of their respective
        owners.
      </Footer>
    </SideNavBarLayout>
  );
}
