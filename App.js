import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ScrollView } from 'react-native';
import {Container, Content, Root} from 'native-base';
import store from './store/configureStore.js'
import { StyleSheet, Text, View } from 'react-native';
import FlightChooserForm from "./components/flightChooserForm/FlightChooserForm";
import { connect } from 'react-redux';
import { Font, AppLoading } from "expo";
import MainContainer from './MainContainer';

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
        console.log(store);
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
                    <MainContainer/>
                </Provider>
            );
    }
}
