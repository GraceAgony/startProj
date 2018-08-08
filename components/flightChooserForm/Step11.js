import React from "react";
import { View, TouchableOpacity } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Container,  Content,  Item, Button, Text, Input } from 'native-base';
import { formStyles } from "./style";
import CheckBoxComponent  from "./CheckBox";
import * as formAction from "../../actions/FormActions";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavigationActions } from "react-navigation";
import * as childrenActions from "../../actions/ChildrenActions";

class Step11 extends React.Component {

    static navigationOptions = {
        title: "Шаг 11".toUpperCase(),
        headerTitleStyle: formStyles.stepNavigationTitle
    };

    onValueChange(key, value) {
        const { formAction } = this.props;
        const {setForm} = formAction;
        setForm({[key] : value});
        this.forceUpdate();
    };

    navigate = () => {
        const navigateToStep12 = NavigationActions.navigate({
            routeName: "Step12",
            params: { name: "Step12"}
        });
        this.props.navigation.dispatch(navigateToStep12);
    };


    render() {
        const {form} = this.props;
        return (
            <Container>
                <Content>
            <View style={{ flex: 1 }}>
                <Item>
                    <Grid>
                        <Row>
                            <Text style = {formStyles.title} >Города и курорты</Text>
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
                                <CheckBoxComponent text= "Туры принимающие участие в «Ночной охоте»"
                                                   onValueChange={(cheked, key)=> this.onValueChange.bind(this)(key, cheked)}
                                                   addToState = {(key)=> this.onValueChange.bind(this)(key, false)}
                                                   form = {form}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <CheckBoxComponent text="Туры принимающие участие в «Country Week»"
                                                   onValueChange={(cheked, key)=> this.onValueChange.bind(this)(key, cheked)}
                                                   addToState = {(key)=> this.onValueChange.bind(this)(key, false)}
                                                   form = {form}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <CheckBoxComponent text="Must Have"
                                                   onValueChange={(cheked, key)=> this.onValueChange.bind(this)(key, cheked)}
                                                   addToState = {(key)=> this.onValueChange.bind(this)(key, false)}
                                                   form = {form}
                                />
                            </Col>
                        </Row>
                    </Grid>
                </Item>
                <TouchableOpacity
                    style={formStyles.stepTitle}
                    onPress={this.navigate}
                >
                    <Text   style={formStyles.stepTitleText}>
                       Шаг 12
                    </Text>
                </TouchableOpacity>
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

export default connect(mapStateToProps, mapDispatchToProps)(Step11);