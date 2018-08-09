import React from "react";
import {  View ,  TouchableOpacity } from 'react-native';
import { Col } from "react-native-easy-grid";
import { Container, Content,  Item, Picker,  Text } from 'native-base';
import { formStyles } from "./style";
import Children from "./Children";
import * as formAction from "../../actions/FormActions";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavigationActions } from "react-navigation";
import * as childrenActions from "../../actions/ChildrenActions";

class Step6 extends React.Component {

    static navigationOptions = {
        title: "Шаг 6".toUpperCase(),
        headerTitleStyle: formStyles.stepNavigationTitle
    };

    onValueChange(key, value) {
        const { formAction } = this.props;
        const {setForm} = formAction;
        setForm({[key] : value});
        this.forceUpdate();
    };

    navigate = () => {
        const navigateToStep7 = NavigationActions.navigate({
            routeName: "Step7",
            params: { name: "Step7"}
        });
        this.props.navigation.dispatch(navigateToStep7);
    };

    render() {
        const {form} = this.props;
        const { children } = this.props;
        const { setChildren } = this.props.childrenActions;

        return (
            <Container>
                <Content>
            <View style={formStyles.stepBox}>
                <Item picker>
                    <Col>
                        <Text  style = {formStyles.stepLabelText} >Взрослых</Text>
                        <Picker
                            style={formStyles.picker}
                            mode="dropdown"
                            placeholder="Select One"
                            placeholderStyle={{ color: "#2874F0" }}
                            note={false}
                            selectedValue={form.people}
                            onValueChange={(value)=> this.onValueChange.bind(this)('people', value)}
                        >
                            <Picker.Item
                                label="1"
                                value="1"
                                color= "#0e73a7"
                            />
                            <Picker.Item
                                label="2"
                                value="2"
                                color= "#0e73a7"
                            />
                        </Picker>
                    </Col>
                </Item>
                <Children
                          childrenArray = {children}
                          setChildren = {setChildren}
                          onChangeAge = {(key, age)=> this.onValueChange.bind(this)(key+'children', age)}
                />
                <TouchableOpacity
                    style={formStyles.stepTitle}
                    onPress={this.navigate}
                >
                    <Text style={formStyles.stepTitleText}>
                       Шаг 7
                    </Text>
                </TouchableOpacity>
            </View>
                </Content>
            </Container>
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

export default connect(mapStateToProps, mapDispatchToProps)(Step6);