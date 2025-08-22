import Hero from '@/sections/Hero';
import ProductHighlights from '@/sections/ProductHighlights';
import React from 'react';
import UserInfo from './components/UserInfo';

const Home = () => {
  return (
    <>
      <Hero />
      <ProductHighlights/>
      <UserInfo/>
    </>
  );
};

export default Home;