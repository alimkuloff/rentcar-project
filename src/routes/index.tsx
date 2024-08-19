import { useRoutes } from "react-router-dom"
import Home from "./home/Home"
import SinglePage from "./singlePage/SinglePage"

const RouteController = () => {
  return useRoutes([
    {
      path: "",
      element: <Home/>
    },
    {
      path: "dashboard",
      element: <div>Dashboard</div>
    },
    {
      path: "cars/:id",
      element: <SinglePage/>
    }
  ])
}

export default RouteController