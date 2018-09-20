import React from "react";
import {  Body, CheckBox, Text, ListItem, Item } from 'native-base';
import {formStyles} from "./style";

export default class CheckBoxComponent extends React.Component{

    constructor(props) {
        super(props);
    };

    handlePress(){
        this.props.onValueChange(!this.props.form[this.props.text], this.props.text);
    }

    componentWillMount(){
        this.props.addToState(this.props.text);
    }


        render() {
            return(

               <ListItem>
                    <CheckBox checked= {this.props.checked}
                        //{ this.props.form[this.props.text] }
                        onPress = {this.handlePress.bind(this)}
                    />
                    <Body>
                    <Text style = {formStyles.checkBoxText}>{this.props.text}</Text>
                    </Body>

               </ListItem>
            )
    }
}