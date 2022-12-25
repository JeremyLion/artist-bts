import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootRedurcer from "./reducers";

const store = createStore(rootRedurcer, applyMiddleware(thunk))

export default store

// import { spotifyCoreApi } from "./services/spotifyCore";
// export const store = configureStore({
//   reducer: {
//     [spotifyCoreApi.reducerPath]: spotifyCoreApi.reducer
//   },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(spotifyCoreApi.middleware)
// })