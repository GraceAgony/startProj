import React from "react";
import {formStyles} from "./style";
import { Col, Row, Grid } from "react-native-easy-grid";
import { Container, Header, Content, Form, Item, Picker, Left, Body, Right, Button, CheckBox, Title, Text, DatePicker, Input,ListItem } from 'native-base';
import { StyleSheet, ScrollView, View } from 'react-native';

export default class Children extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            children: [],
            childrenCount: 0,
        };
    };

    onValueChangeChildren(value){
        let ch = [];
        for( let i=0; i< value; i++){
            ch.push(1);
        }
        this.setState({children: ch, childrenCount: value}, ()=>{});
        console.log(this.state.childrenCount);
    }

    render(){
        return(
            <View>
           <Item>
               <Grid>
               <Row>
            <Col>
                <Text style = {formStyles.title}>Детей</Text>
                <Picker
                    selectedValue={ this.state.childrenCount }
                    onValueChange={this.onValueChangeChildren.bind(this)}
                    mode="dropdown"
                    placeholder="Select One"
                    placeholderStyle={{ color: "#2874F0" }}
                    note={false}

                >
                    <Picker.Item label="0" value="0" />
                    <Picker.Item label="1" value="1" />
                    <Picker.Item label="2" value="2" />
                    <Picker.Item label="3" value="3" />
                    <Picker.Item label="4" value="4" />
                </Picker>
            </Col>
               </Row>
               </Grid>
           </Item>
            <Item>
                <Grid>
                    {
            this.state.children.map(function(item, i){
                return (
                    <Row key = {i}>
                    <Col size={1}>
                        <Text>1-й:</Text>
                    </Col>
                    <Col size={3}>
                        <Item >
                            <Input />
                        </Item>
                    </Col>
                    <Col size={1}>
                        <Text>лет</Text>
                    </Col>
                </Row>
                )
            })}
                </Grid>
           </Item>
            </View>

        )
    }

}