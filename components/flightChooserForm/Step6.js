import React from "react";
import { StyleSheet, ScrollView, View ,  TouchableOpacity } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Container, Header, Content, Form, Item, Picker, Left, Body, Right, Button, Title, Text, DatePicker, Input } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { formStyles } from "./style";
import CheckBoxComponent  from "./CheckBox";
import Children from "./Children";
import * as formAction from "../../actions/FormActions";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavigationActions } from "react-navigation";
import * as childrenActions from "../../actions/ChildrenActions";


class Step6 extends React.Component {

    static navigationOptions = {
        title: "Шаг6"
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
            <View style={{ flex: 1}}>
                <Item picker>
                    <Col>
                        <Text style = {formStyles.title}>Взрослых</Text>
                        <Picker
                            mode="dropdown"
                            placeholder="Select One"
                            placeholderStyle={{ color: "#2874F0" }}
                            note={false}
                            selectedValue={form.people}
                            onValueChange={(value)=> this.onValueChange.bind(this)('people', value)}
                        >
                            <Picker.Item label="1" value="1" />
                            <Picker.Item label="2" value="2" />
                        </Picker>
                    </Col>
                </Item>
                <Children
                          childrenArray = {children}
                          setChildren = {setChildren}
                          onChangeAge = {(key, age)=> this.onValueChange.bind(this)(key+'children', age)}
                />
                <TouchableOpacity
                    style={{
                        paddingVertical: 15,
                        paddingHorizontal: 40,
                        backgroundColor: "indigo"
                    }}
                    onPress={this.navigate}
                >
                    <Text style={{ fontSize: 23, fontWeight: "600", color: "white" }}>
                        Step7
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