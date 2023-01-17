
import ImgCrop from 'antd-img-crop';
import React, { useState } from 'react';
import Categories from '../components/categories';
import { categoryMenu, regions } from './api';
import Navbar from '../components/navbar';
import {
    Upload, Input, Button, Modal, Select,
    Tooltip, Checkbox, Col, Row, Radio, Dropdown, Space,
    TreeSelect,
    Skeleton,
} from 'antd';
import { useEffect } from 'react';

const { TreeNode } = TreeSelect;



const { TextArea } = Input;
const onChange = (e) => {
    console.log('Change:', e.target.value);
};
const { Option, OptGroup } = Select;
const handleChange = (value) => {
    console.log(`selected ${value}`);
};
let timeout;
let currentValue;

const formatNumber = (value) => new Intl.NumberFormat().format(value);

const NumericInput = (props) => {
    const { value, onChange } = props;

    const handleChange = (e) => {
        const { value: inputValue } = e.target;
        const reg = /^-?\d*(\.\d*)?$/;

        if (reg.test(inputValue) || inputValue === '' || inputValue === '-') {
            onChange(inputValue);
        }
    }; // '.' at the end or only '-' in the input box.

    const handleBlur = () => {
        let valueTemp = value;

        if (value.charAt(value.length - 1) === '.' || value === '-') {
            valueTemp = value.slice(0, -1);
        }

        onChange(valueTemp.replace(/0*(\d+)/, '$1'));
    };

    const title = value ? (
        <span className="numeric-input-title">{value !== '-' ? formatNumber(Number(value)) : '-'}</span>
    )
        :
        (
            'Введите цену'
        );
    return (
        <Tooltip trigger={['focus']} title={title} placement="topLeft" overlayClassName="numeric-input">
            <Input
                {...props}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Договорная"
                maxLength={25}
            />
        </Tooltip>
    );
};

// Чек-вальюта

const onChangeDisNumber = (e) => {
    console.log(`checked = ${e.target.checked}`);
};


