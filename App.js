import React from 'react';
import { ScrollView } from 'react-native';
import {Container, Content, Root} from 'native-base';
import { Font, AppLoading } from "expo";
import { StyleSheet, Text, View } from 'react-native';
import FlightChooserForm from "./components/flightChooserForm/FlightChooserForm";


export default class App extends React.Component {

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
        if (this.state.loading) {
            return (
                <Root>
                    <AppLoading />
                </Root>
            );
        }
        return (
                <Container>
                    <Content>
                        <ScrollView style={styles.container}>
                        <View style={{flex: 1}}>
                            <FlightChooserForm/>
                        </View>
                        </ScrollView>
                    </Content>
                </Container>
            );
  }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

