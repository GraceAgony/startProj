import React from "react";
import { View, Image } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Container, Content, Form, Item, Button, Text, Input } from 'native-base';
import { Icon } from 'react-native-elements';
import { NavigationActions } from "react-navigation";
import {formStyles} from "./flightChooserForm/style";
import DOMParser from 'react-native-html-parser';
import ButtonRed from "./flightChooserForm/ButtonRed";

export default class TourProgram extends React.Component {

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
        title: "Программа тура".toUpperCase(),
        headerTitleStyle: formStyles.stepNavigationTitle
    };


    render(){

        return(
            <Container>
                <Content>
                    <View style={{padding: 10}}>
                        <Text style={formStyles.stepNavigationTitle}>Программа тура: отели Лондона</Text>
                        <Grid>
                            <Row>
                                 <Text style={{fontWeight: "bold"}}> 1 день.</Text>{/*{"\n"}*/}
                            </Row>
                            <Row>
                                <Text>
                                    Прибытие в аэропорт Лондона. Размещение в отеле. Свободное время. Если Вы впервые в Лондоне и не
                                    знаете как добраться самостоятельно из аэропорта в отель - предлагаем такие варианты:
                                </Text>
                            </Row>
                            <Row>
                                <Text style={{fontWeight: "bold"}}> *Лондонское такси</Text>
                            </Row>
                            <Row>
                                <Text>
                                    – один из символов города. Такси в Лондоне можно заказать по телефону либо остановить
                                    на улице. Знаменитые «черные кэбы» вместимостью до 5 человек – самый дорогой вид
                                    транспорта. Они работают по счетчику: при этом водителю обычно оставляют 10 - 15% от
                                    стоимости проезда. Но знаменитые черные кэбы теперь далеко не единственный вид такси.
                                    Вы увидите такси самых разных цветов, даже розовые. Более дешевые компании часто
                                    работают без счетчиков, поэтому о тарифе стоит осведомиться заранее.
                                </Text>
                            </Row>
                        </Grid>
                    </View>
                </Content>
            </Container>
        )
    }
}
