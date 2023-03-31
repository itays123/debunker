import { PropsWithChildren } from "react";

export interface IPageHeaderProps extends PropsWithChildren {
  title?: string;
}

export default function PageHeader({
  title = "Debunker · מנפץ הפייקים",
  children,
}: IPageHeaderProps) {
  return (
    <header className="py-12 text-center space-y-4">
      <h1 className="dir-ltr">{title}</h1>
      {children}
    </header>
  );
}
