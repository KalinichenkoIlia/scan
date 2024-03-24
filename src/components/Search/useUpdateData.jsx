import React from "react";




function useUpdateData(props){


    return(  {
            "issueDateInterval": {
                "startDate": `${props.startDate}`,
                "endDate": `${props.endDate}`
            },
            "searchContext": {
                "targetSearchEntitiesContext": {
                    "targetSearchEntities": [
                        {
                            "type": "company",
                            "sparkId": null,
                            "entityId": null,
                            "inn": props.inn,
                            "maxFullness": true,
                            "inBusinessNews": null
                        }
                    ],
                    "onlyMainRole": true,
                    "tonality": `${props.values.tonality}`,
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
            "similarMode": "none",
            "limit": parseInt(props.values.limit)
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
export default useUpdateData;