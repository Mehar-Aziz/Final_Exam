import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const URL = 'https://api.spacexdata.com/v3/missions';

const initialState = {
  missions: [],
};

export const fetchMissions = createAsyncThunk(
  'missions/fetchMissions',
  async () => {
    const res = await fetch(URL);
    const result = await res.json();
    const missionArray = result.map((item) => ({
      mission_id: item.mission_id,
      mission_name: item.mission_name,
      description: item.description,
      reserved: false,
    }));
    return missionArray;
  },
);

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    reserveMission: (state, action) => {
      const idToFind = action.payload;
      const updatedMissions = state.missions.map((mission) => {
        if (mission.mission_id === idToFind) {
          return {
            ...mission,
            reserved: !mission.reserved,
          };
        }
        return mission;
      });
      return {
        ...state,
        missions: updatedMissions,
      };
    },
  },
  
});

export const { reserveMission } = missionsSlice.actions;

export default missionsSlice.reducer;
