import React from "react";
import {  View,TouchableOpacity } from 'react-native';
import { Col, Grid } from "react-native-easy-grid";
import {  Item, Picker, Text, Input } from 'native-base';
import { formStyles } from "./style";
import * as formAction from "../../actions/FormActions";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavigationActions } from "react-navigation";
import * as childrenActions from "../../actions/ChildrenActions";

 class Step9 extends React.Component {

    static navigationOptions = {
        title: "Шаг9"
    };

     onValueChange(key, value) {
         const { formAction } = this.props;
         const {setForm} = formAction;
         setForm({[key] : value});
         this.forceUpdate();
     };

     navigate = () => {
         const navigateToStep10 = NavigationActions.navigate({
             routeName: "Step10",
             params: { name: "Step10"}
         });
         this.props.navigation.dispatch(navigateToStep10);
     };


     render() {
         const {form} = this.props;
        return (
            <View style={{ flex: 1}}>
                <Item>
                    <Grid>
                        <Col>
                            <Text style = {formStyles.title} >
                                Цена от
                            </Text>
                            <Item >
                                <Input onChangeText = {(value)=> this.onValueChange.bind(this)('priceFrom', value)}
                                       value={form.priceFrom}
                                />
                            </Item>
                        </Col>
                        <Col>
                            <Text style = {formStyles.title} >
                                Цена до
                            </Text>
                            <Item >
                                <Input onChangeText = {(value)=> this.onValueChange.bind(this)('priceTo', value)}
                                       value={form.priceTo}/>
                            </Item>
                        </Col>
                        <Col>
                            <Text style = {formStyles.title} >
                                Валюта
                            </Text>
                            <Picker
                                mode="dropdown"
                                placeholder="Select One"
                                placeholderStyle={{ color: "#2874F0" }}
                                note={false}
                                selectedValue={form.currency}
                                onValueChange={(value)=> this.onValueChange.bind(this)('currency', value)}
                            >
                                <Picker.Item label="грн" value="грн" />
                                <Picker.Item label="USD" value="USD" />
                            </Picker>
                        </Col>
                    </Grid>
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
                        Step10
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

export default connect(mapStateToProps, mapDispatchToProps)(Step9);