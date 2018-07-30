import React from "react";
import {  View ,TouchableOpacity} from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Container,  Content,  Item,  Text } from 'native-base';
import { formStyles } from "./style";
import CheckBoxComponent  from "./CheckBox";
import * as formAction from "../../actions/FormActions";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavigationActions } from "react-navigation";
import * as childrenActions from "../../actions/ChildrenActions";


class Step10 extends React.Component {

    static navigationOptions = {
        title: "Шаг10"
    };

    onValueChange(key, value) {
        const { formAction } = this.props;
        const {setForm} = formAction;
        setForm({[key] : value});
        this.forceUpdate();
    };

    navigate = () => {
        const navigateToStep11 = NavigationActions.navigate({
            routeName: "Step11",
            params: { name: "Step11"}
        });
        this.props.navigation.dispatch(navigateToStep11);
    };


    render() {
        const {form} = this.props;
        return (
            <Container>
                <Content>
            <View style={{ flex: 1}}>
                <Item>
                    <Grid>
                        <Row>
                            <Text style = {formStyles.title} >
                                Гарантированные места
                            </Text>
                        </Row>
                        <Row>
                            <Col>
                                <CheckBoxComponent text="Авиа/Автобус"
                                                   onValueChange={(cheked, key)=>  this.onValueChange.bind(this)(key, cheked)}
                                                   addToState = {(key)=>  this.onValueChange.bind(this)(key, false)}
                                                   form = {form}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <CheckBoxComponent text="Отель"
                                                   onValueChange={(cheked, key)=>  this.onValueChange.bind(this)(key, cheked)}
                                                   addToState = {(key)=>  this.onValueChange.bind(this)(key, false)}
                                                   form = {form}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <CheckBoxComponent text="Не отображать stop-sale"
                                                   onValueChange={(cheked, key)=> this.props.onValueChange(key, cheked)}
                                                   addToState = {(key)=>  this.onValueChange.bind(this)(key, false)}
                                                   form = {form}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <CheckBoxComponent text="Не отображать Promo туры"
                                                   onValueChange={(cheked, key)=> this.props.onValueChange(key, cheked)}
                                                   addToState = {(key)=> this.onValueChange.bind(this)(key, false)}
                                                   form = {form}
                                />
                            </Col>
                        </Row>
                    </Grid>
                </Item>
                <TouchableOpacity
                    style={{
                        paddingVertical: 15,
                        paddingHorizontal: 40,
                        backgroundColor: "indigo"
                    }}
                    onPress={this.navigate}
                >
                    <Text style={{ fontSize: 23, fontWeight: "600", color: "white" }}>
                        Step11
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

export default connect(mapStateToProps, mapDispatchToProps)(Step10);