import dragonReducer from "./dragon/dragonSlice";
import missionReducer from "./missions/missionSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store =configureStore({
    reducer:{
        mission:missionReducer,
        dragon:dragonReducer,
    },
});

export default store;