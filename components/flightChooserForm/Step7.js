import React from "react";
import { StyleSheet, ScrollView, View } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Container, Header, Content, Form, Item, Picker, Left, Body, Right, Button, Title, Text, DatePicker, Input } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { formStyles } from "./style";
import CheckBoxComponent  from "./CheckBox";
import Children from "./Children";


export default class Step7 extends React.Component {
    static navigationOptions = {
        title: "Шаг7"
    };
    render() {
        return (
            <View style={{ flex: 1}}>
                <Item picker>
                    <Grid>
                        <Row>
                            <Col>
                                <Text style = {formStyles.title} >Ночей: С</Text>
                                <Picker
                                    mode="dropdown"
                                    placeholder="Select One"
                                    placeholderStyle={{ color: "#2874F0" }}
                                    note={false}
                                    selectedValue={this.props.form.nightFrom}
                                    onValueChange={(value)=> this.props.onValueChange('nightFrom', value)}
                                >
                                    <Picker.Item label="1" value="1" />
                                    <Picker.Item label="2" value="2" />
                                </Picker>
                            </Col>
                            <Col>
                                <Text style = {formStyles.title} >По</Text>
                                <Picker
                                    mode="dropdown"
                                    placeholder="Select One"
                                    placeholderStyle={{ color: "#2874F0" }}
                                    note={false}
                                    selectedValue={this.props.form.nightTo}
                                    onValueChange={(value)=> this.props.onValueChange('nightTo', value)}
                                >
                                    <Picker.Item label="1" value="1" />
                                    <Picker.Item label="2" value="2" />
                                </Picker>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <CheckBoxComponent text = {this.props.text}
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