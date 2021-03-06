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
         const {form} = this.props;
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
     navigate3 = () => {
         const navigateToStep11 = NavigationActions.navigate({
             routeName: "Step11",
             params: { name: "Step11"}
         });
         this.props.navigation.dispatch(navigateToStep11);
     };


     onValueChange(key, value) {
         const {data} = this.props;
         const dataStep = data.step1Data;
         const {form} = this.props;
         const { formAction } = this.props;
         const {setForm} = formAction;
         const {dataActions} = this.props;
         const {setData} = dataActions;
         const {getData} = dataActions;

         dataStep.map((item) =>{
             if(item.value === value ){
                 setForm({[key]:  {["value"]: value, ["label"]: item.city}});
             }
         });

         let details = {
             "action": 'selectCountry',
             "data[city]": form.city.value,
             "data[country]": form.country.value,
             "data[dateFrom]": form.firstDate,
             "data[dateTo]": form.secondDate,
             "data[nightsFrom]": form.nightFrom,
             "data[nightsTo]": form.nightTo,
             "data[spo]": '0',
             "is_ajax": 'true',
             "module": 'choosetour'
         };
       getData(details);

         this.forceUpdate();
     }


    render() {
        const {form} = this.props;
        const {data} = this.props;
        const dataStep = data.step1Data;
        let that = this;
      //  console.log(form);
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
                        selectedValue = { form.country.value }
                        onValueChange = {(value)=> {this.onValueChange.bind(this)('country', value)}}
                    >

                    { dataStep.map((item, index) =>
                        <Picker.Item
                            key={index}
                            label={item.country}
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
                <TouchableOpacity
                    style={formStyles.stepTitle}
                    onPress={this.navigate3}
                >
                    <Text style={formStyles.stepTitleText}>
                        Шаг 11
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