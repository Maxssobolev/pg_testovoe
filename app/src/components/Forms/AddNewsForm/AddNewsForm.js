import { Field, Form, Formik } from 'formik'
import { Row, Col, Button } from 'react-bootstrap'
import { FieldTitle } from '../SpecialFields/FieldTitle'
import * as yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { addNews } from '../../../redux/reducers/news'
import Swal from 'sweetalert2'

const SignupSchema = yup.object().shape({
    title: yup.string().required('Обязательное поле'),
    content: yup.string().required('Обязательное поле'),
});

export default function AddNewsForm() {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    return (
        <Formik
            initialValues={{
                title: '',
                content: '',
            }}
            validationSchema={SignupSchema}
            validateOnMount={true}
            onSubmit={(values, { resetForm }) => {
                let sentData = {
                    ...values,
                    author: {
                        id: user.userData.id,
                        firstName: user.userData.firstName,
                        lastName: user.userData.lastName,
                    }
                }
                dispatch(addNews(sentData)).then(({ meta: { requestStatus } }) => {
                    console.log(requestStatus)
                    if (requestStatus === 'fulfilled') {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Запись отправлена на модерацию!',
                            showConfirmButton: true,

                        })
                    }
                })
                resetForm()
            }}
        >
            {
                ({ values, errors, isValid }) => (
                    <Form className='form form-addNews'>
                        <Row>
                            <Col>
                                <div className="field-wrapper">
                                    <FieldTitle name="title">Заголовок:</FieldTitle>
                                    <Field
                                        name="title"
                                        className="field"
                                    />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="field-wrapper ">
                                    <FieldTitle name="content">Содержание:</FieldTitle>
                                    <Field
                                        as="textarea"
                                        className="field field_textarea"
                                        name="content"
                                    />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button variant='primary' type='submit' disabled={!isValid}>Создать</Button>
                            </Col>
                        </Row>
                    </Form>
                )
            }
        </Formik>
    )
}