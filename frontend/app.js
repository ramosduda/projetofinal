import { RouterProvider } from "react-router-dom";
import { GlobalUserProvider } from "./context/global-user.context";
import { router } from "./router";

function App() {
  return (
    <GlobalUserProvider>
        <RouterProvider router={router}/>
    </GlobalUserProvider>
  );
}

export default App;