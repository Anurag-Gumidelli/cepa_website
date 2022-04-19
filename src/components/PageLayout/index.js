import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from '../Header';
import HomePage from '../../pages/HomePage';

const PageLayout = () => {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
      {/* TODO: Add Footer here */}
    </>
  );
}

export default PageLayout;