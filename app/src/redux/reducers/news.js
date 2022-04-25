import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { users, news } from '../../http';

export const getNews = createAsyncThunk(
  'news/getNews',
  async () => {
    return await new Promise(
      (resolve, reject) =>
        setTimeout(() => {
          resolve(news)
        }, 500)
    )
  }
)

const newsReducer = createSlice({
  name: 'news',
  initialState: {
    data: [],
    isLoading: false
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(getNews.pending, (state, action) => {
      state.isLoading = true;
    })
    builder.addCase(getNews.fulfilled, (state, action) => {
      state.isLoading = false
      state.data = action.payload
    })
  },
})

const { reducer } = newsReducer

export default reducer
