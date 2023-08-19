import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  date: null,
  price: 0,
  from: null,
  to: null,
}

export const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    addBooking: (state, action) => {
        state.date = action.payload
        state.price = action.payload;
        state.from = action.payload
        state.to = action.payload
    },
    clearBooking: (state) => {
        state.date = null;
        state.price = 0;
        state.from = null;
        state.to = null;
    },
  },
})

// Action creators are generated for each case reducer function
export const { addBooking, clearBooking } = bookingSlice.actions

// Selectors - This is how we pull information from the global store slice
// export const selectItems = state => state.cart.items;
// export const selectTotal = state => state.cart.items.reduce((total, item) => total + item.unit * item.price, 0);
// export const selectCount = state => state.cart.count;
// export const selectName = state => state.cart.name;

export default bookingSlice.reducer;