import { createElement } from "react";

export interface IDataItemProps {
  content: string;
  index: number;
  parentIndex?: number;
}

export default function DataItem({
  content,
  index,
  parentIndex,
}: IDataItemProps) {
  const isChildItem = parentIndex !== undefined;
  const indexString = isChildItem
    ? `${parentIndex + 1}.${index + 1}`
    : (index + 1).toString(); // 1-based indexing instead of 0-based
  return createElement(
    isChildItem ? "p" : "h3",
    { className: isChildItem ? "" : "font-bold" },
    `${indexString} ${content}`
  );
}
