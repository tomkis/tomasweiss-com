import { createStore, compose } from "redux";

import reducer from "src/reducer";

const buildStore = () =>
  createStore(
    reducer,
    compose(
      typeof window !== "undefined" &&
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

export default buildStore;
