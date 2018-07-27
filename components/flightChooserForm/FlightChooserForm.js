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
                            onValueChange = {this.onValueChanged.bind(this)}
                        />
                        <Step2
                            form={this.props.form}
                            onValueChange={this.onValueChanged.bind(this)}
                        />
                        <Step3
                            form={this.props.form}
                            onValueChange={this.onValueChanged.bind(this)}
                        />
                        <Step4
                            form={this.props.form}
                            onValueChange={this.onValueChanged.bind(this)}
                        />
                        <Step5
                            form={this.props.form}
                            onValueChange={this.onValueChanged.bind(this)}
                        />
                        <Step6
                            form={this.props.form}
                            onValueChange={this.onValueChanged.bind(this)}
                            childrenArray = {this.props.children}
                            setChildren = {this.props.setChildren}
                        />
                       <Step7
                           form={this.props.form}
                           onValueChange={this.onValueChanged.bind(this)}
                           text = "Раннее бронирование"
                       />
                        <Step8
                            text1 = "RO"
                            onValueChange={this.onValueChanged.bind(this)}
                            form = {this.props.form}
                            text2 = "BB"
                            text3 = "2*"
                            text4 = "3*"
                        />
                        <Step9
                            form = {this.props.form}
                            onValueChange={this.onValueChanged.bind(this)}
                        />
                        <Step10
                            onValueChange={this.onValueChanged.bind(this)}
                            form = {this.props.form}
                            text1 = "Авиа/Автобус"
                            text2 = "Отель"
                            text3 = "Не отображать stop-sale"
                            text4 = "Не отображать Promo туры"
                        />
                        <Step11
                            text1 = "Отображать выбранные"
                            onValueChange={this.onValueChanged.bind(this)}
                            form = {this.props.form}
                            text2 = "Туры принимающие участие в «Ночной охоте»"
                            text3 = "Туры принимающие участие в «Country Week»"
                            text4 = "Must Have"
                        />
                        <Step12
                            text1 = "Отображать выбранные"
                            onValueChange={this.onValueChanged.bind(this)}
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

