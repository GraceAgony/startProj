import React, { Component } from 'react';
import { TouchableOpacity, View} from 'react-native';
import { Container, Content, Text, } from 'native-base';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as childrenActions from './actions/ChildrenActions'
import * as formAction from './actions/FormActions'
import { NavigationActions } from "react-navigation";
import { colors } from "./baseStyles";
import {formStyles} from "./components/flightChooserForm/style";
import { Font, AppLoading } from 'expo';

class MainContainer extends Component {

    constructor(props){
        super(props);
        this.state = {
            step1: ''
        }
    }


    static navigationOptions = {
         title: "Подбор тура".toUpperCase(),
         headerTitleStyle: formStyles.stepNavigationTitle
     };

    getData() {
        fetch("https://www.tpg.ua/ru/choosetour/")
            .then((response) => response.text())
            .then((text) => {
                html = text;
                let regexp = new RegExp("<(?:[^>\"']|\"[^\"]*\"|'[^']*')+?\\sid\\s*=\\s*(?:\"cv\"|'cv')(?:[^>\"']|\"[^\"]*\"|'[^']*')*>", 'gmi');
                let index = html.indexOf('>', html.search(regexp));
                console.log(html.slice(index +1 , index+ 1000));
             /*   let lastIndex = html.indexOf('<', index +1);
                console.log(index + ' '+ lastIndex);
                console.log(html.slice(index, lastIndex));*/
            });
    }

     navigate = () => {
         const navigateToStep1 = NavigationActions.navigate({
             routeName: "Step1",
             params: { name: "Step1"}
         });
         this.props.navigation.dispatch(navigateToStep1);
     };

    render() {
        this.getData();

            let prop = this.props;
            const {formAction} = prop;
            return (

                <Container >
                    <Content>
                        <View style={formStyles.stepBox}>
                        <TouchableOpacity
                            style={formStyles.stepTitle}
                            onPress={this.navigate}
                        >
                            <Text style={formStyles.stepTitleText}>
                                Перейти к подбору тура
                            </Text>
                        </TouchableOpacity>
                        </View>
                    </Content>
                </Container>

            );
    }


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


export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);