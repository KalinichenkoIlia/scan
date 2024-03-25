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
    }else {
        return []
    }

}