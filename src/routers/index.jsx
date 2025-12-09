import { Routes, Route } from "react-router-dom";
import { routesConfig } from "./routers.config";
import DefaultLayout from "@/components/layout/DefaultLayout";
import AuthLayout from "@/components/layout/AuthLayout";
import NoLayout from "@/components/layout/NoLayout";
import { useTheme } from "@/hooks/useTheme";

const layouts = {
  default: DefaultLayout,
  auth: AuthLayout,
  none: NoLayout,
};


const AppRouter = () => {
  useTheme()
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

                    <ComponentWithLayout></ComponentWithLayout>

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

                    <ComponentWithLayout></ComponentWithLayout>

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
