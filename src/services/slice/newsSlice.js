import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { newsApi } from "../newsApi";

const initialState = {
    newsList: [],
}

export const fetchAllNews = createAsyncThunk(
    'fetchAllNews',
    async (_, { rejectWithValue }) => {
        try {
            const data = await newsApi.getNews();
            return data;
        } catch (error) {
            throw (error)
        }
    }
);

const newsSlice = createSlice({
    name : 'news',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllNews.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchAllNews.fulfilled, (state, action) => {
            state.isLoading = false;
            state.newsList = action.payload;
        });
        builder.addCase(fetchAllNews.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        });
    }
})

export default newsSlice.reducer;