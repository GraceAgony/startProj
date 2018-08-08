import React, { Component } from 'react';
import { Provider } from 'react-redux';
import storeFunc from './store/configureStore.js'
import { Font, AppLoading } from "expo";
import AppNavigator from './AppNavigator'

let store = storeFunc();
 export default class App extends Component {


    constructor(props) {
        super();
        this.state = {
            loading: true
        };
    }

    async componentWillMount() {
        await Font.loadAsync({
            'sans-narrow': require('./fonts/pt_sans-narrow-web-regular.ttf'),
            'arial': require('./fonts/arial.ttf'),
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
                  <AppNavigator/>
                </Provider>
            );
    }
}
