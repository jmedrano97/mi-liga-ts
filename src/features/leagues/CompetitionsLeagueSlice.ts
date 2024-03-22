import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { CompetitionsLeagueState } from '../../types.d';


const initialState: CompetitionsLeagueState = [];

const CompetitionsLeagueSlice = createSlice({
  name: 'competition',
  initialState,
  reducers: {
    setCompetitionsLeague(state, action: PayloadAction<CompetitionsLeagueState>) {
        return action.payload;
    },
    resetCompetitions(state) {
        return [];
        },
        
  },
});

export const { setCompetitionsLeague, resetCompetitions } = CompetitionsLeagueSlice.actions;
export default CompetitionsLeagueSlice.reducer;
