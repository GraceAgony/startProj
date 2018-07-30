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
        title: "Шаг3"
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
        return (
            <View style={{ flex: 1 }}>
                <Text style = {formStyles.title}>Город отправления</Text>
                <Item picker>
                    <Picker
                        mode="dropdown"
                        placeholder="Select One"
                        placeholderStyle={{ color: "#2874F0" }}
                        note={false}
                        selectedValue={form.city}
                        onValueChange={(value)=> this.onValueChange.bind(this)('city', value)}
                    >
                        <Picker.Item label="Баку" value="Баку" />
                        <Picker.Item label="Киев" value="Киев" />
                    </Picker>
                </Item>
                <TouchableOpacity
                    style={{
                        paddingVertical: 15,
                        paddingHorizontal: 40,
                        backgroundColor: "indigo"
                    }}
                    onPress={this.navigate}
                >
                    <Text style={{ fontSize: 23, fontWeight: "600", color: "white" }}>
                        Step4
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

export default connect(mapStateToProps, mapDispatchToProps)(Step3);