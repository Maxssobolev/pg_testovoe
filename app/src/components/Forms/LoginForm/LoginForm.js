import { Field, Form, Formik } from 'formik'
import { Row, Col, Button } from 'react-bootstrap'
import { FieldTitle } from '../SpecialFields/FieldTitle'
import PasswordShowHide from '../SpecialFields/PasswordShowHide'
import * as yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { handleLogin } from '../../../redux/reducers/user'


const SignupSchema = yup.object().shape({
    login: yup.string().required('Обязательное поле'),
    password: yup.string().required('Обязательное поле'),
});

export default function LoginForm({ closeModal }) {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    return (
        <Formik
            initialValues={{
                login: '',
                password: ''
            }}
            validationSchema={SignupSchema}
            validateOnMount={true}
            onSubmit={({ login, password }) => {
                dispatch(handleLogin([login, password])).then(({ meta: { requestStatus } }) => {
                    //                       'ok'
                    if (requestStatus == 'fulfilled') {
                        closeModal()
                    }
                })
            }}
        >
            {
                ({ values, errors, isValid }) => (
                    <Form className='form form-login'>
                        <Row>
                            <Col>
                                <div className="field-wrapper">
                                    <FieldTitle name="login">Логин:</FieldTitle>
                                    <Field
                                        name="login"
                                        className="field"
                                    />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="field-wrapper">
                                    <FieldTitle name="password">Пароль:</FieldTitle>
                                    <Field
                                        name="password"
                                        component={PasswordShowHide}
                                    />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button variant='primary' type='submit' disabled={!isValid}>{user.isLoading ? 'Загрузка…' : 'Войти'}</Button>
                            </Col>
                        </Row>
                    </Form>
                )
            }
        </Formik>
    )
}