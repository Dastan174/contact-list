import { Route, Routes } from "react-router-dom";
import List from "../components/pages/list/List";
import Add from "../components/pages/add/Add";
import Edit from "../components/pages/edit/Edit";

const MainRoutes = () => {
  const routes = [
    { link: "/", element: <List /> },
    { link: "/add", element: <Add /> },
    { link: "/edit/:id", element: <Edit /> },
  ];
  return (
    <Routes>
      {routes.map((item, idx) => (
        <Route path={item.link} element={item.element} key={idx} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
