export function organizeData(data) {
    let organizeData = []

    if (data.length > 0) {

        data[1].data.forEach((el, index) => {
            organizeData[el.date.substring(0, 10)] = {id: index, riskFactors: el.value, totalDocuments: null}
        });

        data[0].data.forEach((el) => {

            organizeData[el.date.substring(0, 10)].totalDocuments = el.value
        })
        return organizeData;
    } else {
        return []
    }
}

export function getAttributes(attributes) {
    for (let attribute in attributes){
        if ( attributes[attribute]){
            return 'технические новости'
        }if ( attributes[attribute]){
            return 'анонсы и события'
        }if (attributes[attribute]){
            return 'сводки новостей'
        }
    }
}


export function xmlReplace(xml) {
    const text = xml.replace(/<[^>]+>?/g, '');
    const text2 = text.replace(/&lt;br&gt;/g, '');
    const text3 = text2.replace(/&lt;\/[a-z]+&gt;/gsm, '');
    const text4 = text3.replace(/(https?|ftp):\/\//, '');
    return text4.slice(0, 1000).replace(/&LT;P&Gt;/g, '')
}