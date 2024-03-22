import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


  const initialState = {
      isLoading: false
  };

  const LoadingOverlaySlice = createSlice({
    name: 'LoadingOverlay',
    initialState,
    reducers: {
      setLoadingOverlay(state, action: PayloadAction<boolean>) {
        state.isLoading = action.payload;
      }
      
    }
  });
  
  export const {setLoadingOverlay} = LoadingOverlaySlice.actions;
  export default LoadingOverlaySlice.reducer;