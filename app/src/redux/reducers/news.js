import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { news } from '../../http';
import moment from 'moment';

export const getNews = createAsyncThunk(
  'news/getNews',
  async () => {
    return await new Promise(
      (resolve, reject) =>
        setTimeout(() => {
          resolve(news)
        }, process.env.REACT_APP_SERVER_DELAY)
    )
  }
)

export const addNews = createAsyncThunk(
  'news/addNews',
  async ({ title, content, author }) => {
    return await new Promise(
      (resolve, reject) =>
        setTimeout(() => {
          let preparedData = {
            title,
            content,
            author,
            createdAt: `${moment().toISOString()}`,
            status: 'moderation'
          }
          resolve(preparedData)

        }, process.env.REACT_APP_SERVER_DELAY)
    )
  }
)

export const approveNews = createAsyncThunk(
  'news/approveNews',
  async (id) => {
    return await new Promise(
      (resolve, reject) =>
        setTimeout(() => {
          resolve(id)
        }, process.env.REACT_APP_SERVER_DELAY)
    )
  }
)

export const deleteNews = createAsyncThunk(
  'news/deleteNews',
  async (id) => {
    return await new Promise(
      (resolve, reject) =>
        setTimeout(() => {
          resolve(id)
        }, process.env.REACT_APP_SERVER_DELAY)
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
    //getting news reducer
    builder.addCase(getNews.pending, (state, action) => {
      state.isLoading = true;
    })
    builder.addCase(getNews.fulfilled, (state, action) => {
      state.isLoading = false
      state.data = action.payload
    })

    //adding news reducer
    builder.addCase(addNews.pending, (state, action) => {
      state.isLoading = true;
    })
    builder.addCase(addNews.fulfilled, (state, action) => {
      const lastId = state.data.slice(-1)[0].id
      state.isLoading = false
      state.data.push({
        id: lastId + 1,
        ...action.payload
      })
    })

    //approving news reducer
    builder.addCase(approveNews.pending, (state, action) => {
      state.isLoading = true;
    })
    builder.addCase(approveNews.fulfilled, (state, action) => {
      state.isLoading = false
      const existingPost = state.data.find(post => post.id === action.payload)
      if (existingPost) {
        existingPost.status = 'opened'
      }
    })

    //deleting news reducer
    builder.addCase(deleteNews.pending, (state, action) => {
      state.isLoading = true;
    })
    builder.addCase(deleteNews.fulfilled, (state, action) => {
      state.isLoading = false
      state.data = state.data.filter(({ id }) => id !== action.payload)
    })
  },
})

const { reducer } = newsReducer

export default reducer
