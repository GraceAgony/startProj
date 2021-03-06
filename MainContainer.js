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
        let {form} = this.props;
        let details = {
            "action": 'selectCountry',
            "data[city]": form.city.value,
            "data[country]": form.country.value,
            "data[dateFrom]": form.firstDate,
            "data[dateTo]": form.secondDate,
            "data[nightsFrom]": form.nightFrom,
            "data[nightsTo]": form.nightTo,
            "data[spo]": '0',
            "is_ajax": 'true',
            "module": 'choosetour'
        };
        let {dataActions} = that.props;
        dataActions.getData(details);

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
                    let req = element.indexOf('data-value=', element.indexOf('cl' + id) + 1) + 'data-value="'.length;
                      stepArray.push(
                          obj = {
                            country: element.slice(element.indexOf('>', element.indexOf('cl' + id) + 1) + 1,
                              element.indexOf('</span>', element.indexOf('cl' + id) + 1)),
                             value:  parseInt(element.slice(req, element.indexOf("'>", element.indexOf('cl' + id) + 1)), 10)
                  });
                    id++;
                }
                    dataActions.setData({step1Data : stepArray});

                //step2 data


                 stepArray = [];
                 regexp = new RegExp("<(?:[^>\"']|\"[^\"]*\"|'[^']*')+?\\sid\\s*=\\s*(?:\"switch-regular\"|'switch-regular')(?:[^>\"']|\"[^\"]*\"|'[^']*')*>", 'gmi');
                 index = html.indexOf('"switch-regular">', html.search(regexp)) + '"switch-regular">'.length -1;
                 let indexValue =  html.indexOf('"switch-regular"', html.search(regexp)) + '"switch-regular"'.length -1;
                let elementValue = html.slice( html.indexOf('value="',  indexValue+1)+"value='".length,
                     html.indexOf('value="',  indexValue+1)+"value='".length+1);
                 element  = html.slice(index +1, html.indexOf('</label>', html.search(regexp)));
                 stepArray.push({item: element, value: elementValue});

                 regexp = new RegExp("<(?:[^>\"']|\"[^\"]*\"|'[^']*')+?\\sid\\s*=\\s*(?:\"switch-not-avia\"|'switch-not-avia')(?:[^>\"']|\"[^\"]*\"|'[^']*')*>", 'gmi');
                 index = html.indexOf('"switch-not-avia">', html.search(regexp)) + '"switch-not-avia">'.length -1;
                indexValue =  html.indexOf('"switch-not-avia"', html.search(regexp)) + '"sswitch-not-avia"'.length -1;
                 elementValue = html.slice( html.indexOf('value="',  indexValue+1)+"value='".length,
                    html.indexOf('value="',  indexValue+1)+"value='".length+1);
                 element  = html.slice(index +1, html.indexOf('</label>', html.search(regexp)));
                 stepArray.push({item: element, value: elementValue});

                 regexp = new RegExp("<(?:[^>\"']|\"[^\"]*\"|'[^']*')+?\\sid\\s*=\\s*(?:\"switch_avia\"|'switch_avia')(?:[^>\"']|\"[^\"]*\"|'[^']*')*>", 'gmi');
                 index = html.indexOf('"switch_avia">', html.search(regexp)) + '"switch_avia">'.length -1;
                indexValue =  html.indexOf('"switch_avia"', html.search(regexp)) + '"switch_avia"'.length -1;
                 elementValue = html.slice( html.indexOf('value="',  indexValue+1)+"value='".length,
                    html.indexOf('value="',  indexValue+1)+"value='".length+1);
                 element  = html.slice(index +1, html.indexOf('</label>', html.search(regexp)));
                 stepArray.push({item: element, value: elementValue});


                 dataActions.setData({step2Data : stepArray});


                    //ste6 data
                    people = [];
                    for(let i=1; i<=16; i ++){
                        people.push({item: i, value: i});
                    }
                    children = [];
                    for(let i=1; i<=4; i++){
                        children.push({item: i, value: i});
                    }

                    dataActions.setData({step6Data: {people: people, children: children}});

                    //step9 data
                    let currency = [];
                    currency.push({item: 'EUR', value: 3}, {item: 'USD', value: 10}, {item: 'грн', value: 12});
                    dataActions.setData({step9Data: {currency: currency, priceFrom: 1, priceTo: 1}});


                that.setState({loading: false});
            });

    }

    static navigationOptions = {
         title: "Подбор тура".toUpperCase(),
         headerTitleStyle: formStyles.stepNavigationTitle
     };




     navigate = () => {
         const navigateToStep1 = NavigationActions.navigate({
             routeName: "Step1",
             params: { name: "Step1", data: this.state.data, setData: dataActions.setData}
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