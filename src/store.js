import {configureStore} from '@reduxjs/toolkit';
import movieSlice from './services/slice/movieSlice';
import authSlice from './services//slice/authSlice';
import newsSlice from './services/slice/newsSlice';
import bookTicketSlice from './services/slice/bookTicketSlice';

const store = configureStore({
    reducer : {
        movieSlice : movieSlice,
        newsSlice : newsSlice,
        authSlice : authSlice,
        bookTicketSlice : bookTicketSlice
    }
})

export default store;