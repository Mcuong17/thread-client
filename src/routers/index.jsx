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
    <div className="min-h-screen bg-background">
      <Routes>
        {routesConfig.map((route) => {
          const Layouts = layouts[route.layout] || NoLayout;
          const Element = route.element;

          const ComponentwithLayout = (
            <Layouts>
              <Element></Element>
            </Layouts>
          );

          //Return layout need login
          if (route.isPrivate) {
            return (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <PrivateRouter>
                    <ComponentwithLayout></ComponentwithLayout>
                  </PrivateRouter>
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
                  <PublicRoute>
                    <ComponentwithLayout />
                  </PublicRoute>
                }
              ></Route>
            );
          }

          //Return default layout
          return (
            <Route
              key={route.path}
              path={route.path}
              element={ComponentwithLayout}
            ></Route>
          );
        })}
      </Routes>
    </div>
  );
};

export default AppRouter;
