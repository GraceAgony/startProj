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
        const { formAction } = this.props;
        const {setForm} = formAction;
        setForm({[key] : value});
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
        return (
            <View style={formStyles.stepBox}>
                        <Item picker>
                            <Picker
                               // style={formStyles.picker}
                                mode="dropdown"
                                placeholder="Select One"
                                placeholderStyle={{ color: "#2874F0" }}
                                note={false}
                                selectedValue={form.transport}
                                onValueChange={(value)=> this.onValueChange.bind(this)('transport', value)}
                            >
                                <Picker.Item
                                    label="Блоки / Чартеры"
                                    value="Блоки / Чартеры"
                                    color= "#0e73a7"
                                />
                                <Picker.Item
                                    label="Без авиа / Автобус"
                                    value="Без авиа / Автобус"
                                    color= "#0e73a7"
                                />
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
        form: state.form
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Step2);