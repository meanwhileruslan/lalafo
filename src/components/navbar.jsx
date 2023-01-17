
import { useEffect, useState } from 'react';
// import {
//     FacebookOutlined, GoogleOutlined, InfoCircleOutlined,
//     UserOutlined, EyeInvisibleOutlined, EyeTwoTone, UnorderedListOutlined, SmileOutlined
// } from '@ant-design/icons';
import { Modal, Input, Tooltip, Space, Menu, Dropdown, Button, Checkbox, Form, message, } from 'antd';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import {
    LockOutlined, UserOutlined, UnorderedListOutlined
} from '@ant-design/icons';
import { users } from '../screens/api';


const Navbar = () => {
    const onFinish = (values) => {
        console.log('Сохранено:', values);
    }

    // Детали для входа и регистрации
    const [messageApi, contextHolder] = message.useMessage();
    const [logged, setLogged] = useState(false);
    const [userDetails, setUserDetails] = useState();
    const [hello, setHello] = useState();
    const success = (name) => {
        messageApi.open({
            type: 'success',
            content: ' Привет '+ name

        });
        
    };
    const error = () => {
        messageApi.open({
            type: 'error',
            content: 'Неправильный логин или пароль ',
        });

    };
    // Детали прашивание разрешения для выхода
    const [open, setOpen] = useState(false);
    const showModalLogOut = () => {
        setOpen(true)
    };
    const handleCancel = () => {
        setOpen(false);
    };

    // Функwия для удаление токена
    const Logged = () => {
        const token = localStorage.getItem('token');
        const userDetail = users.filter(item => item.token == token);
        setUserDetails(userDetail);
        if (token == null) {
            setLogged(false);
        } else {
            setLogged(true);
        }
    }
    const [login, setlogIn] = useState();
    const [password, setPassword] = useState();

    // Функция для входа
    const signIn = () => {
        const user = users;
        const result = users.filter(item => item.login == login && item.password == password);
        if (result.length > 0) {
            localStorage.setItem('token', result[0].token);
            success(result[0].user_name);
            setIsModalOpenRegistration(false);
            Logged();
        } else {
            error();
        }
    }
    const LogOut = () => {
        showModalLogOut(true);
    }
    const LogOutYes = () => {
        localStorage.removeItem('token');
        Logged(
            setOpen(false)
        );
    }
    const [isModalOpenRegistration, setIsModalOpenRegistration] = useState(false);

    const showModalRegistration = () => {
        setIsModalOpenRegistration(true);
    };

    const handleOkRegistration = () => {
        setIsModalOpenRegistration(false);
    };

    const handleCancelRegistration = () => {
        setIsModalOpenRegistration(false);
    };
    const menuDropdown = (
        <Menu
            items={[
                {
                    key: '1',
                    label: (
                        <a target="_blank" rel="noopener noreferrer" href="#">
                            Пользовательское соглашение
                        </a>
                    ),
                },
                {
                    key: '2',
                    label: (
                        <a target="_blank" rel="noopener noreferrer" href="#">
                            Конфиденциальность
                        </a>
                    ),
                },
                {
                    key: '3',
                    label: (
                        <a target="_blank" rel="noopener noreferrer" href="#">
                            Договор-оферта
                        </a>
                    ),
                },
                {
                    key: '4',
                    label: (
                        <a target="_blank" rel="noopener noreferrer" href="#">
                            Продавай и покупай безопасно
                        </a>
                    ),
                },
                {
                    key: '5',
                    label: (
                        <a target="_blank" rel="noopener noreferrer" href="#">
                            Платные услуги
                        </a>
                    ),
                },
                {
                    key: '6',
                    label: (
                        <a target="_blank" rel="noopener noreferrer" href="#">
                            Как продавать
                        </a>
                    ),
                },
                {
                    key: '7',
                    label: (
                        <a target="_blank" rel="noopener noreferrer" href="#">
                            Контакты
                        </a>
                    ),
                },
                {
                    key: '8',
                    label: (
                        <a target="_blank" rel="noopener noreferrer" href="#">
                            Карта сайта
                        </a>
                    ),
                },
                {
                    key: '9',
                    label: (
                        <a target="_blank" rel="noopener noreferrer" href="#">
                            Реклама
                        </a>
                    ),
                },
                {
                    key: '10',
                    label: (
                        <a target="_blank" rel="noopener noreferrer" href="#">
                            Условия акции
                        </a>
                    ),
                },
            ]}
        />
    );
    useEffect(() => {
        Logged();
    }, [])
    return (

        <div>
            {contextHolder}
            <nav className="navbar navbar-expand-lg bg-white align">
                <div className="content_navbar">
                    <a className="navbar-brand" href="/">
                        <img src="https://jolbors.com/media/partners/60/5d8b1588bb573.png" alt="Bootstrap"
                            width="100" height="35" />
                    </a>
                    <Dropdown overlay={menuDropdown} placement="bottomCenter">
                        <a onClick={(e) => e.preventDefault()}>
                            <Space wrap>
                                <UnorderedListOutlined />
                            </Space>
                        </a>
                    </Dropdown>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active"
                                    aria-current="page"
                                    href="https://lalafo.kg/info/paid-posting">Для бизнеса</a>
                            </li>
                            <li className="nav-item align-items-center">
                                <a className="nav-link align-items-center d-flex"
                                    href="#">
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link bi bi-heart-fill"
                                    href="/favorites">
                                </a>
                            </li>
                            &nbsp;&nbsp;
                            {
                                logged ?
                                    <li className="nav-item dropdown" href="https://yandex.ru/images/search?text=avatar%20profile%20picture&from=tabbar&p=1&pos=57&rpt=simage&img_url=http%3A%2F%2Fmiro.medium.com%2Fmax%2F2400%2F1*IvsxC7QTAk06QmXYNBcd3A.jpeg&lr=10310">
                                        <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <img src={userDetails != null ? userDetails[0].avatar : <></>}
                                                style={{ width: 30 }} alt="" />
                                            {userDetails != null ? userDetails[0].user_name : <></>}
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li><a className="dropdown-item" href="/myads">Мои объявления</a></li>
                                            <li><a className="dropdown-item" href="/message">Сообщения</a></li>
                                            <li><a className="dropdown-item" href="/wallet">Кошелек</a></li>
                                            <li><a className="dropdown-item" href="/settingprofile">Настройки</a></li>
                                            <li><a className="dropdown-item" href="/effect">Эффективность</a></li>
                                            <li><a className="dropdown-item-exit" onClick={LogOut} href="#">Выход</a></li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li>
                                                <a className="dropdown-item"
                                                    href="#"
                                                    style={{ backgroundColor: '#adf3bc' }}>
                                                    <button
                                                        className='btn'
                                                        style={{ backgroundColor: '#22ca46', borderRadius: 10 }}>
                                                        Улучшить профиль
                                                    </button>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    :
                                    <a className="nav-link link_reg" onClick={showModalRegistration}> Войти | Регистрация</a>
                            }

                            &nbsp;&nbsp;

                            <Modal open={isModalOpenRegistration} onOk={handleOkRegistration} onCancel={handleCancelRegistration}>
                                {/* Код */}
                                <Form
                                    name="normal_login"
                                    className="login-form"
                                    initialValues={{
                                        remember: true,
                                    }}
                                    onFinish={onFinish}
                                >
                                    <Form.Item className='justify-content-center d-flex'>
                                        <Button type="primary" className="login-form-button-top">
                                            Войти
                                        </Button>

                                        <Button type="primary" className="registration-form-button-top">
                                            Зарегистрироваться
                                        </Button>
                                    </Form.Item>
                                    <Form.Item
                                        name="username"
                                        onChange={(e) => { setlogIn(e.target.value) }}
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Поле не может быть пустым',
                                            },
                                        ]}
                                    >
                                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Введите email или телефон" />
                                    </Form.Item>
                                    <Form.Item
                                        name="password"
                                        onChange={(e) => { setPassword(e.target.value) }}
                                        rules={[
                                            {
                                                required: true,
                                                message: 'А пароль? :(',
                                            },
                                        ]}
                                    >
                                        <Input
                                            prefix={<LockOutlined
                                                className="site-form-item-icon" />
                                            }
                                            type="password"
                                            placeholder="Ваш пароль"
                                        />
                                    </Form.Item>
                                    <Form.Item>
                                        <Form.Item
                                            name="remember"
                                            valuePropName="checked"
                                            noStyle>
                                            <Checkbox>Запомнить меня</Checkbox>
                                        </Form.Item>

                                        <a className="login-form-forgot"
                                            href="">
                                            Забыли пароль?
                                        </a>
                                    </Form.Item>

                                    <Button onClick={signIn}
                                        type="primary"
                                        htmlType="submit"
                                        className="login-form-button-enter">
                                        Войти
                                    </Button>
                                </Form>

                            </Modal>


                            <Modal
                                className='ant-modal-body-logOut'
                                open={open}
                                onCancel={handleCancel}
                            >
                                <div className="modal_exit">
                                    <h4 className="modal_exit_item_title">Выйти из профиля?</h4>
                                    <div className="buttons_exit d-flex">
                                        <Button onClick={LogOutYes} type="primary" htmlType="submit" className="buttons_exit_yes">
                                            Да
                                        </Button>
                                        <Button onClick={handleCancel} type="primary" htmlType="submit" className="buttons_exit_no">
                                            Нет
                                        </Button>
                                    </div>
                                </div>

                            </Modal>
                            <a className="btn"
                                href="/addpost" role="button"
                                style={{ backgroundColor: '#ff2366', borderRadius: 10, color: '#ffff', fontWeight: 'bold' }}
                            >Подать объявления</a>
                        </ul>
                    </div>
                </div>
            </nav >
        </div >
    )
}

export default Navbar;