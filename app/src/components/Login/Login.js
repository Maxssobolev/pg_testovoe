import { useState } from "react";
import { Alert, Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "../Forms/LoginForm/LoginForm";
import { handleLogout as userLogout } from "../../redux/reducers/user";

export default function Login() {
    const [showModal, setShowModal] = useState(false);
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    const handleCloseModal = () => setShowModal(false)
    const handleShowModal = () => setShowModal(true)

    const handleLogout = () => {
        dispatch(userLogout())
    }

    return (
        <>
            {user.isLogged ?
                <Button variant='secondary' className="button" onClick={handleLogout}>Выйти</Button>
                :
                <Button variant='primary' className="button" onClick={handleShowModal}>Войти</Button>
            }


            <Modal show={showModal} onHide={handleCloseModal} size="sm">
                <Modal.Header closeButton>
                    <Modal.Title>Авторизация</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {user.error && !user.isLoading &&
                        <div className="error-wrapper">
                            <Alert variant="danger">{user.error}</Alert>
                        </div>
                    }
                    <LoginForm closeModal={handleCloseModal} />
                </Modal.Body>


            </Modal>
        </>
    )
}