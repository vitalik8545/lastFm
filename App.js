import React from 'react';
import {AppNavigation} from "./src/navigation/AppNavigation";
import {Provider} from "react-redux";
import rootReducer from "./src/store/rootReducer";

export default function App() {
  return (
    <Provider store={rootReducer}>
      <AppNavigation/>
    </Provider>
  );
}
