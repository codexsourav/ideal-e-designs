import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Error404 from '../Pages/Error/Error404';
import ReactNative from '../Pages/Tech/ReactNative';
import Flutter from '../Pages/Tech/Flutter';
import NativeAndroid from '../Pages/Tech/NativeAndroid';
import NativeIos from '../Pages/Tech/NativeIos';
import AdvantagesOfReact from '../Pages/Tech/ReactJs';
import AdvantagesOfNodeJS from '../Pages/Tech/NodeJs';
import AdvantagesOfPHP from '../Pages/Tech/php';
import AdvantagesOfPython from '../Pages/Tech/Python';
import AdvantagesOfMagento from '../Pages/Tech/Magento';
import AdvantagesOfWooCommerce from '../Pages/Tech/WooComrace';
import AdvantagesOfShopify from '../Pages/Tech/Shopify';



const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/tech/recatnative' element={<ReactNative />} />
            <Route path='/tech/flutter' element={<Flutter />} />
            <Route path='/tech/nativeandroid' element={<NativeAndroid />} />
            <Route path='/tech/nativeios' element={<NativeIos />} />
            <Route path='/tech/reactjs' element={<AdvantagesOfReact />} />
            <Route path='/tech/nodejs' element={<AdvantagesOfNodeJS />} />
            <Route path='/tech/php' element={<AdvantagesOfPHP />} />
            <Route path='/tech/python' element={<AdvantagesOfPython />} />
            <Route path='/tech/magento' element={<AdvantagesOfMagento />} />
            <Route path='/tech/woocommerce' element={<AdvantagesOfWooCommerce />} />
            <Route path='/tech/shopify' element={<AdvantagesOfShopify />} />

            <Route path="*" element={<Error404 />} />
        </Routes>
    );
};

export default React.memo(AppRoutes);
