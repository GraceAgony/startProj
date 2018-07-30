import React from "react";
import { StyleSheet, ScrollView, View, TouchableOpacity } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Container, Header, Content, Form, Item, Picker, Left, Body, Right, Button, Title, Text, DatePicker, Input } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { formStyles } from "./style";
import CheckBoxComponent  from "./CheckBox";
import Children from "./Children";
import * as formAction from "../../actions/FormActions";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavigationActions } from "react-navigation";
import * as childrenActions from "../../actions/ChildrenActions";

class Step12 extends React.Component {

    static navigationOptions = {
        title: "Шаг12"
    };


    handleSubmit(){
        console.log('submit');
        let form = this.props;
        console.log(form);
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

    onValueChange(key, value) {
        const { formAction } = this.props;
        const {setForm} = formAction;
        setForm({[key] : value});
        this.forceUpdate();
    };


    render() {
        const {form} = this.props;
        const { formAction } = this.props;
        const {cleanFilter} = formAction;
        return (
            <Container>
                <Content>
            <View style={{ flex: 1 }}>
                <Item>
                    <Grid>
                        <Row>
                            <Text style = {formStyles.title} >Отель</Text>
                        </Row>
                        <Row>
                            <Col>
                                <CheckBoxComponent text="Отображать выбранные"
                                                   onValueChange={(cheked, key)=> this.onValueChange.bind(this)(key, cheked)}
                                                   addToState = {(key)=> this.onValueChange.bind(this)(key, false)}
                                                   form = {form}
                                />
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
                                <CheckBoxComponent text="Только рекомендованные отели"
                                                   onValueChange={(cheked, key)=>  this.onValueChange.bind(this)(key, cheked)}
                                                   addToState = {(key)=>  this.onValueChange.bind(this)(key, false)}
                                                   form = {form}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <CheckBoxComponent text= "Только ориентированы на европейский рынок"
                                                   onValueChange={(cheked, key)=>  this.onValueChange.bind(this)(key, cheked)}
                                                   addToState = {(key)=>  this.onValueChange.bind(this)(key, false)}
                                                   form = {form}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <CheckBoxComponent text="Только эксклюзивные отели"
                                                   onValueChange={(cheked, key)=>  this.onValueChange.bind(this)(key, cheked)}
                                                   addToState = {(key)=>  this.onValueChange.bind(this)(key, false)}
                                                   form = {form}
                                />
                            </Col>
                        </Row>
                    </Grid>
                </Item>
                <Form>

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
                            this.cleanFilter();
                            this.forceUpdate();
                        }}>
                            <Text>Очистить фильтр</Text>
                            <Icon  type='material-community'  name='delete' color='red' size={40}/>
                        </Button>
                    </View>
                </Form>
            </View>
                </Content>
            </Container>
        )};
}

function mapDispatchToProps(dispatch) {
    return {
        childrenActions: bindActionCreators(childrenActions, dispatch),
        formAction: bindActionCreators(formAction, dispatch)
    }
}

function mapStateToProps (state) {
    return{
        children: state.children,
        form: state.form
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Step12);