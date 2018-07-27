import React from "react";
import { StyleSheet, ScrollView, View } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Container, Header, Content, Form, Item, Picker, Left, Body, Right, Button, Title, Text, DatePicker, Input } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { formStyles } from "./style";
import CheckBoxComponent  from "./CheckBox";
import Children from "./Children";

export default class Step9 extends React.Component {
    static navigationOptions = {
        title: "Шаг9"
    };
    render() {
        return (
            <View style={{ flex: 1}}>
                <Item>
                    <Grid>
                        <Col>
                            <Text style = {formStyles.title} >
                                Цена от
                            </Text>
                            <Item >
                                <Input onChangeText = {(value)=> this.props.onValueChange('priceFrom', value)}
                                       value={this.props.form.priceFrom}
                                />
                            </Item>
                        </Col>
                        <Col>
                            <Text style = {formStyles.title} >
                                Цена до
                            </Text>
                            <Item >
                                <Input onChangeText = {(value)=> this.props.onValueChange('priceTo', value)}
                                       value={this.props.form.priceTo}/>
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
                                selectedValue={this.props.form.currency}
                                onValueChange={(value)=> this.props.onValueChange('currency', value)}
                            >
                                <Picker.Item label="грн" value="грн" />
                                <Picker.Item label="USD" value="USD" />
                            </Picker>
                        </Col>
                    </Grid>
                </Item>
            </View>
        )};
}