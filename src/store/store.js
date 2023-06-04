import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './slices/cartSlice'

/**
 * use this store in the root component
 */
const store = configureStore({
  reducer: {
    cart: cartSlice
  }
})

export default store
