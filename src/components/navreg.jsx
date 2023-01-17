
import { Menu, Space, Dropdown, } from 'antd';
import { UnorderedListOutlined } from '@ant-design/icons';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";


const NavReg = () => {
    // if (localStorage.getItem('token') != null) {
    //     window.location.href = "/";
    // }
    // const [login, setlogIn] = useState();
    // const [password, setPassword] = useState();

    // const signIn = () => {
    //     if (login == "admin" && password == "0000") {
    //         localStorage.setItem('token', login);
    //         localStorage.setItem('login', login);
    //         window.location.href = "/";
    //     } else {
    //         alert("Error");
    //     }
    // }
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
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container justify-content-center">
                    <a class="navbar-brand" href="/main">
                        <img src="https://jolbors.com/media/partners/60/5d8b1588bb573.png" alt="Bootstrap" width="100" height="35" />
                    </a>
                    <Dropdown overlay={menuDropdown} placement="bottomCenter">
                        <a onClick={(e) => e.preventDefault()}>
                            <Space wrap>
                                <UnorderedListOutlined />
                            </Space>

                        </a>
                    </Dropdown>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Для бизнеса</a>
                            </li>
                            <li class="nav-item align-items-center">
                                <a
                                    class="nav-link bi bi-wallet-fill"
                                    href="">

                                    &nbsp;Кошелек</a>
                            </li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                            <li class="nav-item align-items-center">
                                <a class="nav-link align-items-center d-flex"
                                    href="#"></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link bi bi-heart-fill" href="#"></a>
                            </li>&nbsp;&nbsp;
                            <li class="nav-item">
                                <a class="nav-link bi bi-envelope-fill" href="#"></a>
                            </li>&nbsp;&nbsp;
                            <li class="nav-item dropdown" href="https://yandex.ru/images/search?text=avatar%20profile%20picture&from=tabbar&p=1&pos=57&rpt=simage&img_url=http%3A%2F%2Fmiro.medium.com%2Fmax%2F2400%2F1*IvsxC7QTAk06QmXYNBcd3A.jpeg&lr=10310">
                                <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src="https://miro.medium.com/max/2400/1*IvsxC7QTAk06QmXYNBcd3A.jpeg" style={{ width: 30 }} alt="" /> R.Abibillaev
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Мои объявления</a></li>
                                    <li><a class="dropdown-item" href="#">Сообщения</a></li>
                                    <li><a class="dropdown-item" href="#">Кошелек</a></li>
                                    <li><a class="dropdown-item" href="#">Настройки</a></li>
                                    <li><a class="dropdown-item" href="#">Эффективность</a></li>
                                    <li><a class="dropdown-item" href="#">Выход</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li>
                                        <a class="dropdown-item"
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

                            </li>&nbsp;&nbsp;
                            <button
                                className='btn'
                                style={{ backgroundColor: '#ff2366', borderRadius: 10, color: '#ffff', fontWeight: 'bold' }}>
                                Подать объявления
                            </button>



                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default NavReg;