import React from "react";
import {  View,  TouchableOpacity } from 'react-native';
import { Item, Text, DatePicker } from 'native-base';
import * as formAction from "../../actions/FormActions";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavigationActions } from "react-navigation";
import * as childrenActions from "../../actions/ChildrenActions";
import {formStyles} from "./style";

 class Step5 extends React.Component {

    static navigationOptions = {
        title: "Шаг 5".toUpperCase(),
        headerTitleStyle: formStyles.stepNavigationTitle
    };

    onValueChange(key, value) {
        const { formAction } = this.props;
        const {setForm} = formAction;
        setForm({[key] : value});
        this.forceUpdate();
    };

    navigate = () => {
        const navigateToStep6 = NavigationActions.navigate({
            routeName: "Step6",
            params: { name: "Step6"}
        });
        this.props.navigation.dispatch(navigateToStep6);
    };

    render() {
        const {form} = this.props;
        /*     const {data} = this.props;
           const dateFrom= data.step4Data.price;
            const dateTo = data.step4Data.tourType;*/
        return (
            <View style={formStyles.stepBox}>
                <Item picker>
                    <DatePicker
                        defaultDate={form.firstDate}
                        locale={"ru"}
                        timeZoneOffsetInMinutes={undefined}
                        modalTransparent={false}
                        animationType={"fade"}
                        androidMode={"default"}
                        placeHolderText="Дата заезда С"
                        textStyle={{ color: "green" }}
                        placeHolderTextStyle={{ color: "#d3d3d3" }}
                        onDateChange={(value)=> this.onValueChange.bind(this)('firstDate', (value+1))}
                    />

                </Item>
                <Item picker>
                    <DatePicker
                        defaultDate={form.secondDate}
                        locale={"ru"}
                        timeZoneOffsetInMinutes={undefined}
                        modalTransparent={false}
                        animationType={"fade"}
                        androidMode={"default"}
                        placeHolderText="Дата заезда По"
                        textStyle={{ color: "green" }}
                        placeHolderTextStyle={{ color: "#d3d3d3" }}
                        onDateChange={(value)=> this.onValueChange.bind(this)('secondDate', (value+1))}
                    />

                </Item>
                <TouchableOpacity
                    style={formStyles.stepTitle}
                    onPress={this.navigate}
                >
                    <Text style={formStyles.stepTitleText}>
                       Шаг 6
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
        form: state.form
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Step5);