
import FooterLayout from "@/layout/FooterLayout";
import HeaderLayout from "@/layout/HeaderLayout";
import { Fragment } from "react/jsx-runtime";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Fragment>
      <HeaderLayout />
      {children}
      <FooterLayout />
    </Fragment>
  );
}
