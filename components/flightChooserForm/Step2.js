import React from "react";
import { TouchableOpacity, View } from 'react-native';
import { Item, Picker, Text} from 'native-base';
import * as formAction from "../../actions/FormActions";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavigationActions } from "react-navigation";
import * as childrenActions from "../../actions/ChildrenActions";

 class Step2 extends React.Component {

    static navigationOptions = {
        title: "Шаг2"
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
            <View style={{ flex: 1}}>
                        <Item picker>
                            <Picker
                                mode="dropdown"
                                placeholder="Select One"
                                placeholderStyle={{ color: "#2874F0" }}
                                note={false}
                                selectedValue={form.transport}
                                onValueChange={(value)=> this.onValueChange.bind(this)('transport', value)}
                            >
                                <Picker.Item label="Блоки / Чартеры" value="Блоки / Чартеры" />
                                <Picker.Item label="Без авиа / Автобус" value="Без авиа / Автобус" />
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
                        Step3
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