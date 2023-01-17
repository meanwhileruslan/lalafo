
import './App.css';
import 'antd/dist/antd.css';
import Main from './screens/main';
import MyAds from './screens/myads';
import Message from './screens/message';
import PostView from './screens/postview';
import AddPost from './screens/addpost';


import React from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import WalletPage from './screens/wallet';
import EffectPage from './screens/effect';
import SettingProfile from './screens/settingprofile';
import Categories from './components/categories';
import ViewCategories from './screens/viewcategories';
import PostViewPage from './screens/businessprofileview';
import MorePostsUser from './screens/morepostsusers';
import Favorites from './screens/favorites';
import ViewAllBusinessProfile from './screens/viewallbusinessprofile';
import JustAPI from './components/justapi';
import University from './components/justapi2';




const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/addpost' element={<AddPost />} />
          <Route path='/postview/:id' element={<PostView />} />
          <Route path='/viewcategories/:categoryID' element={<ViewCategories />} />
          <Route path='/morepostsusers/:id' element={<MorePostsUser />} />
          {/* Компоненты */}
          <Route path='/myads' element={<MyAds />} />
          <Route path='/message' element={<Message />} />
          <Route path='/wallet' element={<WalletPage />} />
          <Route path='/effect' element={<EffectPage />} />
          <Route path='/settingprofile' element={<SettingProfile />} />
          <Route path='/businessprofileview/:id' element={<PostViewPage />} />
          <Route path='/addpost' element={<AddPost />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/viewallbusinessprofile/' element={<ViewAllBusinessProfile />} />
          <Route path='/justapi/' element={<JustAPI />} />
          <Route path='/justapi2' element={<University/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
