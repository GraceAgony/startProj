
const initialState = {
    step1Data: new Array(),
    step2Data: new Array(),
    step3Data: new Array(),
    step4Data: {},
    step5Data: new Array(),
    step6Data: new Array(),
    step7Data: new Array(),
    step8Data: new Array(),
    step9Data: new Array(),
    step10Data: new Array(),
    step11Data: new Array(),
    step12Data: new Array(),


};

export default function data(state = initialState, action) {
    switch (action.type) {
        case 'SET_DATA':
            return Object.assign(state,action.payload) ;
        case 'GET_DATA':
            console.log('getData');
            let formBody = [];
            for (let prop in action.details) {
                let encodedKey = encodeURIComponent(prop);
                let encodedValue = encodeURIComponent(action.details[prop]);
                formBody.push(encodedKey + "=" + encodedValue);
            }
            formBody = formBody.join("&");
           // console.log(state);

            fetch('https://www.tpg.ua/ru/choosetour/index.php', {
                method: 'POST',
                headers: {
                    "Content-Type":"application/x-www-form-urlencoded",
                    "Accept" :"application/json, text/javascript, */*; q=0.01",
                    "User-Agent" :"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:61.0) Gecko/20100101 Firefox/61.0",
                    "Host":"www.tpg.ua",
                    "Cookie":"PHPSESSID=3m9go3ikf88r2hj5o17g64knb0; uniqId=1534959698.1581; uniqTime=1535032778; __cfduid=d841a26e49534387427606f36328b2d281534959699; _ga=GA1.2.637476781.1534959700; _gid=GA1.2.1341515966.1534959700; biatv-cookie={%22firstVisitAt%22:1534959701%2C%22visitsCount%22:1%2C%22campaignCount%22:1%2C%22currentVisitStartedAt%22:1534959701%2C%22currentVisitLandingPage%22:%22https://www.tpg.ua/ru/choosetour/%22%2C%22currentVisitOpenPages%22:1%2C%22location%22:%22https://www.tpg.ua/ru/choosetour/%22%2C%22userAgent%22:%22Mozilla/5.0%20(Windows%20NT%2010.0%3B%20Win64%3B%20x64%3B%20rv:60.0)%20Gecko/20100101%20Firefox/60.0%22%2C%22language%22:%22uk%22%2C%22encoding%22:%22utf-8%22%2C%22screenResolution%22:%221536x864%22%2C%22currentVisitUpdatedAt%22:1534959701%2C%22utmDataCurrent%22:{%22utm_source%22:%22google%22%2C%22utm_medium%22:%22organic%22%2C%22utm_campaign%22:%22(not%20set)%22%2C%22utm_content%22:%22(not%20set)%22%2C%22utm_term%22:%22(not%20provided)%22%2C%22beginning_at%22:1534959701}%2C%22campaignTime%22:1534959701%2C%22utmDataFirst%22:{%22utm_source%22:%22google%22%2C%22utm_medium%22:%22organic%22%2C%22utm_campaign%22:%22(not%20set)%22%2C%22utm_content%22:%22(not%20set)%22%2C%22utm_term%22:%22(not%20provided)%22%2C%22beginning_at%22:1534959701}%2C%22geoipData%22:{%22country%22:%22Ukraine%22%2C%22region%22:%22Kyyiv%22%2C%22city%22:%22Kiev%22%2C%22org%22:%22Triolan%22}}; bingc-activity-data={%22numberOfImpressions%22:1%2C%22activeFormSinceLastDisplayed%22:3%2C%22pageviews%22:1%2C%22callWasMade%22:0%2C%22updatedAt%22:1535032904}",
                    "Referer":"https://www.tpg.ua/ru/choosetour/",
                    "X-Requested-With":"XMLHttpRequest"
                },
                body: formBody,
            })
                .then((response) => response.json())
                .then((responseJson) => {

                    cityList = responseJson.content.cityList.list;

                    //step3 data

                    let stepArray = [];
                    //    regexp = new RegExp("<(?:[^>\"']|\"[^\"]*\"|'[^']*')+?\\sid\\s*=\\s*(?:\"ct\"|'ct')(?:[^>\"']|\"[^\"]*\"|'[^']*')*>", 'gmi');

                    let index = cityList.indexOf('\">' , cityList.indexOf('data-value'))+2;
                    let indexValue = cityList.indexOf('data-value=')+ 'data-value="'.length;
                    let startIndex = 0;
                    while (startIndex !== -1) {
                        element = cityList.slice(index, cityList.indexOf('</span>', index));
                        elementValue = cityList.slice(indexValue, cityList.indexOf('"', indexValue) );
                        stepArray.push({item: element.trim(), value: elementValue});
                        startIndex = cityList.indexOf('data-value', index);
                        index = cityList.indexOf('\">' , startIndex)+2;
                        indexValue = cityList.indexOf('data-value=', indexValue)+ 'data-value="'.length;

                    }


                    Object.assign(state,{step3Data : stepArray});

                    //step4 data

                    stepArray = [];
                    spoList = responseJson.content.spo.spoList;
                    index = spoList.indexOf('\">' , spoList.indexOf('data-value'))+2;
                    indexValue = cityList.indexOf('data-value=')+ 'data-value="'.length;
                    startIndex = 0;
                    while (startIndex !== -1) {
                        element = spoList.slice(index, spoList.indexOf('</span>', index));
                        elementValue = cityList.slice(indexValue, cityList.indexOf('"', indexValue) );
                        stepArray.push({item: element.trim(), value: elementValue});
                        startIndex = spoList.indexOf('data-value', index);
                        index = spoList.indexOf('\">' , startIndex)+2;
                        indexValue = cityList.indexOf('data-value=', indexValue)+ 'data-value="'.length;
                    }


                    let stepArray1 = [];
                    tourTypeList = responseJson.content.tourType.tourTypeList;
                    index = tourTypeList.indexOf('\">' , spoList.indexOf('data-value'))+2;
                    indexValue = cityList.indexOf('data-value=')+ 'data-value="'.length;
                    startIndex =0;
                    while (startIndex !== -1) {
                        element = tourTypeList.slice(index, tourTypeList.indexOf('</span>', index));
                        elementValue = cityList.slice(indexValue, cityList.indexOf('"', indexValue) );
                        stepArray1.push({item: element.trim(), value: elementValue});
                        startIndex = tourTypeList.indexOf('data-value', index);
                        index = tourTypeList.indexOf('\">' , startIndex)+2;
                        indexValue = cityList.indexOf('data-value=', indexValue)+ 'data-value="'.length;
                    }
                    Object.assign(state, {step4Data : { price: stepArray ,type: stepArray1}});
                    console.log(state);
                    //step5 data

                    defaultDateFrom = responseJson.content.parameters.defaultDateFrom;
                    defaultDateTo = responseJson.content.parameters.defaultDateTo;
                    Object.assign(state,{step5Data : {dateFrom: defaultDateFrom, dateTo:defaultDateTo}});
                    //step7 data

                    defaultFrom = responseJson.content.parameters.defaultFrom;
                    defaultTo = responseJson.content.parameters.defaultTo;
                    Object.assign(state,{step7Data : {nightFrom: defaultFrom, nightTo:defaultTo}});

                });

            return state;

        default:
            return state;
    }
}

