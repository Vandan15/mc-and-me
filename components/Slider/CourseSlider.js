import Image from "next/image";
import { useEffect, useState } from "react";
// import Bottle1 from "../public/assets/img/bottle-img/Domaine Dujac, Echezeaux.png";
// import Bottle2 from "../public/assets/img/bottle-img/Allemand, Cornas Reynard.png";
// import Bottle3 from "../public/assets/img/bottle-img/Giovanni Canonica, Barolo Paiagallo.png";
// import Bottle4 from "../public/assets/img/bottle-img/Didier Dagueneau, Pouilly Fume Silex.png";
// import Bottle5 from "../public/assets/img/bottle-img/Philipponnat, Clos des Goisses.png";
// import Bottle6 from "../public/assets/img/bottle-img/Taittinger, Comtes Champagne Rose.png";
import Slider from "react-slick";
import Image1 from '../../public/assets/course.jpg';
// import { myLoader, stripHTML } from "../utils/functions";
import styles from '../Courses/Courses.module.scss';
const ProductSlider = (props) => {
    const [sliderList, setSliderList] = useState();
    useEffect(() => {
        if (props.slider) {
            setSliderList(props.slider);
        }
    }, [props])
    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 2500,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    
                    dots: false
                }
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="products_slider">
            <Slider {...settings}>
                <div className={styles.ImageBox}  >
                    <div className={styles.imgdesign}>
                        <Image src={Image1} />
                    </div>
                    <div className={styles.pricebox}><span>₹12,980.00</span></div>
                    <div className={styles.textboxdesign}>
                        <h5>MCT: Masterclass In Cyber Tactics</h5>
                        <p>Recently, the citizens of India have observed that the international OTT platforms are on a free run to control the content of the people of a sovereign nation.</p>
                    </div>
                    <div className={styles.buttonGropslider}>
                        <button><span>Add</span> <i className="fa fa-plus" ></i> </button>
                        <button className={styles.buttonmore}><span>Read More</span> <i className="fa fa-angle-right" ></i> </button>
                    </div>
                </div>
                <div className={styles.ImageBox}  >
                    <div className={styles.imgdesign}>
                        <Image src={Image1} />
                    </div>
                    <div className={styles.pricebox}><span>₹12,980.00</span></div>
                    <div className={styles.textboxdesign}>
                        <h5>MCT: Masterclass In Cyber Tactics</h5>
                        <p>Recently, the citizens of India have observed that the international OTT platforms are on a free run to control the content of the people of a sovereign nation.</p>
                    </div>
                    <div className={styles.buttonGropslider}>
                        <button><span>Add</span> <i className="fa fa-plus" ></i> </button>
                        <button className={styles.buttonmore}><span>Read More</span> <i className="fa fa-angle-right" ></i> </button>
                    </div>
                </div>
                <div className={styles.ImageBox}  >
                    <div className={styles.imgdesign}>
                        <Image src={Image1} />
                    </div>
                    <div className={styles.pricebox}><span>₹12,980.00</span></div>
                    <div className={styles.textboxdesign}>
                        <h5>MCT: Masterclass In Cyber Tactics</h5>
                        <p>Recently, the citizens of India have observed that the international OTT platforms are on a free run to control the content of the people of a sovereign nation.</p>
                    </div>
                    <div className={styles.buttonGropslider}>
                        <button><span>Add</span> <i className="fa fa-plus" ></i> </button>
                        <button className={styles.buttonmore}><span>Read More</span> <i className="fa fa-angle-right" ></i> </button>
                    </div>
                </div>
                <div className={styles.ImageBox}  >
                    <div className={styles.imgdesign}>
                        <Image src={Image1} />
                    </div>
                    <div className={styles.pricebox}><span>₹12,980.00</span></div>
                    <div className={styles.textboxdesign}>
                        <h5>MCT: Masterclass In Cyber Tactics</h5>
                        <p>Recently, the citizens of India have observed that the international OTT platforms are on a free run to control the content of the people of a sovereign nation.</p>
                    </div>
                    <div className={styles.buttonGropslider}>
                        <button><span>Add</span> <i className="fa fa-plus" ></i> </button>
                        <button className={styles.buttonmore}><span>Read More</span> <i className="fa fa-angle-right" ></i> </button>
                    </div>
                </div>
                <div className={styles.ImageBox}  >
                    <div className={styles.imgdesign}>
                        <Image src={Image1} />
                    </div>
                    <div className={styles.pricebox}><span>₹12,980.00</span></div>
                    <div className={styles.textboxdesign}>
                        <h5>MCT: Masterclass In Cyber Tactics</h5>
                        <p>Recently, the citizens of India have observed that the international OTT platforms are on a free run to control the content of the people of a sovereign nation.</p>
                    </div>
                    <div className={styles.buttonGropslider}>
                        <button><span>Add</span> <i className="fa fa-plus" ></i> </button>
                        <button className={styles.buttonmore}><span>Read More</span> <i className="fa fa-angle-right" ></i> </button>
                    </div>
                </div>

            </Slider>
        </div>
    );
};
export default (ProductSlider);
