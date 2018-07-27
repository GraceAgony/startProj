import React from "react";
import { StyleSheet, ScrollView, View } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Container, Header, Content, Form, Item, Picker, Left, Body, Right, Button, Title, Text, DatePicker, Input } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { formStyles } from "./style";
import CheckBoxComponent  from "./CheckBox";
import Children from "./Children";

export default class Step2 extends React.Component {
    static navigationOptions = {
        title: "Шаг2"
    };
    render() {
        return (
            <View style={{ flex: 1}}>
                        <Item picker>
                            <Picker
                                mode="dropdown"
                                placeholder="Select One"
                                placeholderStyle={{ color: "#2874F0" }}
                                note={false}
                                selectedValue={this.props.form.transport}
                                onValueChange={(value)=> this.props.onValueChange('transport', value)}
                            >
                                <Picker.Item label="Блоки / Чартеры" value="Блоки / Чартеры" />
                                <Picker.Item label="Без авиа / Автобус" value="Без авиа / Автобус" />
                            </Picker>
                        </Item>
            </View>
        )};
}