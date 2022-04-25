import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { users } from '../../http';

export const handleLogin = createAsyncThunk(
  'user/handleLogin',
  async ([userLogin, userPassword]) => {
    return await new Promise(
      (resolve, reject) =>
        setTimeout(() => {
          const user = users.find(({ login }) => login == userLogin)
          if (!user) {

            return reject('Такого пользователя нет')
          }
          if (user?.password == userPassword) {

            return resolve(user)
          }

          return reject('Неверный пароль')

        }, process.env.REACT_APP_SERVER_DELAY)
    )
  }
)

const userReducer = createSlice({
  name: 'user',
  initialState: {
    isLogged: false,
    userData: null,
    error: '',
    isLoading: false,
  },
  reducers: {
    handleLogout(state, action) {
      state.isLogged = false
      state.userData = null
      state.error = ''
      state.isLoading = false
    }
  },
  extraReducers: (builder) => {
    builder.addCase(handleLogin.pending, (state, action) => {
      state.isLoading = true;
    })
    builder.addCase(handleLogin.fulfilled, (state, action) => {
      state.isLogged = true
      state.isLoading = false
      state.error = ''
      state.userData = action.payload
    })
    builder.addCase(handleLogin.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message
    })
  },
})

const { reducer, actions } = userReducer
export const {
  handleLogout
} = actions
export default reducer
