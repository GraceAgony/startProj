import React from 'react';
import { ScrollView } from 'react-native';
import {Container, Content, Root} from 'native-base';
import { Font, AppLoading } from "expo";
import { StyleSheet, Text, View } from 'react-native';
import FlightChooserForm from "./components/flightChooserForm/FlightChooserForm";
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
//import store from './store/configureStore.js'
import reducers from './reducers/index';
import { createStore, applyMiddleware } from 'redux'

class App extends React.Component {

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
        this.setState({ loading: false });
    }

    render() {
        store = createStore(reducers);
        if (this.state.loading) {
            return (
                <Provider store={ store }>
                    <Root>
                        <AppLoading />
                    </Root>
                </Provider>
            );
        }

        return (
            <Provider store={store}>
                <Root>
                <Container>
                    <Content>
                        <ScrollView style={{ flex: 1}}>
                        <View style={{flex: 1}}>
                            <FlightChooserForm chidren = {state.children} />
                        </View>
                        </ScrollView>
                    </Content>
                </Container>
                </Root>
            </Provider>
            );
  }
}

function mapStateToProps (state) {
    return {
        children : state.children,
    }
}


export default connect(mapStateToProps)(App);
