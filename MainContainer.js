import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import {Container, Content, Root} from 'native-base';
import { StyleSheet, Text, View } from 'react-native';
import FlightChooserForm from "./components/flightChooserForm/FlightChooserForm";
import { connect } from 'react-redux';


 class MainContainer extends Component {



    render() {

        return (

                <Container>
                    <Content>
                        <ScrollView style={{flex: 1}}>
                            <View style={{flex: 1}}>
                                <FlightChooserForm/>
                            </View>
                        </ScrollView>
                    </Content>
                </Container>

        );
    }


}


function mapStateToProps (state) {
        return{
            children: state.children
        }
}

export default connect(mapStateToProps)(MainContainer)
