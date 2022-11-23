import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { movieApi } from "../movieApi";

const initialState = {
    isLoading: false,
    error: '',

    movieList: [],

    trailer: '',
    isOpenTrailer: false,

    allCumRap: [],
    allRap: [],

    allHeThongRapChieu: [],
    heThongRap: [],

    lichChieuPhim: [],
    heThongRapTheoPhim: [],
    danhSachPhongVe : [],

    searchFilm: []

}

export const fetchAllMovie = createAsyncThunk(
    'movie/fetchAllMovie',
    async () => {
        try {
            const data = await movieApi.getFilm();
            return data;
        } catch (error) {
            throw (error);
        }
    }
);

export const getMovieByName = createAsyncThunk(
    'movie/getMovieByName',
    async (tenPhim) => {
        try {
            const data = await movieApi.getFilmByName(tenPhim);
            return data;
        } catch (error) {
            throw (error);
        }
    }
);

export const fetchAllCumRap = createAsyncThunk(
    'moive/fetchAllCumRap',
    async () => {
        try {
            const data = await movieApi.getCumRap();
            return data;
        } catch (error) {
            throw (error);
        }
    }
);

export const fetchAllRap = createAsyncThunk(
    'movie/fetchAllRap',
    async (maCumRap) => {
        try {
            const data = await movieApi.getRap(maCumRap);
            return data;
        } catch (error) {
            throw (error)
        }
    }
);

export const fetchHeThongRapChieu = createAsyncThunk(
    'movie/fetchHeThongRapChieu',
    async (maHeThongRap) => {
        try {
            const data = await movieApi.getHeThongRapChieu(maHeThongRap);
            return data;
        } catch (error) {
            throw (error)
        }
    }
);

export const fetchHeThongRap = createAsyncThunk(
    'movie/fetchHeThongRap',
    async (maHeThongRap) => {
        try {
            const data = await movieApi.getLichChieuCumRap(maHeThongRap);
            return data;
        } catch (error) {
            throw (error)
        }
    }
);

export const fetchLichChieuPhim = createAsyncThunk(
    'movie/fetchLichChieuPhim',
    async (maPhim) => {
        try {
            const data = await movieApi.getLichChieuCuaPhim(maPhim);
            return data;
        } catch (error) {
            throw (error)
        }
    }
);

export const fetchDanhSachPhongVe = createAsyncThunk(
    'movie/fetchDanhSachPhongVe',
    async (MaLichChieu) => {
        try {
            const data = await movieApi.getDanhSachPhongVe(MaLichChieu);
            return data;
        } catch (error) {
            throw (error)
        }
    }
)

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        trailer: (state, trailerFilm) => {
            return { ...state, trailer: trailerFilm.payload };
        },
        showTrailer: (state) => {
            return { ...state, isOpenTrailer: true }
        },
        closeTrailer: (state) => {
            return { ...state, isOpenTrailer: false }
        },
        
    },
    extraReducers: (builder) => {
        //all Movie
        builder.addCase(fetchAllMovie.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchAllMovie.fulfilled, (state, action) => {
            state.isLoading = false;
            state.movieList = action.payload;
            state.movieListDefault = action.payload;
        });
        builder.addCase(fetchAllMovie.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        });

        //all cụm rạp
        builder.addCase(fetchAllCumRap.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchAllCumRap.fulfilled, (state, action) => {
            state.isLoading = false;
            state.allCumRap = action.payload;
        });
        builder.addCase(fetchAllCumRap.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        });

        //all rạp
        builder.addCase(fetchAllRap.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchAllRap.fulfilled, (state, action) => {
            state.isLoading = false;
            state.allRap = action.payload;
        });
        builder.addCase(fetchAllRap.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        });

        // All hệ thống rạp
        builder.addCase(fetchHeThongRapChieu.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchHeThongRapChieu.fulfilled, (state, action) => {
            state.isLoading = false;
            state.allHeThongRapChieu = action.payload;
        });
        builder.addCase(fetchHeThongRapChieu.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        });

        // hệ thống rạp cụ thể
        builder.addCase(fetchHeThongRap.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchHeThongRap.fulfilled, (state, action) => {
            state.isLoading = false;
            state.heThongRap = action.payload;
        });
        builder.addCase(fetchHeThongRap.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        });

        // Lịch chiếu theo mã phim
        builder.addCase(fetchLichChieuPhim.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchLichChieuPhim.fulfilled, (state, action) => {
            state.isLoading = false;
            state.lichChieuPhim = action.payload;
            state.trailer = action.payload.trailer;
        });
        builder.addCase(fetchLichChieuPhim.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        });

        // Lấy danh sách phòng vé theo mã rạp
        builder.addCase(fetchDanhSachPhongVe.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchDanhSachPhongVe.fulfilled, (state, action) => {
            state.isLoading = false;
            state.danhSachPhongVe = action.payload;
        });
        builder.addCase(fetchDanhSachPhongVe.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        });


        // search film theo tên
        builder.addCase(getMovieByName.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getMovieByName.fulfilled, (state, action) => {
            state.isLoading = false;
            state.searchFilm = action.payload;
        });
        builder.addCase(getMovieByName.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        });
    }
})

export const { trailer, showTrailer, closeTrailer } = movieSlice.actions;
export default movieSlice.reducer;