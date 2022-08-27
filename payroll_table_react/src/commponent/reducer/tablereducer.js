import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'tableStore',
  initialState: {
    arrTable: [],
  },

  reducers: {
    addValue: (state, action) => {
      return { 
          ...state,
          arrTable: [...state.arrTable, action.payload]
      }
    },
    replaceArr: (state, action) => {
      return { 
          arrTable: action.payload
      }
    }
  }
})

export const { addValue, replaceArr } = counterSlice.actions

export const storeValue = (state) => state.tableStore.arrTable

export default counterSlice.reducer