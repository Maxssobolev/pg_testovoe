import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNews } from '../redux/reducers/news';
import Search from '../components/Search/Search';
import AddNews from '../components/AddNews/AddNews';
import ShowNews from '../components/ShowNews/ShowNews';
import ModerateNews from '../components/ModerateNews/ModerateNews';

export default function PageNews() {
    const dispatch = useDispatch()
    const news = useSelector(state => state.news)
    const user = useSelector(state => state.user)
    const [dataToShow, setDataToShow] = useState(news.data)


    //SEARCH
    const update = ({ data }) => setDataToShow(data)

    useEffect(() => {
        //"загружаем" новости 
        dispatch(getNews()).then(({ payload }) => setDataToShow(payload))
    }, [dispatch])

    useEffect(() => {
        //ожидаем изменения стейта с новостями
        setDataToShow(news.data)
    }, [news.data])

    return (
        <div className="page page-news">
            <Search
                data={[...news.data]}
                update={update}
                searchField='title'
            />
            {user.isLogged && user.userData.role == 'admin' && <ModerateNews news={news} />}
            {user.isLogged && <AddNews />}
            <div className="page-news__cards-wrapper">
                <ShowNews news={{ data: dataToShow, isLoading: news.isLoading }} />
            </div>

        </div>
    );
}


