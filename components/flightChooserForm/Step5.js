import React from "react";
import { StyleSheet, ScrollView, View } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Container, Header, Content, Form, Item, Picker, Left, Body, Right, Button, Title, Text, DatePicker, Input } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { formStyles } from "./style";
import CheckBoxComponent  from "./CheckBox";
import Children from "./Children";

export default class Step5 extends React.Component {
    static navigationOptions = {
        title: "Шаг5"
    };
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Item picker>
                    <DatePicker
                        defaultDate={this.props.form.firstDate}
                        locale={"ru"}
                        timeZoneOffsetInMinutes={undefined}
                        modalTransparent={false}
                        animationType={"fade"}
                        androidMode={"default"}
                        placeHolderText="Дата заезда С"
                        textStyle={{ color: "green" }}
                        placeHolderTextStyle={{ color: "#d3d3d3" }}
                        onDateChange={(value)=> this.props.onValueChange('firstDate', (value+1))}
                    />

                </Item>
                <Item picker>
                    <DatePicker
                        defaultDate={this.props.form.secondDate}
                        locale={"ru"}
                        timeZoneOffsetInMinutes={undefined}
                        modalTransparent={false}
                        animationType={"fade"}
                        androidMode={"default"}
                        placeHolderText="Дата заезда По"
                        textStyle={{ color: "green" }}
                        placeHolderTextStyle={{ color: "#d3d3d3" }}
                        onDateChange={(value)=> this.props.onValueChange('secondDate', (value+1))}
                    />

                </Item>
            </View>
        )};
}