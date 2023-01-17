import React, { useState } from 'react';
import ContentPromocode from "../components/promocode";
import MenuProfile from "../components/menuprofile";
import Navbar from "../components/navbar";
import { PlusOutlined } from '@ant-design/icons';
import {
    Modal, Upload, Button,
    Form, Input, InputNumber,
    Row, Col, Space
} from 'antd';
const getBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};
const SettingProfile = () => {
    const onFinish = (values) => {
        console.log(values);
    };
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [fileList, setFileList] = useState([
        // {
        //     uid: '-1',
        //     name: 'image.png',
        //     status: 'done',
        //     url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        // },
    ]);
    const handleCancel = () => setPreviewOpen(false);
    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewOpen(true);
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
    };
    const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
    const uploadButton = (
        <div>
            <PlusOutlined />
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </div>
    );
    const [passwordVisible, setPasswordVisible] = React.useState(false);
    return (
        <div className="container">
            <Navbar />
            <div className="section_settingProfile  container ">
                <ContentPromocode />
                <MenuProfile props={4} />
                <div className="section_form"
                    style={{ width: "50%", padding: "20px" }}>
                    <Upload
                        className='photo_profile'
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList}
                        onPreview={handlePreview}
                        onChange={handleChange}
                    >
                        {fileList.length >= 2 ? null : uploadButton}
                    </Upload>
                    <Modal open={previewOpen}
                        title={previewTitle}
                        footer={null}
                        onCancel={handleCancel}>
                        <img
                            alt="example"
                            style={{
                                width: '100%',
                            }}
                            src={previewImage}
                        />
                    </Modal>
                    <div className="personal_data">
                        <h5>Личная информация</h5>
                        <Form {...layout}
                            name="nest-messages"
                            onFinish={onFinish}
                        >
                            <b className='item_txt_change_pass d-block text-start'>Мое имя</b>
                            <Form.Item
                                name={['user', 'name']}
                                validateMessages={validateMessages}
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <b className='item_txt_change_pass d-block text-start'>Email</b>
                            <Form.Item
                                name={['user', 'email']}
                                rules={[
                                    {
                                        type: 'email',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <b className='item_txt_change_pass d-block text-start'>Обо мне</b>
                            <Form.Item
                                name={['user', 'introduction']}>
                                <Input.TextArea />
                            </Form.Item>
                            <b className='item_txt_change_pass d-block text-start'>Номер телефона</b>
                            <Form.Item>
                                <Row gutter={12}>
                                    <Col span={10}>
                                        <Input
                                            label="Обо мне"
                                            defaultValue="0771/0701/0551" />
                                    </Col>
                                    <Col span={14}>
                                        <Input defaultValue="000000" />
                                    </Col>
                                </Row>
                                <Button
                                    className='save_profile mt-3'
                                    type="primary"
                                    style={{ width: "100%", backgroundColor: "#22ca46", border: "none" }}
                                    htmlType="submit">Сохранить
                                </Button>
                            </Form.Item>
                            <div className="change_password d-block">
                                <h5 className='d-flex'>Изменение пароля</h5>
                                <b className='item_txt_change_pass d-block text-start'>Текущий пароль</b>
                                <Form.Item
                                    className='d-block'
                                    direction="horizontal"
                                >
                                    <Input.Password
                                        placeholder="Текущий пароль"
                                        visibilityToggle={{
                                            visible: passwordVisible,
                                            onVisibleChange: setPasswordVisible,
                                        }}
                                    />
                                </Form.Item>
                                <br />
                                <b className='item_txt_change_pass d-block text-start'>Новый пароль</b>
                                <Form.Item>
                                    <Space direction="horizontal"
                                        className='d-block'>
                                        <Input.Password
                                            placeholder="Новый пароль"
                                            visibilityToggle={{
                                                visible: passwordVisible,
                                                onVisibleChange: setPasswordVisible,
                                            }}
                                        />
                                    </Space>
                                    <br />
                                    <b className='item_txt_change_pass d-block text-start'>Потвердите пароль</b>
                                    <Space
                                        className='d-block'
                                        direction="horizontal" >
                                        <Input.Password
                                            placeholder="Потвердите пароль"
                                            visibilityToggle={{
                                                visible: passwordVisible,
                                                onVisibleChange: setPasswordVisible,
                                            }}
                                        />
                                    </Space>
                                    <Button className='save_profile mt-3'
                                        type="primary"
                                        style={{ width: "100%", backgroundColor: "#22ca46", border: "none" }}
                                        htmlType="submit">Сохранить
                                    </Button>
                                    <br />
                                    <Button
                                        className="delete_profile mt-3 "
                                        style={{ width: "100%", backgroundColor: "gray", border: "none" }}
                                        type="primary"
                                        htmlType="submit">
                                        Удалить профиль
                                    </Button>
                                </Form.Item>
                            </div>
                        </Form >
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SettingProfile;