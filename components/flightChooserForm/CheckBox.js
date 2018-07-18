import React from "react";
import {  Body, CheckBox, Text, ListItem } from 'native-base';

export default class CheckBoxComponent extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            checked: false,
        };
    };

        render() {
            return(
                <ListItem>
                    <CheckBox checked={ this.state.checked }
                        onPress = {() => this.setState({ checked: !this.state.checked })}
                    />
                    <Body>
                    <Text>{this.props.text}</Text>
                    </Body>
                </ListItem>
            )
    }
}