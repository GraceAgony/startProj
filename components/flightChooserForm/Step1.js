import React from "react";
import {  TouchableOpacity, View } from 'react-native';
import {  Item, Picker,  Text, Icon} from 'native-base';
import { formStyles } from "./style";
import * as childrenActions from "../../actions/ChildrenActions";
import * as formAction from "../../actions/FormActions";
import * as dataActions from "../../actions/dataActions";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavigationActions } from "react-navigation";
import { AppLoading } from "expo";

 class Step1 extends React.Component {

     constructor(props){
         super(props);
     }


    static navigationOptions = {
        title: "Шаг 1".toUpperCase(),
        headerTitleStyle: formStyles.stepNavigationTitle
    };

    navigate = () => {
         const navigateToStep2 = NavigationActions.navigate({
             routeName: "Step2",
             params: { name: "Step2"}
         });
         this.props.navigation.dispatch(navigateToStep2);
     };

     navigate2 = () => {

         const navigateToTourDetails = NavigationActions.navigate({
             routeName: "TourDetails",
             params: { url: "https://www.tpg.ua/ru/tour/?tour=81FA0CC47A59F1BB11E81954B3661296"}
         });
         this.props.navigation.dispatch(navigateToTourDetails);
         const navigateToTourPage = NavigationActions.navigate({
             routeName: "TourPage",
             params: {
                 name: "TourPage",
                 url: "https://www.tpg.ua/ru/tour/?tour=81FA0CC47A59F1BB11E81954B3661296"
             }
         });
         this.props.navigation.dispatch(navigateToTourPage);
     };



     onValueChange(key, value) {
         console.log(this.props);
         const { formAction } = this.props;
         const {setForm} = formAction;
         setForm({[key] : value});
         const {dataAction} = this.props;
         const {setData} = dataAction;
/*         let formData = new FormData();
         formData.append("action", 'selectCountry');
         formData.append("data[city]", '1069');
         formData.append("data[country]", '6');
         formData.append("data[dateFrom]", '27.08.2018');
         formData.append("data[dateTo]", '10.09.2018');
         formData.append("data[nightsFrom]", '3');
         formData.append("data[nightsTo]", '5');
         formData.append("data[spo]", '0');
         formData.append("is_ajax", 'true');
         formData.append("module", 'choosetour');*/


         let details = {
             "action": 'selectCountry',
             "data[city]": '1069',
             "data[country]": '139',
             "data[dateFrom]": '27.08.2018',
             "data[dateTo]": '10.09.2018',
             "data[nightsFrom]": '3',
             "data[nightsTo]": '5',
             "data[spo]": '0',
             "is_ajax": 'true',
             "module": 'choosetour'
         };

         let formBody = [];
         for (let property in details) {
             let encodedKey = encodeURIComponent(property);
             let encodedValue = encodeURIComponent(details[property]);
             formBody.push(encodedKey + "=" + encodedValue);
         }
         formBody = formBody.join("&");

         console.log('start');

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
                  console.log(responseJson.content.cityList);
                  cityList = responseJson.content.cityList.list;

                 //step3 data

                 let stepArray = [];
             //    regexp = new RegExp("<(?:[^>\"']|\"[^\"]*\"|'[^']*')+?\\sid\\s*=\\s*(?:\"ct\"|'ct')(?:[^>\"']|\"[^\"]*\"|'[^']*')*>", 'gmi');

                let index = cityList.indexOf('\">' , cityList.indexOf('data-value'))+2;
                let startIndex =0;
                while (startIndex !== -1) {
                     element = cityList.slice(index, cityList.indexOf('</span>', index));
                     stepArray.push(element);
                    startIndex = cityList.indexOf('data-value', index);
                     index = cityList.indexOf('\">' , startIndex)+2
                 }

                setData({step3Data : stepArray}) ;
                console.log(stepArray);
             })
             .catch((error) => {
                 console.error(error);
             });
         this.forceUpdate();

     }



    render() {
        const {form} = this.props;
        const {data} = this.props;
        const dataStep = data.step1Data;
        console.log(data);

        return (
            <View style={formStyles.stepBox}>
                <Text style = {formStyles.stepLabelText}>{'Страна отдыха'.toUpperCase()}</Text>
                <Item picker>
                    <Picker
                       // style={formStyles.picker}
                        //style={{ borderWidth:1, borderColor: 'blue'}}
                        mode="dropdown"
                        placeholder="Select One"
                        placeholderStyle={{ color: "#2874F0" }}
                        note={false}
                        selectedValue= { form.country}
                        onValueChange = {(value)=> this.onValueChange.bind(this)('country', value)}
                    >

                    { dataStep.map((item, index) =>
                        <Picker.Item
                            key={index}
                            label={item}
                            value={item}
                            color= "#0e73a7"
                        />)}
                    </Picker>
                </Item>
                <TouchableOpacity
                    style={formStyles.stepTitle}
                onPress={this.navigate}
            >
                <Text style={formStyles.stepTitleText}>
                    Шаг 2
                </Text>
            </TouchableOpacity>
               <TouchableOpacity
                    style={formStyles.stepTitle}
                    onPress={this.navigate2}
                >
                    <Text style={formStyles.stepTitleText}>
                        Tour Page
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}


function mapDispatchToProps(dispatch) {
    return {
        childrenActions: bindActionCreators(childrenActions, dispatch),
        formAction: bindActionCreators(formAction, dispatch),
        dataActions: bindActionCreators(dataActions,dispatch)
    }
}

function mapStateToProps (state) {
    return{
        children: state.children,
        form: state.form,
        data : state.data
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Step1);