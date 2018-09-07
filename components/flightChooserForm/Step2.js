import React from "react";
import { TouchableOpacity, View } from 'react-native';
import { Item, Picker, Text} from 'native-base';
import * as formAction from "../../actions/FormActions";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavigationActions } from "react-navigation";
import * as childrenActions from "../../actions/ChildrenActions";
import {formStyles} from "./style";

 class Step2 extends React.Component {

    static navigationOptions = {
        title: "Шаг 2".toUpperCase(),
        headerTitleStyle: formStyles.stepNavigationTitle
    };

    onValueChange(key, value) {
        const {data} = this.props;
        const dataStep = data.step2Data;
        const { formAction } = this.props;
        const {setForm} = formAction;
        const {form} = this.props;

        dataStep.map((item) =>{
            if(item.value === value ){
                setForm({[key]:  {["value"]: value, ["label"]: item.item}});
            }
        });


        let details = {
            "action": 'turnSwiper',
            "data[city]": form.city.value,
            "data[country]": form.country.value,
            "data[dateFrom]": form.firstDate,
            "data[dateTo]": form.secondDate,
            "data[nightsFrom]": form.nightFrom,
            "data[nightsTo]": form.nightTo,
            'data[regFlight]':	'0',
            "data[spo]": '45098',
            "data[waviaIDX]":	'1',
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


        fetch('https://www.tpg.ua/ru/choosetour/index.php', {
            method: 'POST',
            headers: {
                "Content-Type":"application/x-www-form-urlencoded",
                "Accept" :"application/json, text/javascript, */*; q=0.01",
                "User-Agent" :"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:61.0) Gecko/20100101 Firefox/61.0",
                "Host":"www.tpg.ua",
                "Cookie":"uniqTime=1535631265; __cfduid=d1c488d93dc2745f2f1bc42e5187382a11531742364; _ga=GA1.2.934164999.1531742366; biatv-cookie={%22firstVisitAt%22:1531742368%2C%22visitsCount%22:20%2C%22campaignCount%22:1%2C%22currentVisitStartedAt%22:1535631392%2C%22currentVisitLandingPage%22:%22https://www.tpg.ua/ru/choosetour/%22%2C%22currentVisitOpenPages%22:1%2C%22location%22:%22https://www.tpg.ua/ru/choosetour/%22%2C%22userAgent%22:%22Mozilla/5.0%20(X11%3B%20Ubuntu%3B%20Linux%20x86_64%3B%20rv:61.0)%20Gecko/20100101%20Firefox/61.0%22%2C%22language%22:%22en-us%22%2C%22encoding%22:%22utf-8%22%2C%22screenResolution%22:%221920x1080%22%2C%22currentVisitUpdatedAt%22:1535631392%2C%22utmDataCurrent%22:{%22utm_source%22:%22(direct)%22%2C%22utm_medium%22:%22(none)%22%2C%22utm_campaign%22:%22(direct)%22%2C%22utm_content%22:%22(not%20set)%22%2C%22utm_term%22:%22(not%20set)%22%2C%22beginning_at%22:1531742368}%2C%22campaignTime%22:1531742368%2C%22utmDataFirst%22:{%22utm_source%22:%22(direct)%22%2C%22utm_medium%22:%22(none)%22%2C%22utm_campaign%22:%22(direct)%22%2C%22utm_content%22:%22(not%20set)%22%2C%22utm_term%22:%22(not%20set)%22%2C%22beginning_at%22:1531742368}%2C%22geoipData%22:{%22country%22:%22Ukraine%22%2C%22region%22:%22%22%2C%22city%22:%22%22%2C%22org%22:%22Scientific%20-Industrial%20Firm%20Volz%20Ltd%22}}; uniqId=1534407843.7468; PHPSESSID=8jb0k1s15d2c0s8c9el1akoo22; _gid=GA1.2.554953648.1535464799; bingc-activity-data={%22numberOfImpressions%22:1%2C%22activeFormSinceLastDisplayed%22:30%2C%22pageviews%22:19%2C%22callWasMade%22:0%2C%22updatedAt%22:1535631405}; _gat=1",
                "Referer":"https://www.tpg.ua/ru/choosetour/",
                "X-Requested-With":"XMLHttpRequest"
            },
            body: formBody,
        })
            .then((response) => response.json())
            .then((responseJson) => {
               // console.log(responseJson);
            });

                this.forceUpdate();
    }

     navigate = () => {
         const navigateToStep3 = NavigationActions.navigate({
             routeName: "Step3",
             params: { name: "Step3"}
         });
         this.props.navigation.dispatch(navigateToStep3);
     };


     render() {
        const {form} = this.props;
         const {data} = this.props;
         const dataStep = data.step2Data;

        return (
            <View style={formStyles.stepBox}>
                        <Item picker>
                            <Picker
                               // style={formStyles.picker}
                                mode="dropdown"
                                placeholder="Select One"
                                placeholderStyle={{ color: "#2874F0" }}
                                note={false}
                                selectedValue={form.transport.value}
                                onValueChange={(value)=> this.onValueChange.bind(this)('transport', value)}
                            >
                                { dataStep.map((item, index) =>
                                    <Picker.Item
                                        key={index}
                                        label={item.item}
                                        value={item.value}
                                        color= "#0e73a7"
                                    />)}
                            </Picker>
                        </Item>
                <TouchableOpacity
                    style={formStyles.stepTitle}
                    onPress={this.navigate}
                >
                    <Text style={formStyles.stepTitleText}>
                        Шаг 3
                    </Text>
                </TouchableOpacity>
            </View>
        )};
}


function mapDispatchToProps(dispatch) {
    return {
        childrenActions: bindActionCreators(childrenActions, dispatch),
        formAction: bindActionCreators(formAction, dispatch)
    }
}

function mapStateToProps (state) {
    return{
        children: state.children,
        form: state.form,
        data: state.data
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Step2);