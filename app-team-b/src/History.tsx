import React from "react";
import { HistoryItem } from "./HistoryItem";

export const History = (props: { history: string[] }) => {
  return (
    <ul>
      Got the following history:
      {props.history.map(v => (
        <li>
          <HistoryItem item={v} />
        </li>
      ))}
    </ul>
  );
};
