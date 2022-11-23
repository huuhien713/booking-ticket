import { fetcher } from "./fetcher";

export const BookTicket = {
    datVe: (danhSachVe) => {
        return fetcher.post('/QuanLyDatVe/DatVe', danhSachVe);
    },
    lichSuDatVe : () => {
        return fetcher.post('/QuanLyNguoiDung/ThongTinTaiKhoan');
    },
    updateUser : (newValues) => {
        return fetcher.put('/QuanLyNguoiDung/CapNhatThongTinNguoiDung', newValues)
    }
}