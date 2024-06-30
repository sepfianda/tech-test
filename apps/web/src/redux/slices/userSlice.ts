import { User } from "@/types/user.type";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: User = {
    id: 0,
    userName: "",
    email: "",
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginAction: (state, action: PayloadAction<User>) => {
            state.id = action.payload.id;
            state.email = action.payload.email;
            state.userName = action.payload.userName;
        },
        logoutAction : (state) => {
            state.id = 0;
            state.email = "";
            state.userName = "";
        }
    }
})

export const { loginAction, logoutAction } = userSlice.actions;

export default userSlice.reducer;