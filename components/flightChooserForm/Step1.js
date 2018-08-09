import React from "react";
import {  TouchableOpacity, View } from 'react-native';
import {  Item, Picker,  Text, Icon} from 'native-base';
import { formStyles } from "./style";
import * as childrenActions from "../../actions/ChildrenActions";
import * as formAction from "../../actions/FormActions";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavigationActions } from "react-navigation";

 class Step1 extends React.Component {

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

    render() {
        const {form} = this.props;


        return (
            <View style={formStyles.stepBox}>
                <Text style = {formStyles.stepLabelText}>{'Страна отдыха'.toUpperCase()}</Text>
                <Item picker  style={formStyles.picker}>
                    <Picker
                        style={formStyles.picker}
                        mode="dropdown"
                        placeholder="Select One"
                        placeholderStyle={{ color: "#2874F0" }}
                        note={false}
                        selectedValue= { form.country}
                        onValueChange = {(value)=> this.onValueChange.bind(this)('country', value)}
                    >
                        <Picker.Item
                            label="Австралия"
                            value="Австралия"
                            color= "#0e73a7"
                        />
                        <Picker.Item
                            label="Австрия"
                            value="Австрия"
                            color= "#0e73a7"
                        />
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