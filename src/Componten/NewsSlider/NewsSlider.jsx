/* eslint-disable no-unused-vars */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const NewsSlider = ({ trending}) => {
    // const {title, image,publisher,tags,description}= news;
    return (
        <div>
           <Swiper
            slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >

    <div >
    {
          trending?.map((singleTrend,index)=>  <SwiperSlide key={index}> 
          {console.log(trending)}
          
          <img className=' h-80 w-90' src={singleTrend?.image} alt="" /> 
          <h2 className=' text-3xl mt-2 font-bold' >{singleTrend.title}</h2>
          
          
          </SwiperSlide>)
        }
    </div>
      
      
      </Swiper>


        </div>
    );
};

export default NewsSlider;
