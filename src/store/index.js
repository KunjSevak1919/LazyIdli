// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import leaderboardReducer from './leaderboardslice';

const store = configureStore({
  reducer: {
    leaderboard: leaderboardReducer,
  },
}
);

export default store;
