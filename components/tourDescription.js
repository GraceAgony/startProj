import React from "react";
import { View, Image } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Container, Content, Form, Item, Button, Text, Input } from 'native-base';
import { Icon } from 'react-native-elements';
import { NavigationActions } from "react-navigation";
import {formStyles} from "./flightChooserForm/style";
import DOMParser from 'react-native-html-parser';
import ButtonRed from "./flightChooserForm/ButtonRed";

export default class TourDescription extends React.Component {

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
        title: "Описание тура".toUpperCase(),
        headerTitleStyle: formStyles.stepNavigationTitle
    };


    render(){

        return(
            <Container>
                <Content>
                    <View style={{padding: 10}}>
                        <Text style={formStyles.stepNavigationTitle}>СПО-4 Отели Лондона (АВИА) а/к МАУ- БЕЗ БАГАЖА</Text>
                        <Grid>
                            <Row>
                                <Col>
                                    <Image
                                        style={{height: 300, width: 'auto', margin: 10 }}
                                        source={{uri: 'https://files.tpg.ua/pages2/209294/1000_667_fixedwidth%20(1).jpg'}}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Image
                                        style={{height: 300, width: 'auto', margin: 10  }}
                                        source={{uri: 'https://files.tpg.ua/pages2/209294/1000_667_fixedwidth.jpg'}}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Image
                                        style={{height: 300, width: 'auto', margin: 10  }}
                                        source={{uri: 'https://files.tpg.ua/pages2/209294/london_18.jpg'}}
                                     />
                                </Col>
                            </Row>
                            <Row>
                                <Text style={formStyles.descriptionText}>
                                    Несмотря на то, что Лондону почти 2000 лет, в архитектуре города сохранилось немного свидетельств
                                    его почтенного возраста: практически нет античных руин, средневековых улочек и пышных дворцов
                                    Возрождения. Немного найдется в нем сооружений, имеющих возраст более 400 лет. И все же история,
                                    пульс веков и национальный характер чувствуется в облике Лондона, как ни в одном другом мегаполисе
                                    мира, делая британскую столицу желанной целью абсолютно всех путешественников. Всемирно известные
                                    достопримечательности Лондона удивляют туристов своим разнообразием и в то же время исключительной
                                    уникальностью. Столица Великобритании имеет множество классических достопримечательностей,
                                    после просмотра которых никто не остаётся равнодушным. Лондон – это идеальное место для туристов
                                    интересующихся традиционными достопримечательностями древних столиц западной Европы. Иногда создаётся
                                    впечатление, что данный город с многовековой историей имеет собственный интеллект и характер.
                                </Text>
                            </Row>
                            <Row>
                                <Col>
                                    <Image
                                        style={{height: 300, width: 'auto', margin: 10  }}
                                        source={{uri: 'https://files.tpg.ua/pages2/209294/4189883-tower-bridge-london-hd-HD.jpg'}}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Image
                                        style={{height: 300, width: 'auto', margin: 10  }}
                                        source={{uri: 'https://files.tpg.ua/pages2/209294/westminster-abbey-inside-royal-wedding-london-england.jpg'}}
                                    />
                                </Col>
                            </Row>
                            <Row>
                            <Col>
                                <Image
                                    style={{height: 300, width: 'auto', margin: 10  }}
                                    source={{uri: 'https://files.tpg.ua/pages2/209294/article-0-142BD18B000005DC-577_634x391.jpg'}}
                                />
                            </Col>
                        </Row>

                        </Grid>
                    </View>
                </Content>
            </Container>
        )
    }
}
