import React from "react";
import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { appRoutesObj } from "./app.paths";

const StartUpPage = React.lazy(() => import('./pages/dashboard/startup-page'));
const NotFoundPage = React.lazy(() => import('./pages/404'));

const withSuspense = (WrappedComponent: JSX.Element) => {
  return (
    <Suspense
      fallback={
        <div className="text-primary-200 pt-10">
          Loading...
        </div>
      }
    >
      {WrappedComponent}
    </Suspense>
  );
};

export function AppRouting() {
    return (
      <Suspense
        fallback={
          <div className="text-primary-200 pt-10">
            Loading...
          </div>
        }
      >
        <BrowserRouter>
          <Routes>
            <Route
              key="homepage"
              path={appRoutesObj.getBasePath()}
              element={withSuspense(<App />)}
            />
            
            <Route
              key="StartUpPage"
              path={appRoutesObj.getStartUpPagePath()}
              element={withSuspense(<StartUpPage />)}
            />

            
            <Route
              key="notDefined"
              path="*"
              element={withSuspense(<NotFoundPage />)}
            />
         
             
          </Routes>
        </BrowserRouter>
      </Suspense>
    );
  }
  