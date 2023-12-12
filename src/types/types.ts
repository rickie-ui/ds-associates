import { ElementType, ReactNode } from "react";

export type NavLinkProps = {
  to: string;
  children: string | ReactNode;
};

export type routesProps = {
  id: number;
  path: string;
  title: string;
};

export type servicesProps = {
  id: number;
  title: string;
  icon: ElementType;
  description: string;
};
