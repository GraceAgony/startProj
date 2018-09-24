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
        title: "Шаг 9".toUpperCase(),
        headerTitleStyle: formStyles.stepNavigationTitle
    };

     onValueChange(key, value) {
         const { formAction } = this.props;
         const {setForm} = formAction;
         const {data} = this.props;
         const dataStep = data.step9Data[key];

         dataStep.map((item) =>{
             if(item.value === value ){
                 setForm({[key]:  {["value"]: value, ["label"]: item.item}});
             }
         });

         this.forceUpdate();
     };

     onValueChangeInput(key, value){
         const { formAction } = this.props;
         const {setForm} = formAction;
         setForm({[key] : value});
         this.forceUpdate();
     }

     navigate = () => {
         const navigateToStep10 = NavigationActions.navigate({
             routeName: "Step10",
             params: { name: "Step10"}
         });
         this.props.navigation.dispatch(navigateToStep10);
     };


     render() {
         const {form} = this.props;
         const {data} = this.props;
         const currencyList = data.step9Data.currency;
        return (
            <View style={formStyles.stepBox}>
                <Item style={{paddingBottom: 10}}>
                    <Grid>
                        <Col>
                            <Text style = {[formStyles.checkBoxText, {marginVertical: 10}]}  >
                                Цена от
                            </Text>

                                <Input onChangeText = {(value)=> this.onValueChangeInput.bind(this)('priceFrom', value)}
                                       value={form.priceFrom}
                                       style={formStyles.pickerItemsText}
                                />

                        </Col>
                        <Col>
                            <Text style = {[formStyles.checkBoxText, {marginVertical: 10}]} >
                                Цена до
                            </Text>
                                <Input onChangeText = {(value)=> this.onValueChangeInput.bind(this)('priceTo', value)}
                                       value={form.priceTo}
                                       style={formStyles.pickerItemsText}
                                />
                        </Col>
                        <Col>
                            <Text style = {[formStyles.checkBoxText, {marginVertical: 10}]}  >
                                Валюта
                            </Text>
                            <Picker
                                mode="dropdown"
                                placeholder="Select One"
                                placeholderStyle={{ color: "#2874F0" }}
                                note={false}
                                selectedValue={form.currency.value}
                                onValueChange={(value)=> this.onValueChange.bind(this)('currency', value)}
                            >
                                {currencyList.map((item, index) =>

                                    <Picker.Item
                                        key={index}
                                        label={item.item.toString()}
                                        value={item.value}
                                        color="#0e73a7"
                                    />)}
                            </Picker>
                        </Col>
                    </Grid>
                </Item>
                <TouchableOpacity
                    style={formStyles.stepTitle}
                    onPress={this.navigate}
                >
                    <Text style={formStyles.stepTitleText}>
                        Шаг 10
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

export default connect(mapStateToProps, mapDispatchToProps)(Step9);