import React from 'react';
import Blog from '../../Blog/Blog';
import BuyNow from '../../BuyNow/BuyNow';
import ClientsReview from '../../ClientsReview/ClientsReview';
import ShopNow from '../../ShopNow/ShopNow';
import About from '../About/About';
import AdvertisedProducts from '../AdvertisedProducts/AdvertisedProducts';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <About></About>
          <AdvertisedProducts></AdvertisedProducts>
          <BuyNow></BuyNow>
          <Categories></Categories>
          <ShopNow></ShopNow>
          <ClientsReview></ClientsReview>
          <Blog></Blog>
        </div>
    );
};

export default Home;