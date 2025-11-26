import { Routes, Route } from "react-router-dom";
import { routesConfig } from "./routers.config";
import DefaultLayout from "@/components/layout/DefaultLayout";
import AuthLayout from "@/components/layout/AuthLayout";
import NoLayout from "@/components/layout/NoLayout";
import PrivateRouter from "./PrivateRouter";
import PublicRoute from "./PublicRouter";

const layouts = {
  default: DefaultLayout,
  auth: AuthLayout,
  none: NoLayout,
};

console.log('a', layouts)

const AppRouter = () => {
  return (
    <div className="main-wrapper">
      <Routes>
        {routesConfig.map((route) => {
          const Layouts = layouts[route.layout] || NoLayout;
          const Element = route.element;

          const ComponentWithLayout = () => (
            <Layouts>
              <Element />
            </Layouts>
          );


         

          //Return layout need login
          if (route.isPrivate) {
            return (
              <Route
                key={route.path}
                path={route.path}
                element={
                  // <PrivateRouter>
                    <ComponentWithLayout></ComponentWithLayout>
                  // </PrivateRouter>
                }
              ></Route>
            );
          }

          //Return layout have login
          if (route.isPublic) {
             
            return (
              <Route
                key={route.path}
                path={route.path}
                element={
                  // <PublicRoute>
                    <ComponentWithLayout />
                  // </PublicRoute>
                }
              ></Route>
            );
          }

          //Return default layout
          return (
            <Route
              key={route.path}
              path={route.path}
              element={ComponentWithLayout}
            ></Route>
          );
        })}
      </Routes>
    </div>
  );
};

export default AppRouter;
