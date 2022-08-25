import * as React from "react";

export interface INotifyProps {
  countNotify: number;
}

export default function Notify(props: INotifyProps) {
  return (
    <span className={`notify ${props.countNotify <= 0 ? "is-hidden" : ""}`}>
      {props.countNotify > 9 ? "9+" : props.countNotify}
    </span>
  );
}
