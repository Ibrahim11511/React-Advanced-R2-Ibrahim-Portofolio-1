import { Outlet } from "react-router-dom";
import SiderBar from "../Side Bar/SideBar";

export default function MasterLayout() {
  return (
    <>
      <SiderBar />
      <Outlet />
    </>
  );
}
