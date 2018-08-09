import React from "react";
import { View } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Container, Content, Form, Item, Button, Text, Input } from 'native-base';
import { Icon } from 'react-native-elements';
import { NavigationActions } from "react-navigation";
import {formStyles} from "./flightChooserForm/style";
import ButtonRed from "./flightChooserForm/ButtonRed"

export default class SearchResult extends React.Component {

    navigate = () => {
        const navigateToTourDetails = NavigationActions.navigate({
            routeName: "TourDetails",
            params: { url: "https://www.tpg.ua/ru/tour/?tour=81FA0CC47A59F1BB11E81954B3661296"}
        });
        this.props.navigation.dispatch(navigateToTourDetails);
        const navigateToTourPage = NavigationActions.navigate({
            routeName: "TourPage",
            params: {
                name: "TourPage",
                url: "https://www.tpg.ua/ru/tour/?tour=81FA0CC47A59F1BB11E81954B3661296"
            }
        });
        this.props.navigation.dispatch(navigateToTourPage);
    };

    render() {
        const { navigation } = this.props;
         let that = this;
        tours = [
        {
            number: 1,
            dates: "15.08.2018/ 18.08.2018",
            nights:3,
            hotel: "Barkston Rooms 2*",
            resort: "London",
            food: 'RO',
            room: 'Dbl (Shared Dormitory), 2 Adults',
            SPO: "СПО-4 Отели Лондона (АВИА) а/к МАУ- БЕЗ БАГАЖА",
            numbersOfRooms: "call",
            tickets: "EE",
            price: "19101грн 602€"
        }
        ];


        return (
            <Container>
                <Content>
                    <View style={formStyles.stepBox}>
                        <Item>
                        <Grid>
                            {tours.map(function (item, i) {
                                    return (
                                       <Grid key={i}>
                                           <Row>
                                                <Col style={formStyles.searchResult }>
                                                    <Text>№{item.number}</Text>
                                                </Col>
                                            </Row>
                                           <Row>
                                               <Col style={formStyles.searchResult }>
                                                  <Text>Дата вылета/Дата прилета</Text>
                                               </Col>
                                               <Col style={formStyles.searchResult }>
                                                   <Text>{item.dates}</Text>
                                               </Col>
                                           </Row>
                                           <Row>
                                               <Col style={formStyles.searchResult }>
                                                   <Text>Ночей</Text>
                                               </Col>
                                               <Col style={formStyles.searchResult }>
                                                   <Text>{item.nights}</Text>
                                               </Col>
                                           </Row>
                                           <Row>
                                               <Col style={formStyles.searchResult }>
                                                   <Text>Отель</Text>
                                               </Col>
                                               <Col style={formStyles.searchResult }>
                                                   <Text>{item.hotel}</Text>
                                               </Col>
                                           </Row>
                                           <Row>
                                               <Col style={formStyles.searchResult }>
                                                   <Text>Курорт</Text>
                                               </Col>
                                               <Col style={formStyles.searchResult }>
                                                   <Text>{item.resort}</Text>
                                               </Col>
                                           </Row>
                                           <Row>
                                               <Col style={formStyles.searchResult }>
                                                   <Text>Тип питания</Text>
                                               </Col>
                                               <Col style={formStyles.searchResult }>
                                                   <Text>{item.food}</Text>
                                               </Col>
                                           </Row>
                                           <Row>
                                               <Col style={formStyles.searchResult }>
                                                   <Text>Номер/Тип размещения</Text>
                                               </Col>
                                               <Col style={formStyles.searchResult }>
                                                   <Text>{item.room}</Text>
                                               </Col>
                                           </Row>
                                           <Row>
                                               <Col style={formStyles.searchResult }>
                                                   <Text>Тип цены в формате маски (SPO)</Text>
                                               </Col>
                                               <Col style={formStyles.searchResult }>
                                                   <Text>{item.SPO}</Text>
                                               </Col>
                                            </Row>
                                           <Row>
                                               <Col style={formStyles.searchResult }>
                                                   <Text>Кол-во номеров</Text>
                                               </Col>
                                               <Col style={formStyles.searchResult }>
                                                   <Icon
                                                       name='phone'
                                                       type='font-awesome'
                                                       color='#00e600'
                                                   />
                                               </Col>
                                           </Row>
                                           <Row>
                                               <Col style={formStyles.searchResult }>
                                                   <Text>Билеты</Text>
                                               </Col>
                                               <Col style={formStyles.searchResult }>
                                                   <Text>{item.tickets}</Text>
                                               </Col>
                                           </Row>
                                           <Row>
                                               <Col style={formStyles.searchResult }>
                                                   <Text>Цена</Text>
                                               </Col>
                                               <Col style={formStyles.searchResult }>
                                                   <Text>{item.price}</Text>
                                               </Col>
                                           </Row>
                                           <Row style={formStyles.buttonContainer}>
                                               <Col>
                                                   <ButtonRed
                                                       text = 'Заказать'
                                                       onPress={()=> {
                                                           console.log("press");
                                                       }}/>
                                               </Col>
                                               <Col>
                                                   <ButtonRed
                                                       text = 'Больше...'
                                                       onPress={that.navigate}
                                                   />
                                               </Col>
                                           </Row>
                                       </Grid>
                                    )
                                })}
                        </Grid>
                        </Item>
                    </View>
                </Content>
            </Container>
        )};
}
