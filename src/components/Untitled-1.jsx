<div className="categories_item m-5"
                style={{ flexDirection: 'wrap', }}>
                {/* -------------------------- */}
                <div className="btn_item p-3">
                    <a className="btn_icon">
                        <Button overlay={menuTransport}
                            shape="circle"
                            icon={<i class="bi bi-grid-3x3-gap-fill" />}
                            size={size} />
                        <Dropdown
                            overlay={menuTransport}
                            placement="bottom" arrow>
                            <a className='btn_name d-block text-white'>Все</a>
                        </Dropdown>
                    </a>
                </div>
                {/* -------------------------- */}
                <div className="btn_item p-3">
                    <a className="btn_icon" href={"/viewcategories/" + 1}>
                        <Button overlay={menuTransport}
                            shape="circle"
                            icon={<i class="bi bi-car-front-fill" />}
                            size={size} />
                        <Dropdown
                            overlay={menuTransport}
                            placement="bottom" arrow>
                            <a className='btn_name d-block text-white'>Транспорт</a>
                        </Dropdown>
                    </a>
                </div>
                {/* -------------------------- */}
                <div className="btn_item p-3">
                    <a className="btn_icon" href={"/viewcategories/" + 2}>
                        <Button
                            shape="circle"
                            icon={<i class="bi bi-house-heart" />}
                            size={size} />
                        <Dropdown
                            shape="circle"
                            overlay={menuRealty}
                            placement="bottom" arrow>
                            <a className='btn_name d-block text-white'>Недвижимость</a>
                        </Dropdown>
                    </a>
                </div>
                {/* -------------------------- */}
                <div className="btn_item p-3">
                    <a className="btn_icon" href={"/viewcategories/" + 3}>
                        <Button overlay={menuElectronics}
                            shape="circle"
                            icon={<i class="bi bi-plug-fill" />}
                            size={size} />
                        <Dropdown
                            overlay={menuElectronics}
                            placement="bottom" arrow>
                            <a className='btn_name d-block text-white'>Электроника</a>
                        </Dropdown>
                    </a>
                </div>
                {/* -------------------------- */}
                <div className="btn_item p-3">
                    <a className="btn_icon">
                        <Button overlay={menuHomeAndGarden}
                            shape="circle"
                            icon={<i class="fa fa-bath" aria-hidden="true"></i>}
                            size={size} />
                        <Dropdown
                            overlay={menuHomeAndGarden}
                            placement="bottom" arrow>
                            <a className='btn_name d-block text-white'>Дом и сад</a>
                        </Dropdown>
                    </a>
                </div>
                {/* -------------------------- */}
                <div className="btn_item p-3">
                    <a className="btn_icon">
                        <Button overlay={menuService}
                            shape="circle"
                            icon={<i class="bi bi-wrench-adjustable"></i>}
                            size={size} />
                        <Dropdown
                            overlay={menuService}
                            placement="bottom" arrow>
                            <a className='btn_name d-block text-white'>Услуги</a>
                        </Dropdown>
                    </a>
                </div>
                {/* -------------------------- */}
                <div className="btn_item p-3">
                    <a className="btn_icon">
                        <Button overlay={menuWorks}
                            shape="circle"
                            icon={<i class="bi bi-briefcase-fill" />}
                            size={size} />
                        <Dropdown
                            overlay={menuWorks}
                            placement="bottom" arrow>
                            <a className='btn_name d-block text-white'>Работа</a>
                        </Dropdown>
                    </a>
                </div>
                {/* -------------------------- */}
                <div className="btn_item p-3">
                    <a className="btn_icon">
                        <Button overlay={menuForBusiness}
                            shape="circle"
                            icon={<i class="bi bi-calculator" />}
                            size={size} />
                        <Dropdown
                            overlay={menuForBusiness}
                            placement="bottom" arrow>
                            <a className='btn_name d-block text-white'>Оборудование для бизнеса</a>
                        </Dropdown>
                    </a>
                </div>
                {/* -------------------------- */}
                <div className="btn_item p-3">
                    <a className="btn_icon">
                        <Button
                            shape="circle"
                            icon={<i class="bi bi-currency-exchange" />}
                            size={size}
                            Бизнес-профили />
                        <Dropdown
                            overlay="none"
                            placement="bottom" arrow>
                            <a className='btn_name d-block text-white'>Бизнес-профили</a>
                        </Dropdown>
                    </a>
                </div>

                {resultCategoryMenu.map((item) => { item.title }
                )

                }
                {/* -------------------------- */}
            </div>

