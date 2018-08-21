import React, { Component } from 'react';
import { Provider } from 'react-redux';
import storeFunc from './store/configureStore.js'
import { Font, AppLoading } from "expo";
import AppNavigator from './AppNavigator'
import {formStyles} from "./components/flightChooserForm/style";

let store = storeFunc();
 export default class App extends Component {


    constructor(props) {
        super();
        this.state = {
            loading: true
        };
    }

    async componentWillMount() {
        let that = this;
        let stepArray = [];
        await Font.loadAsync({
            'sans-narrow': require('./fonts/pt_sans-narrow-web-regular.ttf'),
            'arial': require('./fonts/arial.ttf'),
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            'tahoma': require('./fonts/tahoma.ttf')
        });
        this.setState({loading: false});
        /* fetch("https://www.tpg.ua/ru/choosetour/")
           .then((response) => response.text())
            .then((text) => {
                html = text;
                let regexp = new RegExp("<(?:[^>\"']|\"[^\"]*\"|'[^']*')+?\\sid\\s*=\\s*(?:\"cv\"|'cv')(?:[^>\"']|\"[^\"]*\"|'[^']*')*>", 'gmi');
                let index = html.indexOf('>', html.search(regexp));
                let element  = html.slice(index +1);
                let id = 0;
                while (element.indexOf('cl'+ id) > -1){
                    //   console.log(element.slice(element.indexOf('>',element.indexOf('cl' +id)+1) +1 ,
                    //     element.indexOf('</span>',element.indexOf('cl'+ id)+1 )));
                    stepArray.push(
                        element.slice(element.indexOf('>',element.indexOf('cl' +id)+1) +1 ,
                            element.indexOf('</span>',element.indexOf('cl'+ id)+1 ))
                    );
                    id++;
                }
                    console.log('done');
                    this.setState({loading: false});
            }
                )*/
    }

    render() {
        if (this.state.loading) {
            return (
                <Provider store={store}>
                    <AppLoading/>
                </Provider>
            );
        }
            return (
                <Provider store={store} >
                  <AppNavigator sceneStyle={{paddingTop: 44}}/>
                </Provider>
            );
    }
}

Expo.registerRootComponent(App);
