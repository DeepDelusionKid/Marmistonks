//import rootReducer from "../reducers"
import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../reducers/user.reducer'

const store = configureStore({ 
  //reducer: rootReducer,
  reducer:{
    userReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store