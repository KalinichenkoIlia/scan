
export const login_url = 'https://gateway.scan-interfax.ru/api/v1/account/login';

export const account_info =  'https://gateway.scan-interfax.ru/api/v1/account/info';

export  const settingsSlider = {

    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 8,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,

            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
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