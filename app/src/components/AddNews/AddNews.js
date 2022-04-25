import { Accordion } from "react-bootstrap";
import AddNewsForm from "../Forms/AddNewsForm/AddNewsForm";


export default function AddNews() {

    return (
        <div className="addNews-wrapper">
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Добавить запись</Accordion.Header>
                    <Accordion.Body>
                        <AddNewsForm />
                    </Accordion.Body>

                </Accordion.Item>
            </Accordion>
        </div>
    )
}