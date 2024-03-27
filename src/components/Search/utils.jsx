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




export function xmlParser(xmlString) {
    const XMLParser = require('react-xml-parser');
    const xml = new XMLParser().parseFromString(xmlString);    // Assume xmlText contains the example XML
    console.log(xml);
    console.log(xml.getElementsByTagName('Name'));


}