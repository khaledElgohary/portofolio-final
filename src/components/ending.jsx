import { CCarousel, CCarouselItem, CImage } from '@coreui/react'
import cat1 from '../assets/cat1.jpeg'
import cat2 from '../assets/cat2.jpeg'
import cat3 from '../assets/cat3.jpeg'
import cat4 from '../assets/cat4.jpeg'
import cat5 from '../assets/cat5.jpeg'


export default function Ending(){

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    
    return(
        <div className="ending-container">
            <h3>Thanks for stopping by, here's some pictures of my cats for good luck 🐈</h3>
            <CCarousel indicators interval>
                <CCarouselItem>
                    <CImage src={cat1} style={{width:'450px', display:'flex', justifyContent:'center', alignItems:'center'}}/>
                </CCarouselItem>
                <CCarouselItem>
                    <CImage src={cat2} style={{width:'450px', display:'flex', justifyContent:'center', alignItems:'center'}}/>
                </CCarouselItem>
                <CCarouselItem>
                    <CImage src={cat3} style={{width:'450px', display:'flex', justifyContent:'center', alignItems:'center'}}/>
                </CCarouselItem>
                <CCarouselItem>
                    <CImage src={cat4} style={{width:'450px', display:'flex', justifyContent:'center', alignItems:'center'}}/>
                </CCarouselItem>
                <CCarouselItem>
                    <CImage src={cat5} style={{width:'450px', display:'flex', justifyContent:'center', alignItems:'center'}}/>
                </CCarouselItem>
                
            </CCarousel>
        </div>
    );
}