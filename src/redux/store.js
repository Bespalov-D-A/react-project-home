import { configureStore } from '@reduxjs/toolkit'
import mainReducer from '../reducers/main-reducer'

export default configureStore({
  reducer: {
    main: mainReducer
  }
})
