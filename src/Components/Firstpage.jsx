import React, {  } from 'react';
import Navbar from './Navbar';
import Foodcat from './Foodcat';
import icecreamImage from './images/icecream (1).jpg';
import burgerking from './images/burger-king-1.jpg';
import smallburger from './images/small-burger (2).jpg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import Cards from './Cards';
// import breakfast  from './images/breakfast (2).jpg'
// import momos from './images/momos.jpg'
import imagesPath from './imageAddress'
import Pagefooter from './Pagefooter';
const Firstpage = () => {
  console.log(imagesPath)
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    rows: 1,
    slidesToShow: 4,
    slidesToScroll: 2,
    // prevArrow: <AiOutlineLeft className="slick-prev" />,
    // nextArrow: <AiOutlineRight className="slick-next" />
  };

  return (
    <div className='second-page'>
      <Navbar />
      <div className='first-row'>
        <Foodcat className={'food-big-img'} imageClass={'img-big'} url={'https://cdn.pixabay.com/photo/2017/11/30/08/56/ice-cream-2987955_1280.jpg'} offer={'20% OFF'} />
        <Foodcat className={'food-big-img'} imageClass={'img-big'} url={'https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_1280.jpg'} offer={'50% OFF'} />
      </div>
      <div className='second-row'>
        <div className='second-row-one'>
          {/* implement this more cleanly with image mapping */}
          <Foodcat className={'food-sm-img-lt'} imageClass={'img-sm'} url={'https://img.icons8.com/?size=512&id=12869&format=png'} />
          <Foodcat className={'food-sm-img-lt'} imageClass={'img-sm'} url={'https://img.icons8.com/?size=512&id=NGOlxBMiOFvi&format=png'} />
          <Foodcat className={'food-sm-img-lt'} imageClass={'img-sm'} url={'https://img.icons8.com/?size=512&id=fXIkRiBdwaXC&format=png'} />
        </div>
        <div className='second-row-one'>
          <Foodcat className={'food-sm-img-rt'} imageClass={'img-sm'} url={'https://img.icons8.com/?size=512&id=aXQUbhHPUKqv&format=png'} />
          <Foodcat className={'food-sm-img-rt'} imageClass={'img-sm'} url={'https://img.icons8.com/?size=512&id=rvujxIWwV9Aa&format=png'} />
          <Foodcat className={'food-sm-img-rt'} imageClass={'img-sm'} url={'https://img.icons8.com/?size=512&id=1tk2FK7vFBhe&format=png'} />
        </div>
      </div>
      <h3 className='first-row-head'>Nearby Restaurants</h3>
      <div className='third-row'>
        <div className='slide-holder'>
           <Slider {...settings}>
            {imagesPath.map((itr,i) => 
               <Cards key={i} url={itr.Path} resName={itr.resName} price={itr.price}/>
            )}
          </Slider> 
          {/* {imagesPath.map(itr=>{
            return <div key={itr.resName}>
              <img src={itr.Path} alt="img" />
            </div>
          })} */}
        </div>
      </div> 
      <Pagefooter/>
    </div>
  );
};

export default Firstpage;
