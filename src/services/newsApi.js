import {fetcherNews} from './fetcher'

export const newsApi = {
    getNews : async () => {
        const { data } = await fetcherNews.get('/News');
        return data;
    }
}