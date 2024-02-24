import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

  interface LeagueCurrentData {
    league_id: number;
    name: string;
    description: string;
    created_at: string;
    league_link: string;
    img: string;

  }

  const initialState: LeagueCurrentData = {
    league_id: 0,
    name: '',
    description: '',
    created_at: '',
    league_link: '',
    img: ''

  };

  //en lugar de setCurrentLeague que sea "DetallesCurrentLeague" para asi poner la demas info por ejemplo "PosicionesCurrentLeague"
  const LeagueCurrentSlice = createSlice({
    name: 'leagueCurrent',
    initialState,
    reducers: {
      setCurrentLeague(state, action: PayloadAction<LeagueCurrentData>) {
        const { league_id, name, description, created_at, league_link, img } = action.payload;
        state.league_id = league_id;
        state.name = name;
        state.description = description;
        state.created_at = created_at;
        state.league_link = league_link;
        state.img = img;
      },
      resetCurrentLeague(state) {
        state.league_id = 0;
        state.name = '';
        state.description = '';
        state.created_at = '';
        state.league_link = '';
        state.img = '';
      }
    },
  });
  
  export const { setCurrentLeague, resetCurrentLeague } = LeagueCurrentSlice.actions;
  export default LeagueCurrentSlice.reducer;
