import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface CompetitionLeague {
  competition_id: number;
  name: string;
  league_id: number;
  typeOfCompetitions_id: number;
  typeOfCompetitions_name: string;
}

type CompetitionsLeagueState = CompetitionLeague[];

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
