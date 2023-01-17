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

    // const categoryChilds = categoryMenu.filter(i => i.parent_id == id);
    const categoryDrop = (id) => {
        const categoryChilds = categoryMenu.filter(i => i.parent_id == id);
        // if (categoryChilds.length > 0) {
        //     return categoryChilds.map((item) => (<Popover title={item.title}>{categoryDrop(item.id)}</Popover>));
        // } else {
        //     return false;
        // }
        setCategory(categoryChilds);
    };


    useEffect(() => {
        categoryDrop();
    }, []);
    // console.log(categoryItems);
    // const subCategories = (category) => {
    //     const categories = [];
    //     const categ = 
    //         categories.push({
    //             key: category.category_id,
    //             label: (
    //                 <a className='sub_menu_link' target="_blank" rel="noopener noreferrer"
    //                     href={"/viewcategories/" + category.category_id}>
    //                     {category.title}
    //                 </a>
    //             ),
    //         })
    // const subCategory =
    //     <Menu
    //         items={
    //             categories
    //         }
    //     />
    // console.log('sub', subCategory)
    // return subCategory;
    // }

    const [size, setSize] = useState('large');
    return (
        <div className="categories_section">
            <Search />
            <div className="btn_item p-3">
                {
                    categoryChilds.map((childs) =>

                        <Popover placement="bottom" title={childs.title} content={content} trigger="hover">
                            {
                                categoryItems.map((menu) =>
                                    <a className="btn_items btn_icon" href={"/viewcategories/" + menu.id}>
                                        <Button
                                            className='btn_icon_background'
                                            shape="circle"
                                            icon={<i class={menu.icon} />}
                                            size={size} />
                                        <a className='btn_name_category d-block text-white' > {menu.title} </a>
                                    </a>
                                )}
                        </Popover>
                    )}

            </div>
        </div >
    );
}

export default Categories;