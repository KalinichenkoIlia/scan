
// color Hex

export const ColorCard = {
    'card-Business': ['#000000'],
    'card-Pro': ['#7CE3E1'],
    'card-Beginner': ['#FFB64F']
}


export const BUSINESS_TEXT = {
    header: 'Для корпоративных клиентов',
    rate: ['Все пункты тарифа Pro',
        'Безлимитное количество запросов',
        'Приоритетная поддержка'],
    price_list:{
        price: 3700,
        discount: 2379,
    },
    installment_text:'',
}

export const PRO_TEXT = {
    header: 'Для HR и фрилансеров',
    rate: ['Все пункты тарифа Beginner',
        'Экспорт истории',
        'Рекомендации по приоритетам'
    ],
    price_list:{
        price: 2600,
        discount: 1299, //discount
    },
    installment_text:'или 279 ₽/мес. при рассрочке на 24 мес.',
}

export const BEGINNER_TEXT = {
    header: 'Для небольшого исследования',
    rate: ['Безлимитная история запросов',
        'Безопасная сделка',
        'Поддержка 24/7'
    ],
    price_list:{
        price: 1200,
        discount: 799,
    },
    installment_text:'или 150 ₽/мес. при рассрочке на 24 мес.',
}
