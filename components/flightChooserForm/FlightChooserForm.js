import React from "react";
import { StyleSheet, ScrollView, View } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Container, Header, Content, Form, Item, Picker, Left, Body, Right, Button, Title, Text, DatePicker, Input } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { formStyles } from "./style";
import CheckBoxComponent  from "./CheckBox";
import Children from "./Children";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
import Step7 from "./Step7";
import Step8 from "./Step8";
import Step9 from "./Step9";
import Step10 from "./Step10";
import Step11 from "./Step11";
import Step12 from "./Step12";

export default class FlightChooserForm extends React.Component {

    constructor(props) {
        super(props);
    }


    onValueChanged(key, value) {
        this.props.setForm({[key] : value});
        this.forceUpdate();
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
        this.onValueChanged.bind(this)('firstDate', (value+1));
    }

    setSecondDate(value){
        this.onValueChanged.bind(this)('secondDate', (value+1));
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

    onValueChangedCheckBox(cheked, key){
        this.onValueChanged.bind(this)( key, cheked);
    }

    onValueChangedAge(key, age){
        this.onValueChanged.bind(this)( key+'children', age);
    }

    addToState(key){
        this.onValueChanged.bind(this)( key, false);
    }



    handleSubmit(){
        console.log('submit');
        console.log(this.props.form);
        let form = this.props.form;
        fetch('https://www.tpg.ua/index.php', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                form
            }),
        }) .then((response) => response.json())

    }

    render() {
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
                        <Step1
                            form={this.props.form}
                            onValueChange = {this.onValueChangedCountry.bind(this)}
                        />
                        <Step2
                            form={this.props.form}
                            onValueChange={this.onValueChangedTransport.bind(this)}
                        />
                        <Step3
                            form={this.props.form}
                            onValueChange={this.onValueChangedCity.bind(this)}
                        />
                        <Step4
                            form={this.props.form}
                            onValueChangePrice={this.onValueChangedPrice.bind(this)}
                            onValueChangeType = {this.onValueChangedType.bind(this)}
                        />
                        <Step5
                            form={this.props.form}
                            onValueChangeFirstDate={this.setFirstDate.bind(this)}
                            onValueChangeSecondDate = {this.setSecondDate.bind(this)}
                        />
                        <Step6
                            form={this.props.form}
                            onChangeAge = {this.onValueChangedAge.bind(this)}
                            childrenArray = {this.props.children}
                            setChildren = {this.props.setChildren}
                            onValueChange={this.onValueChangedPeople.bind(this)}
                        />
                       <Step7
                           form={this.props.form}
                           onValueChangeNightFrom={this.onValueChangedNightFrom.bind(this)}
                           onValueChangeNightTo={this.onValueChangedNightTo.bind(this)}
                           text = "Раннее бронирование"
                           onValueChange={this.onValueChangedCheckBox.bind(this)}
                           addToState = {this.addToState.bind(this)}
                       />
                        <Step8
                            text1 = "RO"
                            onValueChange={this.onValueChangedCheckBox.bind(this)}
                            addToState = {this.addToState.bind(this)}
                            form = {this.props.form}
                            text2 = "BB"
                            text3 = "2*"
                            text4 = "3*"
                        />
                        <Step9
                            form = {this.props.form}
                            onChangeTextPriceFrom = {this.onValueChangedPriceFrom.bind(this)}
                            onChangeTextPriceTo = {this.onValueChangedPriceTo.bind(this)}
                            valuePriceFrom={this.props.form.priceFrom}
                            valuePriceTo={this.props.form.priceTo}
                            onValueChange={this.onValueChangedCurrency.bind(this)}
                        />
                        <Step10
                            addToState = {this.addToState.bind(this)}
                            onValueChange={this.onValueChangedCheckBox.bind(this)}
                            form = {this.props.form}
                            text1 = "Авиа/Автобус"
                            text2 = "Отель"
                            text3 = "Не отображать stop-sale"
                            text4 = "Не отображать Promo туры"
                        />
                        <Step11
                            text1 = "Отображать выбранные"
                            onValueChange={this.onValueChangedCheckBox.bind(this)}
                            addToState = {this.addToState.bind(this)}
                            form = {this.props.form}
                            text2 = "Туры принимающие участие в «Ночной охоте»"
                            text3 = "Туры принимающие участие в «Country Week»"
                            text4 = "Must Have"
                        />
                        <Step12
                            text1 = "Отображать выбранные"
                            onValueChange={this.onValueChangedCheckBox.bind(this)}
                            addToState = {this.addToState.bind(this)}
                            form = {this.props.form}
                            text2 = "Только рекомендованные отели"
                            text3 = "Только ориентированы на европейский рынок"
                            text4 = "Только эксклюзивные отели"
                        />

                        <View style={[formStyles.buttonContainer, formStyles.marginSm]}>
                            <Button success style={[formStyles.button, formStyles.marginSm]}
                                    onPress={this.handleSubmit.bind(this)}>
                                <Text>Подобрать тур</Text>
                            </Button>
                            <Button  success style={formStyles.button}>
                                <Text>Сгенерировать ссылку</Text>
                            </Button>
                        </View>
                        <View style={formStyles.buttonContainer}>
                                <Button style={formStyles.button} onPress={()=> {
                                    this.props.cleanFilter();
                                    this.forceUpdate();
                                }}>
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

