import React from "react";
import { View } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Container, Content, Form, Item, Button, Text, Input } from 'native-base';
import { Icon } from 'react-native-elements';
import {formStyles} from "./flightChooserForm/style";
import DOMParser from 'react-native-html-parser';

export default class TourDetails extends React.Component {

    parse(html){
        console.log('parse');
        const parser = new DOMParser.DOMParser();
        html = '<html><body>'+html + '</body></html>';
        const parsed = parser.parseFromString(html, 'text/html');
        console.log('parsed');
        console.log(parsed.getElementsByTagName('article'));
    }

    getHtml(url){

        let html = '';
        fetch(url)
            .then((response) => response.text())
            .then((text)=>{  html =  text;  console.log('getHtml'); this.parse(html); });
    }


    render() {
        let url = this.props.navigation.state.params.url;
        this.getHtml(url);
        return (
            <Container>
                <Content>
                    <View>

                    </View>
                </Content>
            </Container>
        )
    }
}