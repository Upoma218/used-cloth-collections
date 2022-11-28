import React from 'react';
import About from '../About/About';
import AdvertisedProducts from '../AdvertisedProducts/AdvertisedProducts';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';

const Home = () => {
    return (
        <div className=''>
          <Banner></Banner>
          <About></About>
          <AdvertisedProducts></AdvertisedProducts>
          <Categories></Categories>
        </div>
    );
};

export default Home;