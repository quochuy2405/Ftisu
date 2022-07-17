import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
type User = { usename: string; password: string }

interface IUserState {
  user: User | null
}

const initialState: IUserState = {
  user: null
}

export const UserSlice = createSlice({
  initialState,
  name: 'user',
  reducers: {
    logout: () => initialState,
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload
    }
  }
})

export default UserSlice.reducer

export const { logout, setUser } = UserSlice.actions
