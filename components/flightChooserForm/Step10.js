import React from "react";
import { StyleSheet, ScrollView, View } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Container, Header, Content, Form, Item, Picker, Left, Body, Right, Button, Title, Text, DatePicker, Input } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { formStyles } from "./style";
import CheckBoxComponent  from "./CheckBox";
import Children from "./Children";

export default class Step10 extends React.Component {
    static navigationOptions = {
        title: "Шаг10"
    };
    render() {
        return (
            <View style={{ flex: 1}}>
                <Item>
                    <Grid>
                        <Row>
                            <Text style = {formStyles.title} >
                                Гарантированные места
                            </Text>
                        </Row>
                        <Row>
                            <Col>
                                <CheckBoxComponent text={this.props.text1}
                                                   onValueChange={(cheked, key)=> this.props.onValueChange(key, cheked)}
                                                   addToState = {(key)=> this.props.onValueChange(key, false)}
                                                   form = {this.props.form}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <CheckBoxComponent text={this.props.text2}
                                                   onValueChange={(cheked, key)=> this.props.onValueChange(key, cheked)}
                                                   addToState = {(key)=> this.props.onValueChange(key, false)}
                                                   form = {this.props.form}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <CheckBoxComponent text={this.props.text3}
                                                   onValueChange={(cheked, key)=> this.props.onValueChange(key, cheked)}
                                                   addToState = {(key)=> this.props.onValueChange(key, false)}
                                                   form = {this.props.form}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <CheckBoxComponent text={this.props.text4}
                                                   onValueChange={(cheked, key)=> this.props.onValueChange(key, cheked)}
                                                   addToState = {(key)=> this.props.onValueChange(key, false)}
                                                   form = {this.props.form}
                                />
                            </Col>
                        </Row>
                    </Grid>
                </Item>
            </View>
        )};
}