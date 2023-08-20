import { createSlice } from '@reduxjs/toolkit'
import { formatDate } from '../../helpers/date.helper';

const initialState = {
  selectedDate: formatDate(new Date()),
  passenger: 
  {
    fullName: '',
    age: '',
    gender: '',
    class: '',
    food: '',
  },
  from: "",
  to: "",
  launch: "",
  price: 0,
}

export const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    addBooking: (state, action) => {
      const { selectedDate, price, from, to, launch, passenger } = action.payload;
      state.selectedDate = selectedDate;
      state.passenger = passenger;
      state.price = price;
      state.from = from;
      state.to = to;
      state.launch = launch;
    },
    clearBooking: (state) => {
      state.date = formatDate(new Date());
      state.price = 0;
      state.from = null;
      state.to = null;
      state.launch = null;
      state.selectedDate = formatDate(new Date());
      state.passenger = {
        fullName: '',
        age: '',
        gender: '',
        class: '',
        food: '',
      };
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