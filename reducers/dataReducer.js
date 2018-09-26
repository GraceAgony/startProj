
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
                    indexValue = spoList.indexOf('data-value=')+ 'data-value="'.length;
                    startIndex = 0;
                    while (startIndex !== -1) {
                        element = spoList.slice(index, spoList.indexOf('</span>', index));
                        elementValue = spoList.slice(indexValue, spoList.indexOf('"', indexValue) );
                        stepArray.push({item: element.trim(), value: elementValue});
                        startIndex = spoList.indexOf('data-value', index);
                        index = spoList.indexOf('\">' , startIndex)+2;
                        indexValue = spoList.indexOf('data-value=', indexValue)+ 'data-value="'.length;
                    }


                    let stepArray1 = [];
                    tourTypeList = responseJson.content.tourType.tourTypeList;
                    index = tourTypeList.indexOf('\">' , tourTypeList.indexOf('data-value'))+2;
                    indexValue = tourTypeList.indexOf('data-value=')+ 'data-value="'.length;
                    startIndex =0;
                    while (startIndex !== -1) {
                        element = tourTypeList.slice(index, tourTypeList.indexOf('</span>', index));
                        elementValue = tourTypeList.slice(indexValue, tourTypeList.indexOf('"', indexValue) );
                        stepArray1.push({item: element.trim(), value: elementValue});
                        startIndex = tourTypeList.indexOf('data-value', index);
                        index = tourTypeList.indexOf('\">' , startIndex)+2;
                        indexValue = tourTypeList.indexOf('data-value=', indexValue)+ 'data-value="'.length;
                    }
                    Object.assign(state, {step4Data : { price: stepArray ,type: stepArray1}});
                    //step5 data

                    defaultDateFrom = responseJson.content.parameters.defaultDateFrom;
                    defaultDateTo = responseJson.content.parameters.defaultDateTo;
                    Object.assign(state,{step5Data : {dateFrom: defaultDateFrom, dateTo:defaultDateTo}});

                    //step7 data

                    defaultFrom = responseJson.content.parameters.defaultFrom;
                    defaultTo = responseJson.content.parameters.defaultTo;

                    stepArray = [];
                    spoList = responseJson.content.parametersBySpo.nightsFromList;
                    index = spoList.indexOf('\">' , spoList.indexOf('data-value'))+2;
                    indexValue = spoList.indexOf('data-value=')+ 'data-value="'.length;
                    startIndex = 0;
                    while (startIndex !== -1) {
                        element = spoList.slice(index, spoList.indexOf('</span>', index));
                        elementValue = spoList.slice(indexValue, spoList.indexOf('"', indexValue) );
                        stepArray.push({item: element.trim(), value: elementValue});
                        startIndex = spoList.indexOf('data-value', index);
                        index = spoList.indexOf('\">' , startIndex)+2;
                        indexValue = spoList.indexOf('data-value=', indexValue)+ 'data-value="'.length;
                    }


                    stepArray1 = [];
                    spoList = responseJson.content.parametersBySpo.nightsToList;
                    index = spoList.indexOf('\">' , spoList.indexOf('data-value'))+2;
                    indexValue = spoList.indexOf('data-value=')+ 'data-value="'.length;
                    startIndex = 0;
                    while (startIndex !== -1) {
                        element = spoList.slice(index, spoList.indexOf('</span>', index));
                        elementValue = spoList.slice(indexValue, spoList.indexOf('"', indexValue) );
                        stepArray1.push({item: element.trim(), value: elementValue});
                        startIndex = spoList.indexOf('data-value', index);
                        index = spoList.indexOf('\">' , startIndex)+2;
                        indexValue = spoList.indexOf('data-value=', indexValue)+ 'data-value="'.length;
                    }
                    Object.assign(state,{step7Data : {nightFrom: {item: defaultFrom, value: defaultFrom},
                            nightFromList: stepArray,
                            nightTo:{item: defaultTo, value: defaultTo},
                           nightToList: stepArray1}});

                    //step8 data

                     stepArray = [];
                    //    regexp = new RegExp("<(?:[^>\"']|\"[^\"]*\"|'[^']*')+?\\sid\\s*=\\s*(?:\"ct\"|'ct')(?:[^>\"']|\"[^\"]*\"|'[^']*')*>", 'gmi');
                    let eatList = responseJson.content.eatList;
                     index = eatList.indexOf('/i>' , eatList.indexOf('data-value'))+3;
                     indexValue = eatList.indexOf('data-value=')+ 'data-value="'.length;
                     startIndex = 0;
                    while (startIndex !== -1) {
                        element = eatList.slice(index, eatList.indexOf('</div>', index));
                        elementValue = eatList.slice(indexValue, eatList.indexOf('"', indexValue) );
                        stepArray.push({item: element.trim(), value: elementValue});
                        startIndex = eatList.indexOf('data-value', index);
                        index = eatList.indexOf('/i>' , startIndex)+3;
                        indexValue = eatList.indexOf('data-value=', indexValue)+ 'data-value="'.length;
                    }

                    stepArray1 = [];

                    stepArray1.push(
                        {item: '2*', value: '2*'},
                        {item: '3*', value: '3*'},
                        {item: '4*', value: '4*'},
                        {item: '5*', value: '5*'},
                        {item: 'APT', value: 'APT'},
                        {item: 'VILLA', value: 'VILLA'}
                        );

                    Object.assign(state,{step8Data : {eatList :stepArray, hotel: stepArray1}});

                    //step12data

                    stepArray = [];
                    cityHotels = responseJson.content.cityHotels.cityhotels;
                    indexRecom = cityHotels.indexOf('<div data-recom=' )+ '<div data-recom="'.length;
                    indexValue = cityHotels.indexOf('data-value=')+ 'data-value="'.length;
                    let indexEurope = cityHotels.indexOf('data-europe=')+ 'data-europe="'.length;
                    let link = cityHotels.indexOf('a href=')+ 'a href="'.length;
                    index = cityHotels.indexOf('blank">' )+ 'blank">'.length;
                    let cityId = cityHotels.indexOf('data-cityId=') + 'data-cityId="'.length;
                    startIndex = 0;
                    while (startIndex !== -1) {
                        element = cityHotels.slice(index, cityHotels.indexOf('</a>', index));
                        elementValue = cityHotels.slice(indexValue, cityHotels.indexOf('"', indexValue) );
                        elementRecom = cityHotels.slice(indexRecom, cityHotels.indexOf('"',indexRecom));
                        elementEurope = cityHotels.slice(indexEurope, cityHotels.indexOf('"', indexEurope));
                        elementLink = cityHotels.slice(link, cityHotels.indexOf('"', link));
                        elementCityId =  cityHotels.slice(cityId, cityHotels.indexOf('"', cityId));

                        stepArray.push({
                            item: element.trim(),
                            value: elementValue.trim(),
                            recom : elementRecom.trim(),
                            europe: elementEurope.trim(),
                            link: elementLink.trim(),
                            cityId : elementCityId.trim()
                        });

                        startIndex = cityHotels.indexOf('<div', index);
                        index = cityHotels.indexOf('blank">' , startIndex)+ 'blank">'.length;
                        indexValue = cityHotels.indexOf('data-value=', startIndex)+ 'data-value="'.length;
                        indexEurope = cityHotels.indexOf('data-europe=', startIndex)+ 'data-europe="'.length;
                        link = cityHotels.indexOf('a href=',startIndex)+ 'a href="'.length;
                        indexRecom = cityHotels.indexOf('<div data-recom=', startIndex )+ '<div data-recom="'.length;
                        cityId = cityHotels.indexOf('data-cityId=', startIndex) + 'data-cityId="'.length;
                    }

                    Object.assign(state,{step12Data :  stepArray});


                    //step11data
                    stepArray1 = [];
                    cityDestination = responseJson.content.cityHotels.citydestanationtree;
                    indexValue = cityDestination.indexOf('data-idx=')+ 'data-idx="'.length;
                    index = cityDestination.indexOf('</i>' )+ '</i>'.length;
                    indexClass = cityDestination.indexOf("checkbox");
                    indexCity = cityDestination.indexOf("data-cityId") + 'data-cityId="'.length;
                    startIndex = 0;
                    while (startIndex !== -1) {
                        element = cityDestination.slice(index, cityDestination.indexOf('</div>', index));
                        elementValue = cityDestination.slice(indexValue, cityDestination.indexOf('"', indexValue) );
                        elementClass = cityDestination.slice(indexClass, cityDestination.indexOf('"', indexClass) );
                        elementCityId =  cityHotels.slice(cityId, cityHotels.indexOf('"', cityId));
                        elementCityIndex = undefined;
                        if(elementClass.indexOf('sub') !== -1) {
                            elementCityIndex = cityDestination.slice(indexCity, cityDestination.indexOf('"', indexCity));
                        }


                        if(elementClass.indexOf('hidden') === -1) {
                            stepArray1.push({
                                item: element.trim(),
                                value: elementValue.trim(),
                                class: elementClass.trim(),
                                cityIndex: elementCityIndex ? elementCityIndex.trim(): undefined,
                                checked: false,
                            })
                        }

                        startIndex = cityDestination.indexOf('<div', index);
                        index = cityDestination.indexOf('</i>', startIndex )+ '</i>'.length;
                        indexValue = cityDestination.indexOf('data-idx=', startIndex)+ 'data-idx="'.length;
                        indexClass = cityDestination.indexOf("checkbox", startIndex);
                        indexCity = cityDestination.indexOf("data-cityId", startIndex) + 'data-cityId="'.length;
                    }

                    let resultObj = {};
                    let idx;


                    for(let mainItem in stepArray1){
                        if(stepArray1[mainItem].class === "checkbox main treefind"){
                            idx = stepArray1[mainItem].value;
                            stepArray1[mainItem].children = {};
                            for(let subItem in stepArray1){
                                if(stepArray1[subItem].class === "checkbox sub"){
                                    if(stepArray1[subItem].cityIndex === idx){
                                        stepArray1[mainItem].children[stepArray1[subItem].value] = stepArray1[subItem];
                                    }
                                }
                            }
                            resultObj[stepArray1[mainItem].value] = stepArray1[mainItem];
                        }
                    }
                    


                   let filters = [];
                    filters.push({item: 'Отображать выбранные'},
                        {item: "Туры принимающие участие в «Ночной охоте»"},
                        {item: "Туры принимающие участие в «Country Week»"},
                        {item: "Must Have"}
                        );

                    Object.assign(state, {step11Data : { data: resultArray, filters: filters} });
                });


            return state;

        default:
            return state;
    }
}

