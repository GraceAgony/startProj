import React from "react";
import { View, Image, TouchableOpacity,TouchableHighlight, ImageBackground} from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Container, Content, Form, Item, Button, Text, Input } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { formStyles } from "./style";
import CheckBoxComponent  from "./CheckBox";
import * as formAction from "../../actions/FormActions";
import { connect } from 'react-redux';
import * as childrenActions from "../../actions/ChildrenActions";
import { bindActionCreators } from 'redux';
import SearchResult from "./../SearchResult"
import {NavigationActions} from "react-navigation";

export default class ButtonRed extends React.Component {
    constructor(props){
        super(props);
    }


    render(){
        return(
            <View
                style = {formStyles.buttonContainer}>
                <ImageBackground
                    resizeMode='cover'
                    source={{uri: 'https://cdn.tpg.ua/ZjlkNWU5YWUx/templates/scms_default/images/patterns/det_btn.png'}}
                    style={{flex: 1}}>
                    <View >
                        <Button
                            style={formStyles.button}
                            onPress={this.props.onPress}
                        >
                            <Text>{this.props.text}</Text>
                        </Button>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}