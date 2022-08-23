import * as React from "react";

export interface IBadgesProps {
  badges: string;
}
export default function Badges(props: IBadgesProps) {
  return <span className="badges">{props.badges}</span>;
}
