import React from "react";
import { StyleSheet, ScrollView, View } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Container, Header, Content, Form, Item, Picker, Left, Body, Right, Button, Title, Text, DatePicker, Input } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { formStyles } from "./style";
import CheckBoxComponent  from "./CheckBox";
import Children from "./Children";

export default class Step6 extends React.Component {
    static navigationOptions = {
        title: "Шаг6"
    };
    render() {
        return (
            <View style={{ flex: 1}}>
                <Item picker>
                    <Col>
                        <Text style = {formStyles.title}>Взрослых</Text>
                        <Picker
                            mode="dropdown"
                            placeholder="Select One"
                            placeholderStyle={{ color: "#2874F0" }}
                            note={false}
                            selectedValue={this.props.form.people}
                            onValueChange={(value)=> this.props.onValueChange('people', value)}
                        >
                            <Picker.Item label="1" value="1" />
                            <Picker.Item label="2" value="2" />
                        </Picker>
                    </Col>
                </Item>
                <Children
                          childrenArray = {this.props.childrenArray}
                          setChildren = {this.props.setChildren}
                          onChangeAge = {(key, age)=> this.props.onValueChange(key+'children', age)}
                />
            </View>
        )};
}