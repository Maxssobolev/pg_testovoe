import userReducer from './user';
import newsReducer from './news';

export const rootReducer = {
  user: userReducer,
  news: newsReducer
};
