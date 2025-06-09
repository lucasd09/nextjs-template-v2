import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Breadcrumb } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const uppercaseFirstLetter = (str: string) =>
  `${str.substring(0, 1).toUpperCase()}${str.substring(1)}`;

export const removeFirstChar = (str: string) => `${str.substring(1)}`;

export const getBreadcrumbSections = (path: string): Breadcrumb[] => {
  const sections = path.split("/").filter(Boolean);

  const breadcrumbs: Breadcrumb[] = [];
  let accumulatedPath = "";

  for (const section of sections) {
    accumulatedPath += `/${section}`;

    breadcrumbs.push({
      name: uppercaseFirstLetter(section),
      path: accumulatedPath,
    });
  }

  if (breadcrumbs.length === 0) {
    breadcrumbs.push({ name: "Dashboard", path: "/" });
  }

  return breadcrumbs;
};
