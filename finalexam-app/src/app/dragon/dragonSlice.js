import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const URL = 'https://api.spacexdata.com/v4/dragons';

const initialState = {
  dragons: [],
};

export const fetchDragons = createAsyncThunk(
  'dragons/fetchDragons',
  async () => {
    try {
      const response = await fetch(URL);
      const result = await response.json();
      const dragonArr = result.map((item) => ({
        id: item.id,
        name: item.name,
        type: item.type,
        flickr_images: item.flickr_images,
        reserved: false,
      }));
      return dragonArr;
    } catch (error) {
      throw Error('Error fetching dragons');
    }
  },
);

const dragonsSlice = createSlice({
  name: 'dragons',
  initialState,
  reducers: {
    reserveDragon: (state, action) => {
      const findDragon = action.payload;
      const updatedDragons = state.dragons.map((dragon) => {
        if (dragon.id === findDragon) {
          return {
            ...dragon,
            reserved: !dragon.reserved,
          };
        }
        return dragon;
      });
      state.dragons = updatedDragons;
    },
  },
});

export const { reserveDragon } = dragonsSlice.actions;

export default dragonsSlice.reducer;
