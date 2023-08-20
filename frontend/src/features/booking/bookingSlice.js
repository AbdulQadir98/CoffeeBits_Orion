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
  from: '',
  to: '',
  launch: '',
  price: 0,
}

export const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    addBooking: (state, action) => {
      const { selectedDate, passenger, from, to, launch, price } = action.payload;
      state.selectedDate = selectedDate;
      state.passenger = passenger;
      state.from = from;
      state.to = to;
      state.launch = launch;
      state.price = price;
    },
    clearBooking: (state) => {
      state.selectedDate = formatDate(new Date());
      state.passenger = {
        fullName: '',
        age: '',
        gender: '',
        class: '',
        food: '',
      };
      state.from = '';
      state.to = '';
      state.launch = '';
      state.price = 0;
    },
  },
})

export const { addBooking, clearBooking } = bookingSlice.actions

export default bookingSlice.reducer;