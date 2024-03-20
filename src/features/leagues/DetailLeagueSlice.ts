import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

  interface DetailLeague {
    league_id: number;
    name: string;
    description: string;
    created_at: string;
    league_link: string;
    img: string;

  }

  const initialState: DetailLeague = {
    league_id: 0,
    name: '',
    description: '',
    created_at: '',
    league_link: '',
    img: ''

  };

  const DetailLeagueSlice = createSlice({
    name: 'detailLeague',
    initialState,
    reducers: {
      setDetailLeague(state, action: PayloadAction<DetailLeague>) {
        const { league_id, name, description, created_at, league_link, img } = action.payload;
        state.league_id = league_id;
        state.name = name;
        state.description = description;
        state.created_at = created_at;
        state.league_link = league_link;
        state.img = img;
      },
      resetDetailLeague(state) {
        state.league_id = 0;
        state.name = '';
        state.description = '';
        state.created_at = '';
        state.league_link = '';
        state.img = '';
      }
    },
  });
  
  export const { setDetailLeague, resetDetailLeague } = DetailLeagueSlice.actions;
  export default DetailLeagueSlice.reducer;
