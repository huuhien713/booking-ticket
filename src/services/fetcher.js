import axios from 'axios';

export const fetcher = axios.create({
    baseURL: 'https://movienew.cybersoft.edu.vn/api',
    headers: { TokenCybersoft: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzMiIsIkhldEhhblN0cmluZyI6IjE1LzA0LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY4MTUxNjgwMDAwMCIsIm5iZiI6MTY1MzkzMDAwMCwiZXhwIjoxNjgxNjY0NDAwfQ.oR9K8iSTqbo-t0Q_a-WFnKePPaMAr7sdlgR5xKAtQWA' }
});

export const fetcherNews = axios.create({
    baseURL: 'https://636b78537f47ef51e1312cc5.mockapi.io',
})

fetcher.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

fetcher.interceptors.request.use(
    (config) => {
        // thêm authorization vào header config (nếu có)
        const { accessToken } = JSON.parse(localStorage.getItem('user')) || {};
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

