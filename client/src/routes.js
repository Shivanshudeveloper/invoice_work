import React from "react";

// Root Include
const Root = React.lazy(() => import("./pages/Home/indexRoot"));

const PageError = React.lazy(() => import("./pages/Pages/Special/PageError"));

// Import all components
const SaasOnepage = React.lazy(() => import("./pages/Saas Onepage/index"));

const routes = [
  // Landings
  { path: "/", component: SaasOnepage, isTopbarDark: true },

  //Index root

  { path: "/sa", component: Root, isWithoutLayout: true, exact: true },
  { component: PageError, isWithoutLayout: true, exact: false },
];

export default routes;
