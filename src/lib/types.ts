export type PublicRoute = {
  path: string;
  whenAuthenticated: "redirect" | "next";
};
