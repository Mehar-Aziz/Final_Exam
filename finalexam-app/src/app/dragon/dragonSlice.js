import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const URL = 'https://api.spacexdata.com/v4/dragons';

const initialState = {
  dragons: [],
};

export const fetchDragons = createAsyncThunk(
  'missions/fetchDragons',
  async () => {
    const responce = await fetch(URL);
    const result = await responce.json();
    const dragonArr = result.map((item) => ({
      id: item.id,
      name:item.name,
      type:item.type,
      flickr_images:item.flickr_images,
      reserved: false,
    }));
    return dragonArr;
  },
);

const dragonsSlice = createSlice({
  name: 'dragons',
  initialState,
  reducers: {
    reserveDragon: (state, action) => {
      const findDragon = action.payload;
      const updatedDragons = state.missions.map((dragon) => {
        if (dragon.id === findDragon) {
          return {
            ...dragon,
            reserved: !dragon.reserved,
          };
        }
        return dragon;
      });
      return {
        ...state,
        dragon: updatedDragons,
      };
    },
  },
  
});

export const { reserveDragon } = dragonsSlice.actions;

export default dragonsSlice.reducer;
