import React from 'react';
import {formStyles} from "./style";
import { Col, Row, Grid } from "react-native-easy-grid";
import { Item, Picker, Text, Input } from 'native-base';
import {  View } from 'react-native';


export default class Children extends React.Component {

    constructor(props) {
        super(props);
    };

    onValueChangeChildren(value) {

        let ch = [];
        for (let i = 0; i < value; i++) {
            ch.push(i+1);
        }


        this.props.setChildren({children: ch, childrenCount: value} );
    }

    onChangeAge(value, key){
        this.props.onChangeAge(key+1, value)
    }



    render()
{
    console.log("render");
    let childrenArray = this.props.childrenArray;
    let children = childrenArray.children;
    let childrenCount = childrenArray.childrenCount;
    let that = this;
    return (
        <View>
            <Item>
                <Grid>
                    <Row>
                        <Col>
                            <Text style = {formStyles.stepLabelText}>Детей</Text>
                            <Picker
                                style={formStyles.picker}
                                selectedValue={childrenCount}
                                onValueChange={this.onValueChangeChildren.bind(this)}
                                mode="dropdown"
                                placeholder="Select One"
                                placeholderStyle={{color: "#2874F0"}}
                                note={false}

                            >
                                <Picker.Item
                                    label="0"
                                    value="0"
                                    color= "#0e73a7"
                                />
                                <Picker.Item
                                    label="1"
                                    value="1"
                                    color= "#0e73a7"
                                />
                                <Picker.Item
                                    label="2"
                                    value="2"
                                    color= "#0e73a7"
                                />
                                <Picker.Item
                                    label="3"
                                    value="3"
                                    color= "#0e73a7"
                                />
                                <Picker.Item
                                    label="4"
                                    value="4"
                                    color= "#0e73a7"
                                />
                            </Picker>
                        </Col>
                    </Row>
                </Grid>
            </Item>
            <Item>
                <Grid>
                    {

                        children.map(function (item, i) {

                            return (
                                <Row key={i}>
                                    <Col size={1}>
                                        <Text  style = {formStyles.stepLabelText} >{i + 1}-й:</Text>
                                    </Col>
                                    <Col size={3}>
                                        <Item>
                                            <Input
                                                style={formStyles.pickerItemsText}
                                                onChangeText={(text) => that.onChangeAge.bind(that)(text, i)}
                                            />
                                        </Item>
                                    </Col>
                                    <Col size={1}>
                                        <Text  style = {formStyles.stepLabelText}>{"лет".toUpperCase()}</Text>
                                    </Col>
                                </Row>
                            )
                        })}
                </Grid>
            </Item>
        </View>
    )
}}

