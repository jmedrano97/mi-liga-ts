import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

  interface LeagueFormData {
    name: string;
    description: string;
    league_link: string;
    img: string;
    // Otros campos del formulario
  }

  const initialState: LeagueFormData = {
    name: '',
    description: '',
    league_link: '',
    img: ''
  };


  const leagueFormSlice = createSlice({
    name: 'leagueForm',
    initialState,
    reducers: {
      setLeagueFields(state, action: PayloadAction<LeagueFormData>) {
        const { name, description, league_link, img } = action.payload;
        state.name = name;
        state.description = description;
        state.league_link = league_link;
        state.img = img;
      },
      resetLeagueForm(state) {
        state.name = '';
        state.description = '';
        state.league_link = '';
        state.img = '';
      }

    },
  });
  
  export const { setLeagueFields, resetLeagueForm } = leagueFormSlice.actions;
  export default leagueFormSlice.reducer;