const AddPost = () => {
    // Для выбрать категории
    const [selectedCategory, setSelectedCategory] = useState();
    const [category, setCategory] = useState(null);

    // Для выбрать города
    const [selectedRegion, setSelectedRegion] = useState();
    const [region, setRegion] = useState(null);
    console.log("region", region);
    // Модаль
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    // Конец модаль



    // загружать фото
    const [fileList, setFileList] = useState([

    ]);

    const onChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };

    const onPreview = async (file) => {
        let src = file.url;

        if (!src) {
            src = await new Promise((resolve) => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);

                reader.onload = () => resolve(reader.result);
            });
        }

        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow?.document.write(image.outerHTML);
    };
    const [value, setValue] = useState('');
    // Конец загружать фото


    // Категории

    const [valueCategory, setValueCategory] = useState(undefined);
    const onChangeCategory = (newValue) => {
        setValue(newValue);
    };

    const [valueRadio, setValueRadio] = useState(1);

    const onChangeRadio = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };
    const fetchCategories = () => {
        const _categories = categoryMenu.filter(i => i.parent_id == null);
        setCategory(_categories);
        console.log(_categories);
    }

    const categoryTree = (id) => {
        const categoryChilds = categoryMenu.filter(i => i.parent_id == id);
        if (categoryChilds.length > 0) {
            return categoryChilds.map((item) => (<TreeNode value={item.id} title={item.title}>{categoryTree(item.id)}</TreeNode>));
        } else {
            return false;
        }
    };




    useEffect(() => {
        fetchCategories();
        fetchRegion();
    }, []);


    const fetchRegion = () => {
        const _region = regions.filter(item => item.parent_id == null);
        setRegion(_region);
    };
    const regionTree = (id) => {
        const regionChilds = regions.filter(i => i.parent_id == id);
        if (regionChilds.length > 0) {
            return regionChilds.map((item) => (<TreeNode value={item.id} title={item.name}>{regionTree(item.id)}</TreeNode>));
        } else {
            return false;
        }
    };

    return (
        <div className="wrapperAddPost">
            <div className="container">
                <Navbar />
                <div className="content_addpost pt-5">
                    <div>
                        <h4
                            className=" header_text ">
                            Разместить БЕСПЛАТНОЕ объявление просто!
                        </h4>
                    </div>
                    <div className="row">
                        <div className="col-md-6 p-4">
                            <div className="container">
                                <div className="upload_image">

                                    <h6 className='text-start'>Загрузите фото</h6>

                                    <ImgCrop rotate>
                                        <Upload
                                            className="d-flex"
                                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                            listType="picture-card"
                                            fileList={fileList}
                                            onChange={onChange}
                                            onPreview={onPreview}
                                        >
                                            {fileList.length < 8 && <b>Добавьте фото</b>
                                                // <small>Главное фото будет отображаться в результатах поиска</small>
                                            }
                                        </Upload>
                                    </ImgCrop>
                                </div>
                                <div className="content_description mb-5">
                                    <h6 className='text-start'>Описание</h6>
                                    <TextArea showCount maxLength={6000} placeholder="Продам Samsung Gallaxy S9 в идеальном состоянии. Куплен 1 год назад. Причина продажи: покупка нового телефона" onChange={onChange} />
                                </div>
                                <div className="addpost_category_content mb-4">
                                    <h5 className='text-start'>Категория*</h5>
                                </div>

                                <div className='modal_add-post' title="Basic Modal">
                                    <div className="add_post-modal">
                                        {category != null ?
                                            <TreeSelect
                                                showSearch
                                                placeholder="Выберите категорию"
                                                onChange={(item) => {
                                                    const category = categoryMenu.find(object => object.id === item);
                                                    setSelectedCategory(category);
                                                }}
                                                allowClear
                                                value={selectedCategory?.id}
                                                filterTreeNode={(search, item) => {
                                                    return item.title.toLowerCase().indexOf(search.toLowerCase()) >= 0;
                                                }}
                                            >
                                                {category.map((item) =>
                                                    <TreeNode value={item.id} title={item.title}>
                                                        {categoryTree(item.id)}
                                                    </TreeNode>
                                                )}
                                            </TreeSelect>
                                            : <></>
                                        }
                                    </div>
                                </div>
                                <div className="addpost_select-city_content mb-4">
                                    <h5 className='text-start'>Город</h5>
                                    <div className="select_city-content">
                                        {region != null ?
                                            <TreeSelect
                                                showSearch
                                                placeholder="Выберите город"
                                                onChange={(item) => {
                                                    const region = regions.find(i => i.id === item);
                                                    setSelectedRegion(region);
                                                }}
                                                allowClear
                                                value={selectedRegion?.id}
                                                filterTreeNode={(search, item) => {
                                                    return item.title.toLowerCase().indexOf(search.toLowerCase()) >= 0;
                                                }}
                                            >
                                                {region.map((item) =>
                                                    <TreeNode value={item.id} title={item.name}>
                                                        {regionTree(item.id)}
                                                    </TreeNode>
                                                )}
                                            </TreeSelect>
                                            : <Skeleton />
                                        }
                                    </div>

                                </div>

                                <div className="addpost_select-price_content mb-4">
                                    <div className="row">
                                        <div className="item_price_and_currency d-flex">
                                            <div className="input_price">
                                                <h5 className='text-start'>Цена</h5>

                                                <div className="col-md-6">
                                                    <NumericInput
                                                        className='item_input_price d-flex'
                                                        style={{
                                                            width: 120,
                                                        }}
                                                        value={value}
                                                        onChange={setValue}
                                                    />
                                                </div>
                                            </div>

                                            <div className="select_currency">
                                                <h5 className='text-start'>Цена</h5>
                                                <div className="col-md-6 flex-wrap">
                                                    <Radio.Group onChangeRadio={onChangeRadio} valueRadio={valueRadio}>
                                                        <h5><Radio className='d-flex' value={1}>сом</Radio></h5>
                                                        <h5><Radio className='d-flex' value={2}>usd</Radio></h5>
                                                    </Radio.Group>
                                                </div>
                                            </div>
                                        </div>


                                    </div>

                                    <div className="addpost_input_nubmer_content d-block mb-4">
                                        <Input.Group size="medium">
                                            <Row gutter={8}
                                                className="item_input_number mt-3">
                                                <Col span={5}
                                                    style={{ height: "40px" }}>
                                                    <Input className='item_input_number_code' defaultValue="+996" />
                                                </Col>
                                                <Col span={8}>
                                                    <Input maxLength={6} className='item_input_number_long' placeholder="** ** **" />
                                                </Col>
                                            </Row>
                                        </Input.Group>
                                        <Checkbox className='hide_number' onChange={onChangeDisNumber}>Скрыть номер</Checkbox>

                                    </div>

                                    <button className='btn btn_publish' style={{ backgroundColor: '#22ca46', color: '#ffff', marginTop: "10px" }}>Опубликовать</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default AddPost;