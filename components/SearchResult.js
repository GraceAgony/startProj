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
                    <View style={[{padding: 10}, formStyles.stepBox]}>
                        <Item>
                        <Grid>
                            {tours.map(function (item, i) {
                                    return (
                                       <Grid key={i}>
                                           <Row>
                                                <Col style={formStyles.searchResultName }>
                                                    <Text style={formStyles.searchResultNameText}>№</Text>
                                                </Col>
                                               <Col style={formStyles.searchResult }>
                                                   <Text style={formStyles.searchResultText}>{item.number}</Text>
                                               </Col>
                                            </Row>
                                           <Row>
                                               <Col style={formStyles.searchResultName }>
                                                  <Text  style={formStyles.searchResultNameText}>Дата вылета/Дата прилета</Text>
                                               </Col>
                                               <Col style={formStyles.searchResult }>
                                                   <Text style={formStyles.searchResultText}>{item.dates}</Text>
                                               </Col>
                                           </Row>
                                           <Row>
                                               <Col style={formStyles.searchResultName }>
                                                   <Text  style={formStyles.searchResultNameText}>Ночей</Text>
                                               </Col>
                                               <Col style={formStyles.searchResult }>
                                                   <Text style={formStyles.searchResultText}>{item.nights}</Text>
                                               </Col>
                                           </Row>
                                           <Row>
                                               <Col style={formStyles.searchResultName }>
                                                   <Text  style={formStyles.searchResultNameText}>Отель</Text>
                                               </Col>
                                               <Col style={formStyles.searchResult }>
                                                   <Text style={formStyles.searchResultText}>{item.hotel}</Text>
                                               </Col>
                                           </Row>
                                           <Row>
                                               <Col style={formStyles.searchResultName }>
                                                   <Text  style={formStyles.searchResultNameText}>Курорт</Text>
                                               </Col>
                                               <Col style={formStyles.searchResult }>
                                                   <Text style={formStyles.searchResultText}>{item.resort}</Text>
                                               </Col>
                                           </Row>
                                           <Row>
                                               <Col style={formStyles.searchResultName }>
                                                   <Text  style={formStyles.searchResultNameText}>Тип питания</Text>
                                               </Col>
                                               <Col style={formStyles.searchResult }>
                                                   <Text style={formStyles.searchResultText}>{item.food}</Text>
                                               </Col>
                                           </Row>
                                           <Row>
                                               <Col style={formStyles.searchResultName }>
                                                   <Text  style={formStyles.searchResultNameText}>Номер/Тип размещения</Text>
                                               </Col>
                                               <Col style={formStyles.searchResult }>
                                                   <Text style={formStyles.searchResultText}>{item.room}</Text>
                                               </Col>
                                           </Row>
                                           <Row>
                                             {/* <Col style={formStyles.searchResult }>
                                                   <Text>Тип цены в формате маски (SPO)</Text>
                                               </Col>*/}
                                               <Col style={formStyles.searchResultName }>
                                                   <Text style={ formStyles.searchResultNameText}
                                                         onPress={() => {that.navigate()}}>
                                                       Тип цены в формате маски (SPO)
                                                   </Text>
                                               </Col>
                                               <Col style={formStyles.searchResult }>
                                                   <Text style={[ formStyles.searchResultText, {color: 'blue'}]}>
                                                         {item.SPO}</Text>
                                               </Col>
                                            </Row>
                                           <Row>
                                               <Col style={formStyles.searchResultName }>
                                                   <Text  style={formStyles.searchResultNameText}>Кол-во номеров</Text>
                                               </Col>
                                               <Col style={formStyles.searchResult }>
                                                   <Icon
                                                       name='phone-square'
                                                       type='font-awesome'
                                                       color='#00e600'
                                                   />
                                               </Col>
                                           </Row>
                                           <Row>
                                               <Col style={formStyles.searchResultName }>
                                                   <Text  style={formStyles.searchResultNameText}>Билеты</Text>
                                               </Col>
                                               <Col style={formStyles.searchResult }>
                                                   <Text style={formStyles.searchResultText}>{item.tickets}</Text>
                                                   <Icon
                                                       name='airplane'
                                                       type='material-community'
                                                       color='#00e600'

                                                   />

                                               </Col>
                                           </Row>
                                           <Row>
                                               <Col style={formStyles.searchResultName }>
                                                   <Text  style={formStyles.searchResultNameText}>Цена</Text>
                                               </Col>
                                               <Col style={formStyles.searchResult }>
                                                   <Text style={formStyles.searchResultText}>{item.price}</Text>
                                               </Col>
                                           </Row>
                                   {/*        <View style={{display: 'flex' , flexDirection: 'row', justifyContent: 'space-around'}}>
                                                   <ButtonRed
                                                       text = 'Заказать'
                                                       onPress={()=> {
                                                           console.log("press");
                                                       }}/>

                                                   <ButtonRed
                                                       text = 'Больше...'
                                                       onPress={that.navigate}
                                                   />
                                           </View>*/}
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
