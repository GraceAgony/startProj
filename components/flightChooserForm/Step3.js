import React from "react";
import {  TouchableOpacity,View } from 'react-native';
import {Item, Picker,  Text } from 'native-base';
import { formStyles } from "./style";
import * as formAction from "../../actions/FormActions";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavigationActions } from "react-navigation";
import * as childrenActions from "../../actions/ChildrenActions";

 class Step3 extends React.Component {
    static navigationOptions = {
        title: "Шаг 3".toUpperCase(),
        headerTitleStyle: formStyles.stepNavigationTitle
    };

    onValueChange(key, value) {
        const { formAction } = this.props;
        const {setForm} = formAction;
        setForm({[key] : value});
        this.forceUpdate();
    }

     navigate = () => {
         const navigateToStep4 = NavigationActions.navigate({
             routeName: "Step4",
             params: { name: "Step4"}
         });
         this.props.navigation.dispatch(navigateToStep4);
     };

    render() {
        const {form} = this.props;
        const {data} = this.props;
        const dataStep = data.step3Data;
        console.log(dataStep);
        return (
            <View style={formStyles.stepBox}>
                <Text style = {formStyles.stepLabelText}> {"Город отправления".toUpperCase()}</Text>
                <Item picker>
                    <Picker
                       // style={formStyles.picker}
                        mode="dropdown"
                        placeholder="Select One"
                        placeholderStyle={{ color: "#2874F0" }}
                        note={false}
                        selectedValue={form.city}
                        onValueChange={(value)=> this.onValueChange.bind(this)('city', value)}
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
                    <Text  style={formStyles.stepTitleText}>
                        Шаг 4
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

export default connect(mapStateToProps, mapDispatchToProps)(Step3);