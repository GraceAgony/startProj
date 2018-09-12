import React from "react";
import {  View ,TouchableOpacity} from 'react-native';
import { Col, Grid, Row } from "react-native-easy-grid";
import {  Item, Text, } from 'native-base';
import { formStyles } from "./style";
import CheckBoxComponent  from "./CheckBox";
import * as formAction from "../../actions/FormActions";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavigationActions } from "react-navigation";
import * as childrenActions from "../../actions/ChildrenActions";

class Step8 extends React.Component {

    static navigationOptions = {
        title: "Шаг 8".toUpperCase(),
        headerTitleStyle: formStyles.stepNavigationTitle
    };

    onValueChange(key, value) {
        const { formAction } = this.props;
        const {setForm} = formAction;
        setForm({[key] : value});
        this.forceUpdate();
    };

    navigate = () => {
        const navigateToStep9 = NavigationActions.navigate({
            routeName: "Step9",
            params: { name: "Step9"}
        });
        this.props.navigation.dispatch(navigateToStep9);
    };

    render() {
        const {form} = this.props;
        const {data} = this.props;
        const stepData = data.step8Data;
        return (
            <View style={formStyles.stepBox}>
                <Item>
                    <Grid>
                        <Row>
                            <Col>
                                {/*<Text style = {[formStyles.checkBoxText, {marginVertical: 10}]} >*/}
                                    {/*Питание*/}
                                {/*</Text>*/}
                                {stepData.map((item, index) =>
                                    <CheckBoxComponent
                                                       text = item.item
                                                       onValueChange={(cheked, key)=> this.onValueChange.bind(this)(key, cheked)}
                                                       addToState = {(key)=> this.onValueChange.bind(this)(key, false)}
                                                       form = {form}
                                    />
                            )}
                            </Col>
                        </Row>
                    </Grid>
                  {/*  <Grid>
                        <Row>
                        <Col>
                            <Text style = {[formStyles.checkBoxText, {marginVertical: 10}]} >
                                Питание
                            </Text>
                            <CheckBoxComponent text = "RO"
                                               onValueChange={(cheked, key)=> this.onValueChange.bind(this)(key, cheked)}
                                               addToState = {(key)=> this.onValueChange.bind(this)(key, false)}
                                               form = {form}
                            />
                            <CheckBoxComponent text = "BB"
                                               onValueChange={(cheked, key)=> this.onValueChange.bind(this)(key, cheked)}
                                               addToState = {(key)=> this.onValueChange.bind(this)(key, false)}
                                               form = {form}
                            />
                        </Col>
                        </Row>
                    </Grid>
                    <Grid>
                        <Col>
                            <Text style = {[formStyles.checkBoxText, {marginVertical: 10}]} >
                                Категория отеля
                            </Text>
                            <CheckBoxComponent text = "2*"
                                               onValueChange={(cheked, key)=>this.onValueChange.bind(this)(key, cheked)}
                                               addToState = {(key)=> this.onValueChange.bind(this)(key, false)}
                                               form = {form}
                            />
                            <CheckBoxComponent text = "3*"
                                               onValueChange={(cheked, key)=> this.onValueChange.bind(this)(key, cheked)}
                                               addToState = {(key)=> this.onValueChange.bind(this)(key, false)}
                                               form = {form}
                            />
                        </Col>
                    </Grid>*/}


                </Item>
                <TouchableOpacity
                    style={formStyles.stepTitle}
                    onPress={this.navigate}
                >
                    <Text   style={formStyles.stepTitleText}>
                        Шаг 9
                    </Text>
                </TouchableOpacity>
            </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(Step8);