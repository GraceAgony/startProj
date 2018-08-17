import React from "react";
import {  TouchableOpacity, View } from 'react-native';
import {  Item, Picker,  Text, Icon} from 'native-base';
import { formStyles } from "./style";
import * as childrenActions from "../../actions/ChildrenActions";
import * as formAction from "../../actions/FormActions";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavigationActions } from "react-navigation";
import { AppLoading } from "expo";

 class Step1 extends React.Component {

     constructor(props){
         super(props);
         const { navigation } = this.props;
         this.state = {
             data : navigation.state.params.data
         }
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

         const navigateToStep12 = NavigationActions.navigate({
             routeName: "Step12",
             params: { name: "Step12"}
         });
         this.props.navigation.dispatch(navigateToStep12);
     };



     onValueChange(key, value) {
         const { formAction } = this.props;
         const {setForm} = formAction;
         setForm({[key] : value});
         this.forceUpdate();
     }




     /*getData() {
         let stepArray = [];
         fetch("https://www.tpg.ua/ru/choosetour/")
             .then((response) => response.text())
             .then((text) => {
                 html = text;
                 let regexp = new RegExp("<(?:[^>\"']|\"[^\"]*\"|'[^']*')+?\\sid\\s*=\\s*(?:\"cv\"|'cv')(?:[^>\"']|\"[^\"]*\"|'[^']*')*>", 'gmi');
                 let index = html.indexOf('>', html.search(regexp));
                 let element  = html.slice(index +1);
                 let id = 0;
                 while (element.indexOf('cl'+ id) > -1){
                     console.log(element.slice(element.indexOf('>',element.indexOf('cl' +id)+1) +1 ,
                         element.indexOf('</span>',element.indexOf('cl'+ id)+1 )));
                     stepArray.push(
                         element.slice(element.indexOf('>',element.indexOf('cl' +id)+1) +1 ,
                             element.indexOf('</span>',element.indexOf('cl'+ id)+1 ))
                     );
                     id++;
                 }
             });
         return stepArray;
     }*/

    render() {
        const {form} = this.props;
     console.log(this.state.data);
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

                     {/*  {  data.map((item, index) =>
                                <Picker.Item
                                    key={index}
                                    label={item}
                                    value={item}
                                    color= "#0e73a7"
                                />
                       )}*/}
                    { this.state.data.map((item, index) =>
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
                        Шаг 12
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
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
        form: state.form
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Step1);