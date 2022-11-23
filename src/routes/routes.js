import { lazy } from 'react';
import {createBrowserRouter} from 'react-router-dom';

import RootLayout from '../components/RootLayout';
import PageNotFound from '../components/PageNotFound'
import UseProtected from '../components/UseProtected';

const MainPage = lazy(() => import('../modules/MainPage'));

const LichChieu = lazy(() => import('../modules/LichChieu'));
const TheaterList = lazy(() => import('../modules/TheaterList'));
const News = lazy(() => import('../modules/News'));
const Application = lazy(() => import('../modules/MainPage/Application'));

const BuyTicket = lazy(() => import('../modules/BuyTicket'));
const TheaterItem = lazy(() => import('../modules/TheaterList/TheaterItem'));
const Phim = lazy(() => import('../modules/Phim'));

const FormLogin = lazy(() => import('../modules/FormLogin'));
const SignIn = lazy(() => import('../modules/FormLogin/SignIn'));
const SignUp = lazy(() => import('../modules/FormLogin/SignUp'));
const TaiKhoan = lazy(() => import('../modules/TaiKhoan'));

const routes = createBrowserRouter([
    {
        path : '' , element: <RootLayout />,
        children: [
            {index: true, element : <MainPage />,},
            {path: 'muave/:maLichChieu', element : 
                <UseProtected>
                    <BuyTicket />
                </UseProtected> },
            {path: 'lichchieu', element : <LichChieu />},
            {path: 'phim/:maPhim', element : <Phim />},
            {path: 'rap', element : <TheaterList />},
            {path: 'rap/:cumRap', element : <TheaterItem />},
            {path: 'tintuc', element : <News />},
            {path: 'ungdung', element : <Application />},
            {path: 'taiKhoan', element : 
                <UseProtected>
                    <TaiKhoan />
                </UseProtected> },
            {path: 'signup', element: <FormLogin />,
            children: [
                {index : true, element: <SignUp />},
                {path: 'signin', element: <SignIn />}     
            ]},
        ]
    },
    {
        path: '*', element : <PageNotFound />
    }
])

export default routes;