import { configureStore } from '@reduxjs/toolkit'
import leagueFormSlice from '../features/leagues/leagueFormSlice'
import LeagueCurrentSlice from '../features/leagues/LeagueCurrentSlice'

export const store = configureStore({
  reducer: {
    leagueForm: leagueFormSlice,
    leagueCurrent: LeagueCurrentSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch