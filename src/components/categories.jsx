import 'font-awesome/css/font-awesome.min.css';
import { Button, Dropdown, Menu, Popover } from 'antd';
import React, { useEffect, useState } from 'react';
import { categoryMenu } from '../screens/api';
import { posts } from '../screens/api';
import Search from './search';



const Categories = ({ content }) => {
    const text = <span>text</span>;
    const [category, setCategory] = useState(null);
    const categoryItems = categoryMenu.filter(i => i.parent_id == null);
    const categoryChild = (item) => {
        const categoryChildren = categoryMenu.filter(i => i.parent_id == item);
        if (categoryChildren.length > 0) {
            return (
                categoryChildren.map((i) =>
                    <>
                        <li className='nav-item'>
                            <a className='nav-link' href={'/viewcategories/' + i.id}>{i.title}</a>
                            <br />
                        </li>
                    </>
                )
            )
        } else {
            return [];
        }
    }
    const [size, setSize] = useState('large');
    return (
        <div className="categories_section">
            <Search />
            <div className="btn_item p-3">
                {
                    categoryItems.map((item) =>
                        <>
                            <Popover placement="bottom"
                                title={item.title}
                                trigger="hover"
                                content={categoryChild(item.id)}>
                                <a className='btn_items btn_icon'>
                                    <Button
                                        className='btn_icon_background'
                                        shape="circle"
                                        icon={<i className={item.icon} />}
                                        size={size} />
                                    <a className='btn_name_category d-block text-white'
                                        href={'/viewcategories/' + item.id}>
                                        {item.title}
                                    </a>
                                </a>
                            </Popover>
                        </>
                    )}
            </div>
        </div >
    );
}

export default Categories;