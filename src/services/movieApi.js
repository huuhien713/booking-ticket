import {fetcher} from './fetcher'

export const movieApi = {
    getFilm: async () => {
        const { data } = await fetcher.get('/QuanLyPhim/LayDanhSachPhim', {
            params: {
                maNhom: 'GP13',
            }
        });
        return data.content;
    },
    getFilmByName: async (tenPhim) => {
        const { data } = await fetcher.get('/QuanLyPhim/LayDanhSachPhim', {
            params: {
                maNhom: 'GP13',
                tenPhim: tenPhim
            }
        });
        return data.content;
    },
    getFilmDetails: async (movieId) => {
        const { data } = await fetcher.get('/QuanLyPhim/LayThongTinPhim', {
            params : {
                maPhim : movieId,
            }
        });
        return data.content;
    },
    getCumRap : async () => {
        const { data } = await fetcher.get('/QuanLyRap/LayThongTinHeThongRap');
        return data.content;
    },
    getRap : async (maCumRap) => {
        const { data } = await fetcher.get('/QuanLyRap/LayThongTinCumRapTheoHeThong', {
            params : {
                maHeThongRap: maCumRap,
            }
        }); 
        return data.content;
    },
    getLichChieuCuaPhim : async (maPhim) => {
        const { data } = await fetcher.get('/QuanLyRap/LayThongTinLichChieuPhim', {
            params: {
                maPhim: maPhim,
            }
        });
        return data.content;
    },
    getHeThongRapChieu : async (maHeThongRap) => {
        const { data } = await fetcher.get('/QuanLyRap/LayThongTinLichChieuHeThongRap', {
            params : {
                maHeThongRap : maHeThongRap,
            }
        });
        return data.content;
    },
    getLichChieuCumRap : async (maHeThongRap) => {
        const { data } = await fetcher.get('/QuanLyRap/LayThongTinLichChieuHeThongRap', {
            params : {
                maHeThongRap : maHeThongRap,
            }
        });
        return data.content;
    },
    getDanhSachPhongVe: async (MaLichChieu) => {
        const { data } = await fetcher.get('/QuanLyDatVe/LayDanhSachPhongVe', {
            params : {
                MaLichChieu: MaLichChieu,
            }
        });
        return data.content;
    }
}