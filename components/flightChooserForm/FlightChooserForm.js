import React from "react";
import { StyleSheet, ScrollView, View } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Container, Header, Content, Form, Item, Picker, Left, Body, Right, Button, CheckBox, Title, Text, DatePicker, Input,ListItem } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { formStyles } from "./style";
import CheckBoxComponent  from "./CheckBox";
import Children from "./Children";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as childrenActions from '../../actions/ChildrenActions'

let formdata = {};

class FlightChooserForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
           country: 'Австралия',
            transport: 'Блоки / Чартеры',
            city: 'Баку',
            price: 'Все',
            type: 'Все',
            firstDate: Date.now(),
            secondDate: Date.now(),
            people: 1,
            nightFrom: 1,
            nightTo: 1,
            currency: 'грн',
            priceFrom: '1',
            priceTo: '1'
        };
    }


    onValueChanged(key, value) {
        this.setState({[key] : value});
        formdata["tour["+key+"]"] = value;
    }

    onValueChangedCountry(value) {
        this.onValueChanged.bind(this)('country', value);
    }
    onValueChangedTransport(value) {
        this.onValueChanged.bind(this)('transport', value);
    }
    onValueChangedCity(value) {
        this.onValueChanged.bind(this)('city', value);
    }

   onValueChangedPrice(value){
       this.onValueChanged.bind(this)('price', value);
   }

    onValueChangedType(value){
        this.onValueChanged.bind(this)('type', value);
    }


    setFirstDate(value){
        this.onValueChanged.bind(this)('firstDate', value+1);
    }

    setSecondDate(value){
        this.onValueChanged.bind(this)('secondDate', value+1);
    }

    onValueChangedPeople(value){
        this.onValueChanged.bind(this)('people', value);
    }

    onValueChangedNightFrom(value){
        this.onValueChanged.bind(this)('nightFrom', value);
    }

    onValueChangedNightTo(value){
        this.onValueChanged.bind(this)('nightTo', value);
    }

    onValueChangedCurrency(value){
        this.onValueChanged.bind(this)('currency', value);
    }

    onValueChangedPriceFrom(value){
        this.onValueChanged.bind(this)('priceFrom', value);
    }
    onValueChangedPriceTo(value){
        this.onValueChanged.bind(this)('priceTo', value);
    }

    handleSubmit(){
        console.log('submit');
        console.log(formdata);
        fetch('https://www.tpg.ua/index.php', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                formdata
            }),
        }) .then((response) => response.json())

    }

    render() {
        const { children } = this.props;
        const { setChildren } = this.props.childrenActions;
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
                                selectedValue={this.state.country}
                                onValueChange={this.onValueChangedCountry.bind(this)}
                            >
                                <Picker.Item label="Австралия" value="Австралия" />
                                <Picker.Item label="Австрия" value="Австрия" />
                            </Picker>
                        </Item>
                        <Text></Text>
                        <Item picker>
                            <Picker
                                mode="dropdown"
                                placeholder="Select One"
                                placeholderStyle={{ color: "#2874F0" }}
                                note={false}
                                selectedValue={this.state.transport}
                                onValueChange={this.onValueChangedTransport.bind(this)}
                            >
                                <Picker.Item label="Блоки / Чартеры" value="Блоки / Чартеры" />
                                <Picker.Item label="Без авиа / Автобус" value="Без авиа / Автобус" />
                            </Picker>
                        </Item>
                        <Text style = {formStyles.title}>Город отправления</Text>
                        <Item picker>
                            <Picker
                                mode="dropdown"
                                placeholder="Select One"
                                placeholderStyle={{ color: "#2874F0" }}
                                note={false}
                                selectedValue={this.state.city}
                                onValueChange={this.onValueChangedCity.bind(this)}
                            >
                                <Picker.Item label="Баку" value="Баку" />
                                <Picker.Item label="Киев" value="Киев" />
                            </Picker>
                        </Item>
                        <Text style = {formStyles.title}>Источник цены</Text>
                        <Item picker>
                        <Picker mode="dropdown"
                                placeholder="Select One"
                                placeholderStyle={{ color: "#2874F0" }}
                                note={false}
                                selectedValue={this.state.price}
                                onValueChange={this.onValueChangedPrice.bind(this)}>
                           {/*
                                this.props.categories.map((item,index)=>{
                                    return <Picker.Item key={index} label={item} value={item} />;
                                })
                            */}
                            <Picker.Item label="Все" value="Все" />
                            <Picker.Item label="Отели Барселоны" value="Отели Барселоны" />
                        </Picker>
                        </Item>
                        <Text style = {formStyles.title}>Тип тура</Text>
                        <Item picker>
                        <Picker
                            mode="dropdown"
                            placeholder="Select One"
                            placeholderStyle={{ color: "#2874F0" }}
                            note={false}
                            selectedValue={this.state.type}
                            onValueChange={this.onValueChangedType.bind(this)}
                        >
                            <Picker.Item label="Все" value="Все" />

                        </Picker>
                        </Item>
                        <Item picker>
                            <DatePicker
                                defaultDate={Date.now()}
                                locale={"ru"}
                                timeZoneOffsetInMinutes={undefined}
                                modalTransparent={false}
                                animationType={"fade"}
                                androidMode={"default"}
                                placeHolderText="Дата заезда С"
                                textStyle={{ color: "green" }}
                                placeHolderTextStyle={{ color: "#d3d3d3" }}
                                onDateChange={this.setFirstDate.bind(this)}
                            />
                            <Text>
                                Date: {this.state.firstDate.toString().substr(4, 12)}
                            </Text>
                        </Item>
                        <Item picker>
                            <DatePicker
                                defaultDate={Date.now()}
                                locale={"ru"}
                                timeZoneOffsetInMinutes={undefined}
                                modalTransparent={false}
                                animationType={"fade"}
                                androidMode={"default"}
                                placeHolderText="Дата заезда По"
                                textStyle={{ color: "green" }}
                                placeHolderTextStyle={{ color: "#d3d3d3" }}
                                onDateChange={this.setSecondDate.bind(this)}
                            />
                            <Text>
                                Date: {this.state.secondDate.toString().substr(4, 12)}
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
                                    selectedValue={this.state.people}
                                    onValueChange={this.onValueChangedPeople.bind(this)}
                                >
                                    <Picker.Item label="1" value="1" />
                                    <Picker.Item label="2" value="2" />
                                </Picker>
                            </Col>
                        </Item>
                        <Children childrenArray = {children} setChildren = {setChildren}/>
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
                                    selectedValue={this.state.nightFrom}
                                    onValueChange={this.onValueChangedNightFrom.bind(this)}
                                >
                                    <Picker.Item label="1" value="1" />
                                    <Picker.Item label="2" value="2" />
                                </Picker>
                            </Col>
                            <Col>
                                <Text style = {formStyles.title} >По</Text>
                                <Picker
                                    mode="dropdown"
                                    placeholder="Select One"
                                    placeholderStyle={{ color: "#2874F0" }}
                                    note={false}
                                    selectedValue={this.state.nightTo}
                                    onValueChange={this.onValueChangedNightTo.bind(this)}
                                >
                                    <Picker.Item label="1" value="1" />
                                    <Picker.Item label="2" value="2" />
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
                                        <Input onChangeText = {this.onValueChangedPriceFrom.bind(this)}
                                               value={this.state.priceFrom}
                                        />
                                    </Item>
                                </Col>
                                <Col>
                                    <Text style = {formStyles.title} >
                                        Цена до
                                    </Text>
                                    <Item >
                                        <Input onChangeText = {this.onValueChangedPriceTo.bind(this)}
                                               value={this.state.priceTo}/>
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
                                        selectedValue={this.state.currency}
                                        onValueChange={this.onValueChangedCurrency.bind(this)}
                                    >
                                        <Picker.Item label="грн" value="грн" />
                                        <Picker.Item label="USD" value="USD" />
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
                            <Button success style={[formStyles.button, formStyles.marginSm]} onPress={this.handleSubmit}>
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

function mapDispatchToProps(dispatch) {
    return {
        childrenActions: bindActionCreators(childrenActions, dispatch)
    }
}

function mapStateToProps (state) {
    return{
        children: state.children,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FlightChooserForm);