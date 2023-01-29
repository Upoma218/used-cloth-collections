import React from 'react';
import BuyNow from '../../BuyNow/BuyNow';
import ClientsReview from '../../ClientsReview/ClientsReview';
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
          <ClientsReview></ClientsReview>
        </div>
    );
};

export default Home;