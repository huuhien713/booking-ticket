import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { BookTicket } from '../bookTicketApi';

const initialState = {
    listVeDangDat: [],
    ketQua: null,
    isLoading: false,
    errors: null,
    taiKhoan: null,
}

export const datVe = createAsyncThunk(
    'datVe',
    async (danhSachVe) => {
        try {
            const { data } = await BookTicket.datVe(danhSachVe);
            return data.content;
        } catch (error) {
            throw (error);
        }
    }
)

export const lichSuDatVeTaiKhoan = createAsyncThunk(
    'lichSuDatVeTaiKhoan',
    async () => {
        try {
            const { data } = await BookTicket.lichSuDatVe();
            return data.content;
        } catch (error) {
            throw (error);
        }
    }
)

const BookTicketSlice = createSlice({
    name: 'bookTicket',
    initialState,
    reducers: {
        themVe: (state, veDangDat) => {
            return { ...state, listVeDangDat: veDangDat.payload };
        },
    }, extraReducers: (builder) => {
        builder.addCase(datVe.pending, (state) => {
            return { ...state, isLoading: true };
        });
        builder.addCase(datVe.fulfilled, (state, action) => {
            return { ...state, isLoading: false, ketQua: action };
        });
        builder.addCase(datVe.rejected, (state, action) => {
            return { ...state, isLoading: false, error: action.error.message };
        });

        builder.addCase(lichSuDatVeTaiKhoan.pending, (state) => {
            return { ...state, isLoading: true };
        });
        builder.addCase(lichSuDatVeTaiKhoan.fulfilled, (state, action) => {
            return { ...state, isLoading: false, taiKhoan: action.payload };
        });
        builder.addCase(lichSuDatVeTaiKhoan.rejected, (state, action) => {
            return { ...state, isLoading: false, error: action.error.message };
        });

    }
});

export const { themVe } = BookTicketSlice.actions;
export default BookTicketSlice.reducer;