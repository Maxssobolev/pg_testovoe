import { Accordion, Card, Button } from "react-bootstrap";
import moment from "moment";
import { useDispatch } from 'react-redux'
import { approveNews, deleteNews } from "../../redux/reducers/news";

export default function ModerateNews({ news }) {
    const dispatch = useDispatch()
    const handleApprove = (id) => dispatch(approveNews(id))
    const handleDelete = (id) => dispatch(deleteNews(id))

    //показываем только одобренные записи
    const data = news.data.filter(({ status }) => status === 'moderation')
    return (
        <div className="moderateNews-wrapper">
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Администрирование новостей</Accordion.Header>
                    <Accordion.Body>
                        {data.map((itm, index) =>
                            <ModerateCard item={itm} key={`moderatedCard-${index}`} handleApprove={handleApprove} handleDelete={handleDelete} />
                        )}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

function ModerateCard({ item, handleApprove, handleDelete }) {
    const authorName = `${item.author.firstName} ${item.author.lastName}`
    const publishDate = moment(item.createdAt).format("DD.MM.yyyy в HH:mm")
    return (
        <Card border='primary'>
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{authorName}, {publishDate}</Card.Subtitle>
                <Card.Text>
                    {item.content}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Button type='button' variant='primary' onClick={() => handleApprove(item.id)}>Одобрить</Button>
                <Button type='button' variant='danger' onClick={() => handleDelete(item.id)}>Удалить</Button>
            </Card.Footer>
        </Card>
    )
}