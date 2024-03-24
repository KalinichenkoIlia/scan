import styles from '../styles/SummarySlider.module.css'

export const login_url = 'https://gateway.scan-interfax.ru/api/v1/account/login';

export const account_info_url =  'https://gateway.scan-interfax.ru/api/v1/account/info';

export const histograms_url = 'https://gateway.scan-interfax.ru/api/v1/objectsearch/histograms';


export  const settingsSlider = {

    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 8,
    initialSlide: 0,
    className: `${styles.slick_slider}`,
    arrows: true,
    responsive: [
        {
            breakpoint: 1500,
            settings: {
                slidesToShow: 8,
                slidesToScroll: 8,
                infinite: false
            }

        },
        {
            breakpoint: 1280,
            settings: {
                slidesToShow: 7,
                slidesToScroll: 7,
                infinite: false,
            }
        },

        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 6,
                infinite: false,
            }
        },
        {
            breakpoint: 912,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
                initialSlide: 2,
                infinite: false,
            }
        },
        {
            breakpoint: 540,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: false,
            }
        }
    ]
};