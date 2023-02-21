import { RouterProvider } from "react-router-dom";
import TopAddress from "./Components/TopAddresss/TopAddress";

import router from "./Route/Route";



function App() {
  return (

    <div className="lg:w-10/12 lg:mx-auto  bg-white">
      <TopAddress></TopAddress>
      <RouterProvider router={router}></RouterProvider>
    </div>


  );
}

export default App;
