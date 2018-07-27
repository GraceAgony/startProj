import React from "react";
import { StyleSheet, ScrollView, View } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Container, Header, Content, Form, Item, Picker, Left, Body, Right, Button, Title, Text, DatePicker, Input } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { formStyles } from "./style";
import CheckBoxComponent  from "./CheckBox";
import Children from "./Children";

export default class Step4 extends React.Component {
    static navigationOptions = {
        title: "Шаг4"
    };
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text style = {formStyles.title}>Источник цены</Text>
                <Item picker>
                    <Picker mode="dropdown"
                            placeholder="Select One"
                            placeholderStyle={{ color: "#2874F0" }}
                            note={false}
                            selectedValue={this.props.form.price}
                            onValueChange={(value)=> this.props.onValueChange('price', value)}>
                        {/*
                                this.props.categories.map((item,index)=>{
                                    return <Picker.Item key={index} label={item} value={item} />;
                                })
                            */}
                        <Picker.Item label="Все" value="Все" />
                        <Picker.Item label="Отели Барселоны" value="Отели Барселоны" />
                    </Picker>
                </Item>
                <Text style = {formStyles.title}>Тип тура</Text>
                <Item picker>
                    <Picker
                        mode="dropdown"
                        placeholder="Select One"
                        placeholderStyle={{ color: "#2874F0" }}
                        note={false}
                        selectedValue={this.props.form.type}
                        onValueChange={(value)=> this.props.onValueChange('type', value)}
                    >
                        <Picker.Item label="Все" value="Все" />

                    </Picker>
                </Item>
            </View>
        )};
}