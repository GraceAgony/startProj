import React from 'react';
import {formStyles} from "./style";
import { Col, Row, Grid } from "react-native-easy-grid";
import { Item, Picker, Text, Input } from 'native-base';
import {  View } from 'react-native';
import children from "../../reducers/childrenReducer";


export default class Children extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            child: [],
        };

    };

    onValueChangeChildren(value) {

        let childrenArray = [];
        for(let i=1; i<= value; i++){
            childrenArray.push(i);
        }
        this.props.setChildren({childrenCount: value} );
       this.setState({child: childrenArray});
       this.forceUpdate();
    }

    onChangeAge(value, key){
        this.props.onChangeAge(key+1, value)
    }



    render()
{

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
                               // style={formStyles.picker}
                                selectedValue={childrenCount}
                                onValueChange={this.onValueChangeChildren.bind(this)}
                                mode="dropdown"
                                placeholder="Select One"
                                placeholderStyle={{color: "#2874F0"}}
                                note={false}

                            >
                               { children.map((item, index) =>

                                    <Picker.Item
                                        key={index}
                                        label={item.toString()}
                                        value={item}
                                        color= "#0e73a7"
                                    />)}
                            </Picker>
                        </Col>
                    </Row>
                </Grid>
            </Item>
            <Item>
                <Grid>
                    {

                        that.state.child.map(function (item, i) {

                            return (
                                <Row key={i} style={{height: 50, margin: 5 }}>
                                    <Col size={1}>
                                        <Text  style = {formStyles.stepLabelText} >{i + 1}-й:</Text>
                                    </Col>
                                    <Col size={3}>
                                            <Input
                                                style={formStyles.pickerItemsText}
                                                onChangeText={(text) => that.onChangeAge.bind(that)(text, i)}
                                            />
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

