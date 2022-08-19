import * as React from "react";

export interface IPageTitleProps {
  title: string;
}

export default function PageTitle(props: IPageTitleProps) {
  return <h1 className="page-title">{props.title}</h1>;
}
