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
        const {form} = this.props;
        const { formAction } = this.props;
        const {setForm} = formAction;
        setForm({step11 : [{[key] : value}]});
        console.log(form);
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
        const {data} = this.props;
        const stepData = data.step11Data;
       // console.log(stepData);

        return (
            <Container>
                <Content>
            <View style={formStyles.stepBox}>
                <Item>
                    <Grid>

                            <Text style = {formStyles.stepLabelText} >Города и курорты</Text>

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
                         <Input style={formStyles.pickerItemsText} placeholder="Поиск" />
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
                {stepData.map((item, index)=>
                    <CheckBoxComponent
                        key={index}
                        text = {item.item}
                        onValueChange={(checked, key)=> this.onValueChange.bind(this)(key, checked)}
                        addToState = {(key)=> this.onValueChange.bind(this)(key, false)}
                        form = {form}
                    />
                )}

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
        form: state.form,
        data: state.data
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Step11);