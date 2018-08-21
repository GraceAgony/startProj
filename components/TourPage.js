import React from "react";
import { View } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Container, Content, Form, Item, Button, Text, Input } from 'native-base';
import { Icon } from 'react-native-elements';
import { NavigationActions } from "react-navigation";
import {formStyles} from "./flightChooserForm/style";
import DOMParser from 'react-native-html-parser';
import ButtonRed from "./flightChooserForm/ButtonRed";

export default class TourPage extends React.Component {

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
        title: "Тур".toUpperCase(),
        headerTitleStyle: formStyles.stepNavigationTitle
    };

    getHtml(url){
        console.log(window.XPathResult);
        fetch(url)
            .then((response) => response.text())
            .then((text)=>{
                html = text;
               // this.parse(html);
                //let regexp = new RegExp("<(?:[^>\"']|\"[^\"]*\"|'[^']*')+?\\sid\\s*=\\s*(?:\"cv\"|'cv')(?:[^>\"']|\"[^\"]*\"|'[^']*')*>", 'gmi');
                //console.log(html.search(regexp))
            });
    }

    render(){
        const { navigation } = this.props;
        let url = navigation.state.params.url;
        this.getHtml(url);
        return(
                <Container>
                    <Content>
                        <View style={{padding: 10}}>
                            <Text style={formStyles.stepNavigationTitle}>СПО-4 Отели Лондона (АВИА) а/к МАУ- БЕЗ БАГАЖА</Text>
                                <Grid>
                                    <Row>
                                        <Col style={formStyles.tourResultName }>
                                            <Text style={formStyles.tourResultNameText}>Название тура:</Text>
                                        </Col>
                                        <Col style={formStyles.tourResultName }>
                                            <Text style={formStyles.searchResultText}>СПО-4 Отели Лондона (АВИА) а/к МАУ- БЕЗ БАГАЖА</Text>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col style={formStyles.tourResultName }>
                                            <Text  style={formStyles.tourResultNameText}>Даты:</Text>
                                        </Col>
                                        <Col style={formStyles.tourResultName }>
                                            <Text style={formStyles.searchResultText}>с 22.02.2018 по 31.12.2018</Text>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col style={formStyles.tourResultName }>
                                            <Text  style={formStyles.tourResultNameText}>Стоимость:</Text>
                                        </Col>
                                        <Col style={formStyles.tourResultName }>
                                            <Text style={[{color: 'rgb(245, 20, 0)'}, formStyles.searchResultText]}>
                                                от грн 6236 (€ 192)*
                                            </Text>
                                            <Text style={[ formStyles.searchResultText, {color: 'blue'}]}
                                                  onPress={() => {}}>
                                                Найти эту цену</Text>
                                            <Text style={[ formStyles.searchResultText, {color: 'blue'}]}
                                                  onPress={() => {}}>
                                                Посмотреть цену на ближайшие даты</Text>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col style={formStyles.tourResultName }>
                                            <Text  style={formStyles.tourResultNameText}>Город:</Text>
                                        </Col>
                                        <Col style={formStyles.tourResultName }>
                                            <Text style={formStyles.searchResultText}>Лондон</Text>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col style={formStyles.tourResultName }>
                                            <Text  style={formStyles.tourResultNameText}>Страна:</Text>
                                        </Col>
                                        <Col style={formStyles.tourResultName }>
                                            <Text style={[ formStyles.searchResultText, {color: 'blue'}]}
                                                  onPress={() => {}}>
                                                 Великобритания</Text>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col style={formStyles.tourResultName }>
                                            <Text  style={formStyles.tourResultNameText}>В стоимость включено:</Text>
                                        </Col>
                                        <Col style={formStyles.tourResultName }>
                                            <Row>
                                                <Icon
                                                    name='circle'
                                                    type='font-awesome'
                                                    color='rgb(245, 20, 0)'
                                                    size = {10}
                                                />
                                                <Text style={[formStyles.searchResultText, {marginLeft: 5}]}>Проживание</Text>
                                            </Row>
                                            <Row>
                                                <Icon
                                                    name='circle'
                                                    type='font-awesome'
                                                    color='rgb(245, 20, 0)'
                                                    size = {10}
                                                />
                                                <Text style={[formStyles.searchResultText, {marginLeft: 5}]}>Авиаперелет</Text>
                                            </Row>
                                            <Row>
                                                <Icon
                                                    name='circle'
                                                    type='font-awesome'
                                                    color='rgb(245, 20, 0)'
                                                    size = {10}

                                                />
                                                <Text style={[formStyles.searchResultText, {marginLeft: 5}]}>Медицинская Страховка</Text>
                                            </Row>
                                        </Col>

                                    </Row>
                                    <Row>
                                        <Col style={formStyles.tourResultName }>
                                            <Text  style={formStyles.tourResultNameText}>Оплачивается отдельно:</Text>
                                        </Col>

                                        <Col style={formStyles.tourResultName }>
                                            <Row >
                                                <Icon
                                                    name='circle'
                                                    type='font-awesome'
                                                    color='rgb(245, 20, 0)'
                                                    size = {10}
                                                />
                                                <Text style={[formStyles.searchResultText, {marginLeft: 5}]}>Трансфер</Text>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Text style={[{color: 'rgb(245, 20, 0)'}, formStyles.searchResultText]}>
                                            *
                                        </Text>
                                        <Text style={formStyles.searchResultText}> - Минимальная стоимость ½ DBL в этом туре</Text>
                                    </Row>
                                    <Row>
                                        <Col style={formStyles.tourResultName }>
                                            <Text  style={formStyles.tourResultNameText}>Поделиться:</Text>
                                        </Col>
                                        <Col style={formStyles.tourResultName }>
                                            <Row style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
                                                <Icon
                                                    type='font-awesome'
                                                    name='facebook-official'
                                                    color='rgb(59, 89, 152)'
                                                    size = {35}

                                                />
                                                <Icon
                                                    type='font-awesome'
                                                    name='vk'
                                                    color='#4c75a3'
                                                    size = {35}

                                                />
                                                <Icon
                                                    type='font-awesome'
                                                    name='twitter-square'
                                                    color='#00aced'
                                                    size = {35}
                                                />
                                                <Icon
                                                    type='font-awesome'
                                                    name='google-plus-square'
                                                    color='#d34836'
                                                    size = {35}
                                                />
                                            </Row>
                                        </Col>
                                    </Row>
                                    <ButtonRed
                                        text = 'Описание тура'
                                        onPress={()=>{}}
                                    />
                                    <ButtonRed
                                        text = 'Программа тура'
                                        onPress={()=>{}}
                                    />
                                    <ButtonRed
                                        text = 'Цены и условия'
                                        onPress={()=>{}}
                                    />
                                </Grid>
                        </View>
                    </Content>
                </Container>
        )
    }
}
