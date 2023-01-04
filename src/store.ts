import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
    kupa: (state = 0, action) => {
      switch (action.type) {
        case 'INCREMENT':
          return state + 1
        case 'DECREMENT':
          return state - 1
        default:
          return state
      }
    },
  },
})

export default store
