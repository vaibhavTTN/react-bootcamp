import { Outlet } from "react-router-dom";
import MainNavigation from "./MainNavigation";

const Main = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Main;