const menuTransport = (
    <Menu
        subCategories={[
            {
                key: '1',
                label: (
                    <a className='sub_menu_link' target="_blank" rel="noopener noreferrer"
                        href={"/viewcategories/" + 1}>
                        Автомобили
                    </a>
                ),
            },
            {
                key: '2',
                label: (
                    <a className='sub_menu_link' target="_blank" rel="noopener noreferrer" href={"/viewcategories/" + 11}>
                        Автозапчасти
                    </a>
                ),
            },
            {
                key: '3',
                label: (
                    <a className='sub_menu_link' target="_blank" rel="noopener noreferrer" href={"/viewcategories/" + 12}>
                        Аксессуары, шины и тюнинг
                    </a>
                ),
            },
            {
                key: '5',
                label: (
                    <a className='sub_menu_link' target="_blank" rel="noopener noreferrer" href={"/viewcategories/" + 13}>
                        Грузовой и с/х транспорт
                    </a>
                ),
            },
            {
                key: '6',
                label: (
                    <a className='sub_menu_link' target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                        Мотоциклы и мопеды
                    </a>
                ),
            },
            {
                key: '7',
                label: (
                    <a className='sub_menu_link' target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                        Водный транспорт
                    </a>
                ),
            },
            {
                key: '8',
                label: (
                    <a className='sub_menu_link' target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                        Другой транспорт
                    </a>
                ),
            },
        ]}
    />
);

const menuRealty = (
    <Menu
        items={[
            {
                key: '1',
                label: (
                    <a className='sub_menu_link' target="_blank" rel="noopener noreferrer" href={"/viewcategories/" + 21}>
                        Квартиры
                    </a>
                ),
            },
            {
                key: '2',
                label: (
                    <a className='sub_menu_link' target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                        Дома
                    </a>
                ),
            },
            {
                key: '3',
                label: (
                    <a className='sub_menu_link' target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                        Земельные участки
                    </a>
                ),
            },
            {
                key: '5',
                label: (
                    <a className='sub_menu_link' target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                        Каммерческая недвижимость
                    </a>
                ),
            },
            {
                key: '6',
                label: (
                    <a className='sub_menu_link' target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                        Комнаты
                    </a>
                ),
            },
            {
                key: '7',
                label: (
                    <a className='sub_menu_link' target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                        Гаражи
                    </a>
                ),
            },
        ]}
    />
);

const menuElectronics = (
    <Menu
        items={[
            {
                key: '1',
                label: (
                    <a className='sub_menu_link' target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                        Мобильные телефоны и аксессуары
                    </a>
                ),
            },
            {
                key: '2',
                label: (
                    <a className='sub_menu_link' target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                        Компьютеры, ноутбуки и планшеты
                    </a>
                ),
            },
            {
                key: '3',
                label: (
                    <a className='sub_menu_link' target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                        Бытовая техника
                    </a>
                ),
            },
            {
                key: '5',
                label: (
                    <a className='sub_menu_link' target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                        Техника для кухни
                    </a>
                ),
            },
            {
                key: '6',
                label: (
                    <a className='sub_menu_link' target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                        Видеоигры и приставки
                    </a>
                ),
            },
        ]}
    />
);

const menuHomeAndGarden = (
    <Menu
        items={[
            {
                key: '1',
                label: (
                    <a className='sub_menu_link' target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                        Мебель
                    </a>
                ),
            },
            {
                key: '2',
                label: (
                    <a className='sub_menu_link' target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                        Ремонт и строительство
                    </a>
                ),
            },
            {
                key: '3',
                label: (
                    <a className='sub_menu_link' target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                        Продукты питания
                    </a>
                ),
            },
            {
                key: '5',
                label: (
                    <a className='sub_menu_link' target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                        Декор для дома
                    </a>
                ),
            },
            {
                key: '6',
                label: (
                    <a className='sub_menu_link' target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                        Кухонные принадлежности
                    </a>
                ),
            },
        ]}
    />
);

const menuService = (
    <Menu
        items={[
            {
                key: '1',
                label: (
                    <a className='sub_menu_link' target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                        Строительство и ремонт
                    </a>
                ),
            },
            {
                key: '2',
                label: (
                    <a className='sub_menu_link' target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                        Красота и здоровье
                    </a>
                ),
            },
            {
                key: '3',
                label: (
                    <a className='sub_menu_link' target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                        Ремонт техники
                    </a>
                ),
            },
            {
                key: '5',
                label: (
                    <a className='sub_menu_link' target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                        Мебельные услуги
                    </a>
                ),
            },
            {
                key: '6',
                label: (
                    <a className='sub_menu_link' target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                        Обучение, курсы
                    </a>
                ),
            },
        ]}
    />
);

const menuWorks = (
    <Menu
        items={[
            {
                key: '1',
                label: (
                    <a className='sub_menu_link' target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                        Поиск сотрудников (вакансии)
                    </a>
                ),
            },
            {
                key: '2',
                label: (
                    <a className='sub_menu_link' target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                        Ищу работу (резюме)
                    </a>
                ),
            },
        ]}
    />
);

const menuForBusiness = (
    <Menu
        items={[
            {
                key: '1',
                label: (
                    <a className='sub_menu_link' target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                        Торговое оборудование
                    </a>
                ),
            },
            {
                key: '55',
                label: (
                    <a className='sub_menu_link' target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                        Для кафе, ресторанов
                    </a>
                ),
            },
            {
                key: '45',
                label: (
                    <a className='sub_menu_link' target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                        Холодильное оборудование
                    </a>
                ),
            },
            {
                key: '78',
                label: (
                    <a className='sub_menu_link' target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                        Оборудование для производства
                    </a>
                ),
            },
        ]}
    />
);