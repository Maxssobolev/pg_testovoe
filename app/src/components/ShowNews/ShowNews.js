import { Card } from 'react-bootstrap';
import moment from 'moment'


export default function ShowNews({ news }) {

    const isLoading = news.isLoading
    const isEmpty = news.data.length == 0

    if (isLoading) {
        return <div className="nothing-to-show">Загрузка…</div>
    }
    else if (isEmpty) {
        return <div className="nothing-to-show">Записи отстуствуют</div>
    }

    //показываем только одобренные записи
    const data = news.data.filter(({ status }) => status === 'opened')
    return (

        data.map((item, index) => {
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
    )
}