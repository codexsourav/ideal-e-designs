import React from "react";
import AppWrapper from "./Lib/AppWrapper";
import AppRoutes from "./routes/AppRoutes";
function App() {
    return (<AppWrapper>
      <AppRoutes />
    </AppWrapper>);
}
export default React.memo(App);
