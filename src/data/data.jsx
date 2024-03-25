import styles from '../styles/SummarySlider.module.css'

export const LOGIN_URL = 'https://gateway.scan-interfax.ru/api/v1/account/login';

export const ACCOUNT_INFO_URL =  'https://gateway.scan-interfax.ru/api/v1/account/info';

export const HISTOGRAMS_URL = 'https://gateway.scan-interfax.ru/api/v1/objectsearch/histograms';

export const OBJECT_SEARCH_URL = 'https://gateway.scan-interfax.ru/api/v1/objectsearch/'

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

export function updateHistograms(data) {
    return ({
            "issueDateInterval": {
                "startDate": `${data.startDate}`,
                "endDate": `${data.endDate}`
            },
            "searchContext": {
                "targetSearchEntitiesContext": {
                    "targetSearchEntities": [
                        {
                            "type": "company",
                            "sparkId": null,
                            "entityId": null,
                            "inn": parseInt(data.values.inn),
                            "maxFullness": true,
                            "inBusinessNews": null
                        }
                    ],
                    "onlyMainRole": true,
                    "tonality": `${data.values.tonality}`,
                    "onlyWithRiskFactors": true,
                    "riskFactors": {
                        "and": [],
                        "or": [],
                        "not": []
                    },
                    "themes": {
                        "and": [],
                        "or": [],
                        "not": []
                    }
                },
                "themesFilter": {
                    "and": [],
                    "or": [],
                    "not": []
                }
            },
            "searchArea": {
                "includedSources": [],
                "excludedSources": [],
                "includedSourceGroups": [],
                "excludedSourceGroups": []
            },
            "attributeFilters": {
                "excludeTechNews": true,
                "excludeAnnouncements": true,
                "excludeDigests": true
            },
            "similarMode": "duplicates",
            "limit": parseInt(data.values.limit)
            ,
            "sortType": "issueDate",
            "sortDirectionType": "desc",
            "intervalType": "month",
            "histogramTypes": [
                "totalDocuments",
                "riskFactors"
            ]
        }
    )
}
