import React from "react";
import { Fetcher } from "./components/Fetcher";
import { Button } from "./components/Button";
import { Provider } from "react-redux";
import { store } from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <Fetcher>
        <Button></Button>
      </Fetcher>
    </Provider>
  );
};

export default App;
