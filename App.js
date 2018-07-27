import React, { Component } from 'react';
import { Provider } from 'react-redux';
import storeFunc from './store/configureStore.js'
import { Font, AppLoading } from "expo";
import MainContainer from './MainContainer';
import AppNavigator from './AppNavigator'


let store = storeFunc();
 export default class App extends Component {


    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
    }

    async componentWillMount() {
        await Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
        });
        this.setState({loading: false});
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
                <Provider store={store}>
                  {/*  <MainContainer/>*/}
                  <AppNavigator/>
                </Provider>
            );
    }
}
