import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import {Container, Content, Root} from 'native-base';
import { StyleSheet, Text, View } from 'react-native';
import FlightChooserForm from "./components/flightChooserForm/FlightChooserForm";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as childrenActions from './actions/ChildrenActions'


 class MainContainer extends Component {



    render() {
        const { children } = this.props;
        const { setChildren } = this.props.childrenActions;
        return (

                <Container>
                    <Content>
                        <ScrollView style={{flex: 1}}>
                            <View style={{flex: 1}}>
                                <FlightChooserForm children = {children} setChildren = {setChildren}/>
                            </View>
                        </ScrollView>
                    </Content>
                </Container>

        );
    }


}


function mapDispatchToProps(dispatch) {
    return {
        childrenActions: bindActionCreators(childrenActions, dispatch)
    }
}

function mapStateToProps (state) {
        return{
            children: state.children,
        }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)
