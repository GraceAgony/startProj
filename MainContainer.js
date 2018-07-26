import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import {Container, Content} from 'native-base';
import { View } from 'react-native';
import FlightChooserForm from "./components/flightChooserForm/FlightChooserForm";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as childrenActions from './actions/ChildrenActions'
import * as formAction from './actions/FormActions'


 class MainContainer extends Component {



    render() {
       let prop = this.props;
        const { children } = this.props;
        const { setChildren } = this.props.childrenActions;
        const {form} = this.props;
        const { formAction } = prop;
        const {setForm} = formAction;
        const {cleanFilter} = formAction;
        return (

                <Container>
                    <Content>
                        <ScrollView style={{flex: 1}}>
                            <View style={{flex: 1}}>
                                <FlightChooserForm children={children}
                                                   setChildren={setChildren}
                                                   form={form}
                                                   setForm={setForm}
                                                   cleanFilter = {cleanFilter}
                                />
                            </View>
                        </ScrollView>
                    </Content>
                </Container>

        );
    }


}

function mapDispatchToProps(dispatch) {
    return {
        childrenActions: bindActionCreators(childrenActions, dispatch),
        formAction: bindActionCreators(formAction, dispatch)
    }
}

function mapStateToProps (state) {
    return{
        children: state.children,
        form: state.form
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);