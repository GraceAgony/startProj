import React from "react";
import { View, Image } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Container, Content, Form, Item, Button, Text, Input } from 'native-base';
import { Icon } from 'react-native-elements';
import { NavigationActions } from "react-navigation";
import {formStyles} from "./flightChooserForm/style";
import DOMParser from 'react-native-html-parser';
import ButtonRed from "./flightChooserForm/ButtonRed";

export default class TourPrice extends React.Component {

    /*
       parse(html){
            try {
                const parser = new DOMParser.DOMParser();
                const parsed = parser.parseFromString(html, 'text/html');
            }catch (e) {
                console.log(e);
            }
        }*/

    /*parse(html){
        console.log(XPathResult);
        console.log(window.XPathResult);
        let headings = html.evaluate("//body/h1", html, null,
            XPathResult.ANY_TYPE, null
        );

        console.log("headings" + headings);
    }*/


    static navigationOptions = {
        title: "Цены и условия".toUpperCase(),
        headerTitleStyle: formStyles.stepNavigationTitle
    };


    render(){

        return(
            <Container>
                <Content>
                    <View style={{padding: 10}}>
                        <Text style={formStyles.stepNavigationTitle}>Цены и условия: Отели Лондона (авиа)</Text>
                        <Grid>
                            <Row>
                                <Text style={{fontWeight: "bold"}}>В стоимость включено:</Text>
                            </Row>
                            <Row >
                                <Icon
                                    name='circle'
                                    type='font-awesome'
                                    color='black'
                                    size = {10}
                                />
                                <Text style={[formStyles.searchResultText, {marginLeft: 5}]}> международный авиаперелёт; </Text>
                            </Row>
                            <Row >
                                <Icon
                                    name='circle'
                                    type='font-awesome'
                                    color='black'
                                    size = {10}
                                />
                                <Text style={[formStyles.searchResultText, {marginLeft: 5}]}>проживание в выбранном отеле, на завтраках; </Text>
                            </Row>
                            <Row >
                                <Icon
                                    name='circle'
                                    type='font-awesome'
                                    color='black'
                                    size = {10}
                                />
                                <Text style={[formStyles.searchResultText, {marginLeft: 5}]}>медицинская страховка.</Text>
                            </Row>
                            <Row>
                                <Text style={{fontWeight: "bold"}}>Дополнительно оплачивается:</Text>
                            </Row>
                            <Row >
                                <Icon
                                    name='circle'
                                    type='font-awesome'
                                    color='black'
                                    size = {10}
                                />
                                <Text style={[formStyles.searchResultText, {marginLeft: 5}]}>консульский сбор - 150 евро/ человек; </Text>
                            </Row>
                            <Row >
                                <Icon
                                    name='circle'
                                    type='font-awesome'
                                    color='black'
                                    size = {10}
                                />
                                <Text style={[formStyles.searchResultText, {marginLeft: 5}]}> индивидуальный трансфер а/п Гатвик - отель Лондона - 95евро/нетто за машину в одну сторону</Text>
                            </Row>
                        </Grid>
                    </View>
                </Content>
            </Container>
        )
    }
}
