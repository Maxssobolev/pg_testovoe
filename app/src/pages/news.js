import moment from 'moment'
import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getNews } from '../redux/reducers/news';
import Search from '../components/Search/Search';

export default function PageNews() {
    const dispatch = useDispatch()
    const news = useSelector(state => state.news)
    const [dataToShow, setDataToShow] = useState(news.data)


    //SEARCH
    const update = ({ data }) => setDataToShow(data)

    useEffect(() => {
        dispatch(getNews()).then(({ payload }) => { })
    }, [dispatch])

    if (news.isLoading) {
        return (
            <div className="page page-news">
                <div className="nothing-to-show">Загрузка…</div>
            </div>
        )
    }
    else if (news.data.length == 0) {
        return (
            <div className="page page-news">
                <div className="nothing-to-show"> Записей пока еще нет</div>
            </div>
        )
    }
    return (
        <div className="page page-news">
            <Search
                data={[...news.data]}
                update={update}
                searchField='title'
            />
            
            <div className="page-news__cards-wrapper">
                {
                    dataToShow.map((item, index) => {
                        const authorName = `${item.author.firstName} ${item.author.lastName}`
                        const publishDate = moment(item.createdAt).format("DD.MM.yyyy в HH:mm")
                        return (
                            <Card key={`news-${index}`}>
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{authorName}, {publishDate}</Card.Subtitle>
                                    <Card.Text>
                                        {item.content}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        )
                    })

                }
            </div>

        </div>
    );
}


