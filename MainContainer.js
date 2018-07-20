import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import {Container, Content} from 'native-base';
import { View } from 'react-native';
import FlightChooserForm from "./components/flightChooserForm/FlightChooserForm";



 export default class MainContainer extends Component {



    render() {
        return (

                <Container>
                    <Content>
                        <ScrollView style={{flex: 1}}>
                            <View style={{flex: 1}}>
                                <FlightChooserForm />
                            </View>
                        </ScrollView>
                    </Content>
                </Container>

        );
    }


}

