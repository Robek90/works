import { configureStore } from '@reduxjs/toolkit';
import valueReducer from './tablereducer'

export default configureStore({
  reducer: {
    tableStore: valueReducer
  }
})