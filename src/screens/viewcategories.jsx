import Navbar from "../components/navbar";
import { categoryMenu, posts } from "./api";
import { regions } from "./api";
import { useParams } from "react-router-dom";
import { HeartFilled, MailFilled } from '@ant-design/icons';
import React, { useState, useEffect } from 'react';
import { TreeSelect, Skeleton, } from 'antd';

const { TreeNode } = TreeSelect;

const ViewCategories = () => {
    const [selectedCategory, setSelectedCategory] = useState();
    const [category, setCategory] = useState(null);
    const [selectedRegion, setSelectedRegion] = useState();
    const [region, setRegion] = useState(null);
    const params = useParams();
    const categoryID = params.categoryID;
    const resultCategory = posts.filter(item => item.categoryID == categoryID);
    const subCategories = categoryMenu.filter(sub_item => sub_item.parent_id == categoryID);
    const fetchCategories = () => {
        const _categories = categoryMenu.filter(i => i.parent_id == null);
        setCategory(_categories);
        console.log(_categories);
    }

    console.log("category", category);

    const categoryTree = (id) => {
        const categoryChilds = categoryMenu.filter(i => i.parent_id == id);
        if (categoryChilds.length > 0) {
            return categoryChilds.map((item) => (<TreeNode value={item.id} title={item.title}>{categoryTree(item.id)}</TreeNode>));
        } else {
            return false;
        }
    };


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
    useEffect(() => {
        fetchCategories();
        fetchRegion();
    }, []);
    return (
        <div className="container">
            <Navbar />
            <div className="wrapperViewCategories">
                <div className="filter_and_select">
                    <div className="content_filter pr-3 pl-3">
                        <div className="row align-items-center justify-content-center d-flex">
                            <div className="col-md-4">
                                <div className="select_category">
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
                                        : <>ne</>
                                    }

                                </div>

                            </div>
                            <div className="col-md-4">
                                <div className="content_search">
                                    <form className="search_content d-flex" role="search">
                                        <input
                                            className="form-control me-2"
                                            type="search"
                                            placeholder="Я ищу..."
                                            aria-label="Search" />
                                        <button
                                            className="btn bi bi-search"
                                            type="submit"
                                            style={{ backgroundColor: "#f0f2f7" }}>
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="select-City">
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
                        </div>
                    </div>
                    <div className="filter_categories">
                    </div>
                </div>
                <div className="content_subCategories  d-flex ">
                    {
                        subCategories.map(item =>
                            <ul className="nav">
                                <li className="nav-item p-2">
                                    <a class="nav-link p-1"
                                        style={{ backgroundColor: "#ecf5ff", padding: "2px", borderRadius: "5px" }}
                                        href={"/viewcategories/" + item.id}>{item.title}</a>
                                </li>
                            </ul>
                        )
                    }
                </div>
                <hr></hr>
                <div className="categPostsFilter" style={{
                    width: "55%"
                }}>
                    {resultCategory.map
                        ((item) =>
                            <a className="card_link"
                                href={"/postview/" + item.id}
                                style={{ textDecoration: "none" }} >
                                <div class="card card_link mb-3">
                                    <div class="row g-0">
                                        <div class="col-md-4">
                                            <img src={item.imgPost}
                                                style={{ width: "210px", height: "180px", }}
                                                class="img-fluid rounded-start" alt="..." />
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card-body text-start">
                                                <a class="card-title"
                                                    style={{ textDecoration: "none" }}
                                                    href={"/postview/" + item.id}>
                                                    {item.namePost}
                                                </a>
                                                <br />
                                                <br />
                                                <h5 class="card-title">
                                                    {item.newPricePost}
                                                </h5>
                                                <h5 class="card-title"
                                                    href="/postview"
                                                    style={{ cursor: "pointer" }}>
                                                    {item.oldPricePost}
                                                </h5>

                                                <p class="card-text"
                                                    style={{ color: "gray" }}>
                                                    {item.namePost}
                                                </p>
                                                <div className="basement_content_card d-flex justify-content-between">
                                                    <div className="col-md-6 align-items-center d-flex">
                                                        <div className='icons_card d-flex justify-content-between'>
                                                            <HeartFilled className='item_card_icon_like'></HeartFilled>
                                                            <MailFilled className='item_card_icon_mail'></MailFilled>
                                                        </div>
                                                    </div>
                                                    <div className="btn d-flex justify-content-end"
                                                        style={{
                                                            color: "#22ca46",
                                                        }}><b>позвонит</b>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        )
                    }
                </div>
            </div>
        </div >


    )
}

export default ViewCategories;