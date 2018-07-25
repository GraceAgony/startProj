import React from "react";
import {  Body, CheckBox, Text, ListItem } from 'native-base';

export default class CheckBoxComponent extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            checked: false,
        };
    };

    handlePress(){
        let checkedNew = !this.state.checked;
        this.setState({ checked: checkedNew });
        this.props.onValueChange(checkedNew, this.props.text);
    }

    componentWillMount(){
        this.props.addToState(this.props.text);
    }


        render() {
            return(
                <ListItem>
                    <CheckBox checked={ this.state.checked }
                        onPress = {this.handlePress.bind(this)}
                    />
                    <Body>
                    <Text>{this.props.text}</Text>
                    </Body>
                </ListItem>
            )
    }
}