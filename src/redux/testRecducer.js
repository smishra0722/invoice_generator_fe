import {createSlice} from "@reduxjs/toolkit";

const testSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        incremented: state => {
            state.value += 1
        },
        decremented: state => {
            state.value -= 1
        }
    }
})

export const {incremented, decremented} = testSlice.actions

export default testSlice.reducer