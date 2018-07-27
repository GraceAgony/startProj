import React from "react";
import { StyleSheet, ScrollView, View } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Container, Header, Content, Form, Item, Picker, Left, Body, Right, Button, Title, Text, DatePicker, Input } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { formStyles } from "./style";
import CheckBoxComponent  from "./CheckBox";
import Children from "./Children";

export default class Step8 extends React.Component {
    static navigationOptions = {
        title: "Шаг8"
    };
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Item>
                    <Grid>
                        <Col>
                            <Text style = {formStyles.title} >
                                Питание
                            </Text>
                            <CheckBoxComponent text = {this.props.text1}
                                               onValueChange={this.props.onValueChange}
                                               addToState = {this.props.addToState}
                                               form = {this.props.form}
                            />
                            <CheckBoxComponent text = {this.props.text2}
                                               onValueChange={this.props.onValueChange}
                                               addToState = {this.props.addToState}
                                               form = {this.props.form}
                            />
                        </Col>
                        <Col>
                            <Text style = {formStyles.title} >
                                Категория отеля
                            </Text>
                            <CheckBoxComponent text = {this.props.text3}
                                               onValueChange={this.props.onValueChange}
                                               addToState = {this.props.addToState}
                                               form = {this.props.form}
                            />
                            <CheckBoxComponent text = {this.props.text4}
                                               onValueChange={this.props.onValueChange}
                                               addToState = {this.props.addToState}
                                               form = {this.props.form}
                            />
                        </Col>
                    </Grid>
                </Item>
            </View>
        )};
}