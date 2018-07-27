import React from "react";
import { StyleSheet, ScrollView, View } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Container, Header, Content, Form, Item, Picker, Left, Body, Right, Button, Title, Text, DatePicker, Input } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { formStyles } from "./style";
import CheckBoxComponent  from "./CheckBox";
import Children from "./Children";

export default class Step1 extends React.Component {
    static navigationOptions = {
        title: "Шаг1"
    };
    render() {
        return (
            <View style={{ flex: 1}}>
                <Text style = {formStyles.title}>Страна отдыха</Text>
                <Item picker>
                    <Picker
                        mode="dropdown"
                        placeholder="Select One"
                        placeholderStyle={{ color: "#2874F0" }}
                        note={false}
                        selectedValue= { this.props.form.country}
                        onValueChange = {this.props.onValueChange}
                    >
                        <Picker.Item label="Австралия" value="Австралия" />
                        <Picker.Item label="Австрия" value="Австрия" />
                    </Picker>
                </Item>
            </View>
        );
    }
}