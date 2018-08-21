import React, { Component } from 'react';
import { TouchableOpacity, View} from 'react-native';
import { Container, Content, Text, } from 'native-base';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as childrenActions from './actions/ChildrenActions'
import * as formAction from './actions/FormActions'
import * as dataActions from './actions/dataActions'
import { NavigationActions } from "react-navigation";
import { colors } from "./baseStyles";
import {formStyles} from "./components/flightChooserForm/style";
import { Font, AppLoading } from 'expo';

class MainContainer extends Component {

    constructor(props) {
        super();
        this.state = {
            loading: true,
        };
    }

    async componentWillMount() {
        let that = this;
        let stepArray = [];
/*
        fetch("https://www.tpg.ua/ru/choosetour/")
           .then((response) => response.text())
            .then((text) => {
                html = text;

                //step1 data

                let regexp = new RegExp("<(?:[^>\"']|\"[^\"]*\"|'[^']*')+?\\sid\\s*=\\s*(?:\"cv\"|'cv')(?:[^>\"']|\"[^\"]*\"|'[^']*')*>", 'gmi');
                let index = html.indexOf('>', html.search(regexp));
                let element  = html.slice(index +1);
                let id = 0;
                while (element.indexOf('cl'+ id) > -1){
                    stepArray.push(
                        element.slice(element.indexOf('>',element.indexOf('cl' +id)+1) +1 ,
                            element.indexOf('</span>',element.indexOf('cl'+ id)+1 ))
                    );
                    id++;
                }
                    let {dataActions} = that.props;
                    dataActions.setData({step1Data : stepArray});

                //step2 data

                 stepArray = [];
                 regexp = new RegExp("<(?:[^>\"']|\"[^\"]*\"|'[^']*')+?\\sid\\s*=\\s*(?:\"switch-regular\"|'switch-regular')(?:[^>\"']|\"[^\"]*\"|'[^']*')*>", 'gmi');
                 index = html.indexOf('"switch-regular">', html.search(regexp)) + '"switch-regular">'.length -1;
                 element  = html.slice(index +1, html.indexOf('</label>', html.search(regexp)));
                 stepArray.push(element);
                 regexp = new RegExp("<(?:[^>\"']|\"[^\"]*\"|'[^']*')+?\\sid\\s*=\\s*(?:\"switch-not-avia\"|'switch-not-avia')(?:[^>\"']|\"[^\"]*\"|'[^']*')*>", 'gmi');
                 index = html.indexOf('"switch-not-avia">', html.search(regexp)) + '"switch-not-avia">'.length -1;
                 element  = html.slice(index +1, html.indexOf('</label>', html.search(regexp)));
                 stepArray.push(element);
                 regexp = new RegExp("<(?:[^>\"']|\"[^\"]*\"|'[^']*')+?\\sid\\s*=\\s*(?:\"switch_avia\"|'switch_avia')(?:[^>\"']|\"[^\"]*\"|'[^']*')*>", 'gmi');
                 index = html.indexOf('"switch_avia">', html.search(regexp)) + '"switch_avia">'.length -1;
                 element  = html.slice(index +1, html.indexOf('</label>', html.search(regexp)));
                 stepArray.push(element);
                 dataActions.setData({step2Data : stepArray});

                //step3 data

                 stepArray = [];
                 regexp = new RegExp("<(?:[^>\"']|\"[^\"]*\"|'[^']*')+?\\sid\\s*=\\s*(?:\"ct\"|'ct')(?:[^>\"']|\"[^\"]*\"|'[^']*')*>", 'gmi');
                 index = html.indexOf('"value">', html.search(regexp)) + '"value">'.length -1;
                 element  = html.slice(index +1, html.indexOf('</div>', html.search(regexp)));
                 stepArray.push(element);

                dataActions.setData({step3Data : stepArray});


                that.setState({loading: false});
            })*/
        that.setState({loading: false});
    }

    static navigationOptions = {
         title: "Подбор тура".toUpperCase(),
         headerTitleStyle: formStyles.stepNavigationTitle
     };




     navigate = () => {
         const navigateToStep1 = NavigationActions.navigate({
             routeName: "Step1",
             params: { name: "Step1", data: this.state.data}
         });
         this.props.navigation.dispatch(navigateToStep1);
     };

    render() {
        if (this.state.loading) {
            return (
                <AppLoading/>

            );
        }
            let prop = this.props;
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
        formAction: bindActionCreators(formAction, dispatch),
        dataActions: bindActionCreators(dataActions, dispatch),
    }
}

function mapStateToProps (state) {
    return{
        children: state.children,
        form: state.form,
        data: state.data
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);