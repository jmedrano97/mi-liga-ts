import { configureStore } from '@reduxjs/toolkit'
import leagueFormSlice from '../features/leagues/leagueFormSlice'
import DetailLeagueSlice from '../features/leagues/DetailLeagueSlice'
import CompetitionsLeagueSlice from '../features/leagues/CompetitionsLeagueSlice'

export const store = configureStore({
  reducer: {
    leagueForm: leagueFormSlice,
    detailLeague: DetailLeagueSlice,
    competitionsLeague: CompetitionsLeagueSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch