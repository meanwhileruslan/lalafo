<div className="modal_link_reg">
    <a href='#' className='modal_header_name'>Регистрация</a>
    <div className="content_login">
        <Input placeholder="Введите email или телефон" onChange={(e) => { setlogIn(e.target.value) }}
            prefix={<UserOutlined className="site-form-item-icon" />}
            suffix={
                <Tooltip title="Extra information">
                    <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                </Tooltip>
            }
        />
        <Space
            direction="vertical"
            className='d-flex'>
            <Input.Password onChange={(e) => { setPassword(e.target.value) }} placeholder="Пароль" iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />
        </Space>
        <Button type='submit' onClick={signIn}>Вход</Button>
    </div>
</div>