import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ScrollView , TouchableOpacity} from 'react-native';
import { View } from 'react-native';
import { Container, Header, Content, Form, Item, Picker, Left, Body, Right, Button, Title, Text, DatePicker, Input } from 'native-base';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as childrenActions from './actions/ChildrenActions'
import * as formAction from './actions/FormActions'
import { NavigationActions } from "react-navigation";

 class MainContainer extends Component {

     static navigationOptions = {
         title: "Подбор тура"
     };


     navigate = () => {
         const navigateToStep1 = NavigationActions.navigate({
             routeName: "Step1",
             params: { name: "Step1"}
         });
         this.props.navigation.dispatch(navigateToStep1);
     };

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

                        <TouchableOpacity
                            style={{
                                paddingVertical: 15,
                                paddingHorizontal: 40,
                                backgroundColor: "indigo"
                            }}
                            onPress={this.navigate}
                        >
                            <Text style={{ fontSize: 23, fontWeight: "600", color: "white" }}>
                                Step1
                            </Text>
                        </TouchableOpacity>
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