import React from "react";
import {  View ,TouchableOpacity, ScrollView} from 'react-native';
import { Col, Grid, Row } from "react-native-easy-grid";
import {  Item, Text, } from 'native-base';
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
        const {form} = this.props;
        const {data} = this.props;
        const stepData = data.step8Data.eatList;
        const stepDataType = data.step8Data.tourTypeList;

       form.step8['food'] = {};
        stepData.map((item) =>
        {
            form.step8['food'][item.item] = false;
        });

        form.step8['tourType'] = {};
        stepDataType.map((item) =>
        {
            form.step8['tourType'][item.item] = false;
        });

        console.log(form);
    }

    onValueChange(group, key, value) {

        const {form} = this.props;
        console.log(form);
        const { formAction } = this.props;
        const {setForm} = formAction;
        setForm({['step8'] :
                {
                    [group] : Object.assign(form.step8[group], {[key]: value})

                }
        });
        this.forceUpdate();
    };

    navigate = () => {
        const navigateToStep9 = NavigationActions.navigate({
            routeName: "Step9",
            params: { name: "Step9"}
        });
        this.props.navigation.dispatch(navigateToStep9);
    };

    render() {
        const {form} = this.props;
        const {data} = this.props;
        const stepData = data.step8Data.eatList;
        const stepDataType = data.step8Data.tourTypeList;

        console.log('render ');
        console.log(form);

        return (
            <View style={formStyles.stepBox}>
                    <ScrollView>

                                <Text style = {[formStyles.checkBoxText, {margin: 10}]} >
                                    Питание
                               </Text>
                                {stepData.map((item, index) =>

                                    <CheckBoxComponent
                                                        key={index}
                                                        checked = {form.step8['food'][item.item]}
                                                        text = {item.item}
                                                       onValueChange={(checked, key)=> this.onValueChange.bind(this)('food', key, checked)}
                                                       addToState = {(key)=> this.onValueChange.bind(this)('food', key, false)}
                                                       form = {form}
                                    />



                            )}

                            <Text style = {[formStyles.checkBoxText, {margin: 10}]}>
                                Тип тура
                            </Text>
                            {stepDataType.map((item, index)=>
                                    <CheckBoxComponent
                                        key={index}
                                        checked = {form.step8['tourType'][item.item]}
                                        text = {item.item}
                                        onValueChange={(checked, key)=> this.onValueChange.bind(this)('tourType', key, checked)}
                                        addToState = {(key)=> this.onValueChange.bind(this)('tourType', key, false)}
                                        form = {form}
                                    />
                             )}
                <TouchableOpacity
                    style={formStyles.stepTitle}
                    onPress={this.navigate}
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