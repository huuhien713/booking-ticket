import { fetcher } from "./fetcher";

export const authApi = {
    signIn : (user) => {
        return fetcher.post('/QuanLyNguoiDung/DangNhap', user);
    },
    signUp : (user) => {
        return fetcher.post('/QuanLyNguoiDung/DangKy', {...user, maNhom: 'GP01'});
    }
}