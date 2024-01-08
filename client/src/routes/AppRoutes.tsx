import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Error404 from '../Pages/Error/Error404';



const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Error404 />} />
        </Routes>
    );
};

export default React.memo(AppRoutes);
