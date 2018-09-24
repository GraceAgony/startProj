import React from "react";
import {  View ,TouchableOpacity, ScrollView} from 'react-native';
import { Text, } from 'native-base';
import { formStyles } from "./style";
import CheckBoxComponent  from "./CheckBox";
import * as formAction from "../../actions/FormActions";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavigationActions } from "react-navigation";
import * as childrenActions from "../../actions/ChildrenActions";

class Step8 extends React.Component {

    static navigationOptions = {
        title: "Шаг 8".toUpperCase(),
        headerTitleStyle: formStyles.stepNavigationTitle
    };

    constructor(props){
        super(props);
        const {data} = this.props;
        const stepData = data.step8Data.eatList;
        const stepDataType = data.step8Data.tourTypeList;
        let food = {};
        let tourType = {};
        stepData.map((item) =>
        {
            item.checked = false;
            food[item.item] = item;
        });
        stepDataType.map((item) =>
        {
            item.checked = false;
            tourType[item.item] = item;
        });
        this.state = {
            food :food,
            tourType: tourType
        };

   /*    form.step8['food'] = {};
        stepData.map((item) =>
        {
            form.step8['food'][item.item] = false;
        });

        form.step8['tourType'] = {};
        stepDataType.map((item) =>
        {
            form.step8['tourType'][item.item] = false;
        });

        console.log(form);*/
    }

    onValueChange(group, key, value, itemValue) {

       /* const {form} = this.props;
       console.log(form);
        const { formAction } = this.props;
        const {setForm} = formAction;
        setForm({['step8'] : Object.assign(form.step8,
                {
                    [group] : Object.assign(form.step8[group], {[key]: value})

                }
            )});*/
      //  this.forceUpdate();
       /* this.setState(
            {[group] : Object.assign(
                this.state[group],
                    Object.assign(
                        this.state[group][key],
                        {checked: value}
                        ))})*/

        this.setState(
            {[group] : Object.assign(
                    this.state[group],
                    {[key]: { "checked": value,
                               "item": key,
                                "value": itemValue}}
                    )});
    };

    navigate = () => {
        const navigateToStep9 = NavigationActions.navigate({
            routeName: "Step9",
            params: { name: "Step9"}
        });

        const {form} = this.props;
        const { formAction } = this.props;
        const {setForm} = formAction;
        setForm({['step8'] : this.state});

        this.props.navigation.dispatch(navigateToStep9);
    };

    render() {
        const {form} = this.props;
        const {data} = this.props;
        const stepData = data.step8Data.eatList;
        const stepDataType = data.step8Data.tourTypeList;
        return (
            <View style={formStyles.stepBox}>
                    <ScrollView>

                              <Text style = {[formStyles.checkBoxText, {margin: 10}]} >
                                    Питание
                               </Text>
                                {stepData.map((item, index) =>

                                    <CheckBoxComponent
                                                        key={index}
                                                        checked = {this.state.food[item.item].checked}
                                                        text = {item.item}
                                                       onValueChange={
                                                           (checked, key)=> this.onValueChange.bind(this)('food', key, checked, item.value)}
                                    />



                            )}

                            <Text style = {[formStyles.checkBoxText, {margin: 10}]}>
                                Тип тура
                            </Text>
                            {stepDataType.map((item, index)=>
                                    <CheckBoxComponent
                                        key={index}
                                        checked = {this.state.tourType[item.item].checked}
                                        text = {item.item}
                                        onValueChange={(checked, key)=> this.onValueChange.bind(this)('tourType', key, checked,  item.value)}
                                    />
                             )}
                <TouchableOpacity
                    style={formStyles.stepTitle}
                    onPress={this.navigate.bind(this)}
                >
                    <Text   style={formStyles.stepTitleText}>
                        Шаг 9
                    </Text>
                </TouchableOpacity>
                    </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(Step8);