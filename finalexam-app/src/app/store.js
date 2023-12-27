import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './missions/missionSlice';
import rocketsReducer from './dragon/dragonSlice';

const store = configureStore({
  reducer: {
    missions: missionsReducer,
    rockets: rocketsReducer,
  },
});

export default store;
