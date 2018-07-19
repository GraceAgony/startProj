import React from "react";
import { StyleSheet, ScrollView, View } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Container, Header, Content, Form, Item, Picker, Left, Body, Right, Button, CheckBox, Title, Text, DatePicker, Input,ListItem } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { formStyles } from "./style";
import CheckBoxComponent  from "./CheckBox";
import Children from "./Children";

export default class FlightChooserForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selected2: undefined,
            chosenDate: new Date(),
        };
    }

    onValueChanged(value) {
        this.setState({
            selected2: value
        });
    }

    setDate(value){

    }



    render() {
<<<<<<< HEAD
        //const children = this.props.children;
=======
        const children = this.props.children;
>>>>>>> master
        return(
            <Container style={formStyles.container}>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                    <Title>Подбор тура</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Text>Cancel</Text>
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <Form>
                        <Text style = {formStyles.title}>Страна отдыха</Text>
                        <Item picker>
                            <Picker
                                mode="dropdown"
                                placeholder="Select One"
                                placeholderStyle={{ color: "#2874F0" }}
                                note={false}
                                selectedValue={this.state.selected2}
                                onValueChange={this.onValueChanged.bind(this)}
                            >
                                <Picker.Item label="Австралия" value="key0" />
                                <Picker.Item label="Австрия" value="key1" />
                            </Picker>
                        </Item>
                        <Text></Text>
                        <Item picker>
                            <Picker
                                mode="dropdown"
                                placeholder="Select One"
                                placeholderStyle={{ color: "#2874F0" }}
                                note={false}
                                selectedValue={this.state.selected2}
                                onValueChange={this.onValueChanged.bind(this)}
                            >
                                <Picker.Item label="Блоки / Чартеры" value="key0" />
                                <Picker.Item label="Без авиа / Автобус" value="key1" />
                            </Picker>
                        </Item>
                        <Text style = {formStyles.title}>Город отправления</Text>
                        <Item picker>
                            <Picker
                                mode="dropdown"
                                placeholder="Select One"
                                placeholderStyle={{ color: "#2874F0" }}
                                note={false}
                                selectedValue={this.state.selected2}
                                onValueChange={this.onValueChanged.bind(this)}
                            >
                                <Picker.Item label="Баку" value="key0" />
                                <Picker.Item label="Киев" value="key1" />
                            </Picker>
                        </Item>
                        <Text style = {formStyles.title}>Источник цены</Text>
                        <Item picker>
                        <Picker mode="dropdown"
                                placeholder="Select One"
                                placeholderStyle={{ color: "#2874F0" }}
                                note={false}
                                selectedValue={this.state.selectedCategory}
                                onValueChange={this.onValueChanged.bind(this)}>
                           {/*
                                this.props.categories.map((item,index)=>{
                                    return <Picker.Item key={index} label={item} value={item} />;
                                })
                            */}
                            <Picker.Item label="Все" value="key0" />
                            <Picker.Item label="Отели Барселоны" value="key1" />
                        </Picker>
                        </Item>
                        <Text style = {formStyles.title}>Тип тура</Text>
                        <Item picker>
                        <Picker
                            mode="dropdown"
                            placeholder="Select One"
                            placeholderStyle={{ color: "#2874F0" }}
                            note={false}
                            selectedValue={this.state.selected}
                            onValueChange={this.onValueChanged.bind(this)}
                        >
                            <Picker.Item label="Все" value="key0" />

                        </Picker>
                        </Item>
                        <Item picker>
                            <DatePicker
                                defaultDate={new Date()}
                                locale={"ru"}
                                timeZoneOffsetInMinutes={undefined}
                                modalTransparent={false}
                                animationType={"fade"}
                                androidMode={"default"}
                                placeHolderText="Дата заезда С"
                                textStyle={{ color: "green" }}
                                placeHolderTextStyle={{ color: "#d3d3d3" }}
                                onDateChange={this.setDate}
                            />
                            <Text>
                                Date: {this.state.chosenDate.toString().substr(4, 12)}
                            </Text>
                        </Item>
                        <Item picker>
                            <DatePicker
                                defaultDate={new Date()}
                                locale={"ru"}
                                timeZoneOffsetInMinutes={undefined}
                                modalTransparent={false}
                                animationType={"fade"}
                                androidMode={"default"}
                                placeHolderText="Дата заезда По"
                                textStyle={{ color: "green" }}
                                placeHolderTextStyle={{ color: "#d3d3d3" }}
                                onDateChange={this.setDate}
                            />
                            <Text>
                                Date: {this.state.chosenDate.toString().substr(4, 12)}
                            </Text>
                        </Item>
                        <Item picker>
                            <Col>
                                <Text style = {formStyles.title}>Взрослых</Text>
                                <Picker
                                    mode="dropdown"
                                    placeholder="Select One"
                                    placeholderStyle={{ color: "#2874F0" }}
                                    note={false}
                                    selectedValue={this.state.selected}
                                    onValueChange={this.onValueChanged.bind(this)}
                                >
                                    <Picker.Item label="1" value="key0" />

                                </Picker>
                            </Col>
                        </Item>
                        <Children/>
                        <Item picker>
                            <Grid>
                            <Row>
                            <Col>
                                <Text style = {formStyles.title} >Ночей: С</Text>
                                <Picker
                                    mode="dropdown"
                                    placeholder="Select One"
                                    placeholderStyle={{ color: "#2874F0" }}
                                    note={false}
                                    selectedValue={this.state.selected}
                                    onValueChange={this.onValueChanged.bind(this)}
                                >
                                    <Picker.Item label="1" value="key0" />

                                </Picker>
                            </Col>
                            <Col>
                                <Text style = {formStyles.title} >По</Text>
                                <Picker
                                    mode="dropdown"
                                    placeholder="Select One"
                                    placeholderStyle={{ color: "#2874F0" }}
                                    note={false}
                                    selectedValue={this.state.selected}
                                    onValueChange={this.onValueChanged.bind(this)}
                                >
                                    <Picker.Item label="0" value="key0" />

                                </Picker>
                            </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <CheckBoxComponent text = "Раннее бронирование"/>
                                </Col>
                            </Row>
                            </Grid>
                        </Item>
                        <Item>
                            <Grid>
                                <Col>
                                    <Text style = {formStyles.title} >
                                        Питание
                                    </Text>
                                    <CheckBoxComponent text = "RO"/>
                                    <CheckBoxComponent text = "BB"/>
                                </Col>
                                <Col>
                                    <Text style = {formStyles.title} >
                                        Категория отеля
                                    </Text>
                                    <CheckBoxComponent text = "2*"/>
                                    <CheckBoxComponent text = "3*"/>
                                </Col>
                            </Grid>
                        </Item>
                        <Item>
                            <Grid>
                                <Col>
                                    <Text style = {formStyles.title} >
                                        Цена от
                                    </Text>
                                    <Item >
                                        <Input />
                                    </Item>
                                </Col>
                                <Col>
                                    <Text style = {formStyles.title} >
                                        Цена до
                                    </Text>
                                    <Item >
                                        <Input />
                                    </Item>
                                </Col>
                                <Col>
                                    <Text style = {formStyles.title} >
                                        Валюта
                                    </Text>
                                    <Picker
                                        mode="dropdown"
                                        placeholder="Select One"
                                        placeholderStyle={{ color: "#2874F0" }}
                                        note={false}
                                        selectedValue={this.state.selected}
                                        onValueChange={this.onValueChanged.bind(this)}
                                    >
                                        <Picker.Item label="грн" value="key0" />
                                        <Picker.Item label="USD" value="key0" />
                                    </Picker>
                                </Col>
                            </Grid>
                        </Item>
                        <Item>
                            <Grid>
                                <Row>
                                    <Text style = {formStyles.title} >
                                        Гарантированные места
                                    </Text>
                                </Row>
                                <Row>
                                    <Col>
                                        <CheckBoxComponent text = "Авиа/Автобус"/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <CheckBoxComponent text = "Отель"/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <CheckBoxComponent text = "Не отображать stop-sale"/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <CheckBoxComponent text = "Не отображать Promo туры"/>
                                    </Col>
                                </Row>
                            </Grid>
                        </Item>
                        <Item>
                            <Grid>
                                <Row>
                                        <Text style = {formStyles.title} >Города и курорты</Text>
                                </Row>
                                <Row>
                                    <Col>
                                        <CheckBoxComponent text = "Отображать выбранные"/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col size={3}>
                                        <Item>
                                            <Input placeholder="Поиск" />
                                        </Item>
                                    </Col>
                                    <Col size={1}>
                                        <Button transparent>
                                            <Text>Поиск</Text>
                                        </Button>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <CheckBoxComponent text = "Туры принимающие участие в «Ночной охоте»"/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <CheckBoxComponent text = "Туры принимающие участие в «Country Week»"/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <CheckBoxComponent text = "Must Have"/>
                                    </Col>
                                </Row>
                            </Grid>
                        </Item>
                        <Item>
                            <Grid>
                                <Row>
                                    <Text style = {formStyles.title} >Отель</Text>
                                </Row>
                                <Row>
                                    <Col>
                                        <CheckBoxComponent text = "Отображать выбранные"/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col size={3}>
                                        <Item >
                                            <Input placeholder="Поиск" />
                                        </Item>
                                    </Col>
                                    <Col size={1}>
                                        <Button transparent>
                                            <Text>Поиск</Text>
                                        </Button>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <CheckBoxComponent text = "Только рекомендованные отели"/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <CheckBoxComponent text = "Только ориентированы на европейский рынок"/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <CheckBoxComponent text = "Только эксклюзивные отели"/>
                                    </Col>
                                </Row>
                            </Grid>
                        </Item>
                        <View style={[formStyles.buttonContainer, formStyles.marginSm]}>
                            <Button success style={[formStyles.button, formStyles.marginSm]}>
                                <Text>Подобрать тур</Text>
                            </Button>
                            <Button  success style={formStyles.button}>
                                <Text>Сгенерировать ссылку</Text>
                            </Button>
                        </View>
                        <View style={formStyles.buttonContainer}>
                                <Button style={formStyles.button}>
                                    <Text>Очистить фильтр</Text>
                                    <Icon  type='material-community'  name='delete' color='red' size={40}/>
                                </Button>
                        </View>
                    </Form>
                </Content>
            </Container>
        )
    };

}