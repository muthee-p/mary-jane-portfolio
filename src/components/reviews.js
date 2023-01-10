import React,{ useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import"swiper/css/pagination";
import "./reviews.css";
import { Pagination } from "swiper";
import ed from './Assets/ed.jpg';
import kate from './Assets/kate.jpg';
import mary from './Assets/mary.jpg';
import sara from './Assets/sara.jpg';
import ted from './Assets/ted.jpg';

const Reviews= () => {
  const Data =[
{
  id:1,
  author: "Ted Bandi",
  job: "video game player",
  imge: ted,
  text: "From what I've seen and read. None of their shoes come in half sizes. Piece of advice. Check the reviews on sizing, for the shoes your you're wanting to purchase. Some of their styles run small so size up. Others are true to size, mens sizes could be an advantage."
},
{
  id:2,
  author: "Ed Miller",
  job: "web developer",
  imge: ed,
  text: "The rule of thumb for men to women size conversion is 1 1/2 sizes. In other words a size 9 in womens would be equivalent to a size 7 1/2 in mens. Mens average width is a D as womens average width is a B. So for those women with a wider than average foot."
},
{
  id:3,
  author: "Mary Jane",
  job: "Interior designer",
  imge: mary,
  text: "Great For Travel & On The Go: The removable memory foam cushioned insole provides maximum comfort and reduces sweating and odors. Machine Washable Friendly (Cold). Sizing Tip: If you wear half sizes, choosing the next size up for the best overall fit."

},
{
  id:4,
  author: "Kate Jeff",
  job: "graphics",
  imge: kate,
  text: "Lightweight with Elastic Laces: Manufactured using an elastic material that allows them to flex with the foot, resulting in a shoe that fits more uniformly. Each shoe weighs 6 ounces or less making it one of the lightest pairs of shoes around. "
},
{
  id:5,
  author: "Sara Jones",
  job: "UI/UX designer",
  imge: sara,
  text: "I first starting HeyDudes about a year ago after i saw countless Facebook ads about them. I decided to give them a shot because I saw quite a few people wearing them anytime I'd go out anywhere. Needless to say its apparent why these are so popular."
},
];
  
  // const [index, setIndex] = useState(0);
  // const currentData = Data[index];
  // //const item = items[index];

  // const handlePrevClick = ()=> {
  //   setIndex((index - 1) % Data.length);
  // }

  // const handleNextClick =() => {
  //   setIndex((index + 1) % Data.length);
  // }

  return (
    <div className="reviews-content">
    <h5> Reviews</h5>
    <h2>Read what our customers say</h2>
    <Swiper className="reviews_container"
    loop={true}
    grabCursor={true}
    spaceBetween={24} 
    pagination={{ clickable:true, }}
    breakpoints={{
      640:{
        slidesPerView:2,
      },
      768:{
        slidesPerView:2,
        spaceBetween:48,
      },
      
    }}
    modules={[Pagination]}
    >
    {Data.map(({id, author, job, imge, text}) =>{
      return(
        <SwiperSlide key={id} className="info">
        <img src={imge}/>
        <p className="author-name">{author}</p>
        <p className="occupation">{job}</p>
        <p>{text}</p>
        </SwiperSlide>
        );
      })}
    </Swiper>
      
     
          {/*<p onClick={handlePrevClick}><BsArrowLeftCircle /></p>

      {index < Data.length - 1 && <p onClick={() => handleNextClick}><BsArrowRightCircle /></p>}*/}
    </div>
    );
}
export default Reviews;