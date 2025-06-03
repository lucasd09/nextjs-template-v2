import { PublicRoute } from "./types";

const APP_NAME = "Next,js Template v2";

const APP_DESCRIPTION = "A modern template to kickstart your project";

const REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE = "";

const publicRoutes: PublicRoute[] = [
  { path: "sign-in", whenAuthenticated: "redirect" },
  { path: "sign-up", whenAuthenticated: "redirect" },
];

export {
  APP_NAME,
  APP_DESCRIPTION,
  REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE,
  publicRoutes,
};
