import React from "react";
import {  View , TouchableOpacity} from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Container, Content, Item, Picker, Text } from 'native-base';
import { formStyles } from "./style";
import CheckBoxComponent  from "./CheckBox";
import * as formAction from "../../actions/FormActions";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavigationActions } from "react-navigation";
import * as childrenActions from "../../actions/ChildrenActions";

 class Step7 extends React.Component {

    static navigationOptions = {
        title: "Шаг 7".toUpperCase(),
        headerTitleStyle: formStyles.stepNavigationTitle
    };

     onValueChangeCheckBox(key,value){
         const { formAction } = this.props;
         const {setForm} = formAction;
         setForm({[key] : value});
         this.forceUpdate();
     }

     onValueChange(key, value) {
         const { formAction } = this.props;
         const {setForm} = formAction;
         const {data} = this.props;
         const dataStep = data.step7Data[key+'List'];

         dataStep.map((item) =>{
             if(item.value === value ){
                 setForm({[key]:  {["value"]: value, ["label"]: item.item}});
             }
         });

         this.forceUpdate();
     };

     navigate = () => {
         const navigateToStep8 = NavigationActions.navigate({
             routeName: "Step8",
             params: { name: "Step8"}
         });
         this.props.navigation.dispatch(navigateToStep8);
     };

    render() {
        const {form} = this.props;
        const {data} = this.props;
        const nightFromList = data.step7Data.nightFromList;
        const nightToList = data.step7Data.nightToList;
        return (
            <Container>
                <Content>
            <View style={formStyles.stepBox}>
                <Item picker>
                    <Grid>
                        <Row>
                            <Col>
                                <Text   style = {formStyles.stepLabelText} >Ночей: С</Text>

                                <Picker
                                  //  style={formStyles.picker}
                                    mode="dropdown"
                                    placeholder="Select One"
                                    placeholderStyle={{ color: "#2874F0" }}
                                    note={false}
                                    selectedValue={form.nightFrom.value}
                                    onValueChange={(value)=> this.onValueChange.bind(this)('nightFrom', value)}
                                >
                                    {nightFromList.map((item, index) =>

                                    <Picker.Item
                                        key={index}
                                        label={item.item.toString()}
                                        value={item.value}
                                        color="#0e73a7"
                                    />)}

                                </Picker>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Text  style = {formStyles.stepLabelText} >По</Text>
                                <Picker
                                  //  style={formStyles.picker}
                                    mode="dropdown"
                                    placeholder="Select One"
                                    placeholderStyle={{ color: "#2874F0" }}
                                    note={false}
                                    selectedValue={form.nightTo.value}
                                    onValueChange={(value)=> this.onValueChange.bind(this)('nightTo', value)}
                                >
                                    {nightToList.map((item, index) =>

                                        <Picker.Item
                                            key={index}
                                            label={item.item.toString()}
                                            value={item.value}
                                            color="#0e73a7"
                                        />)}
                                </Picker>
                            </Col>
                        </Row>

                               <CheckBoxComponent text = "Раннее бронирование"
                                                   onValueChange={(checked, key)=> this.onValueChangeCheckBox.bind(this)(key, checked)}
                                                  addToState = {(key)=> this.onValueChangeCheckBox.bind(this)(key, false)}
                                                  form = {form}
                                />

                    </Grid>
                </Item>
                <TouchableOpacity
                    style={formStyles.stepTitle}
                    onPress={this.navigate}
                >
                    <Text style={formStyles.stepTitleText}>
                        Шаг 8
                    </Text>
                </TouchableOpacity>
            </View>
                </Content>
            </Container>
        )};
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
        form: state.form,
        data: state.data
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Step7);