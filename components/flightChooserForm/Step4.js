import React from "react";
import {  View , TouchableOpacity} from 'react-native';
import {  Item, Picker, Text } from 'native-base';
import { formStyles } from "./style";
import * as formAction from "../../actions/FormActions";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavigationActions } from "react-navigation";
import * as childrenActions from "../../actions/ChildrenActions";

 class Step4 extends React.Component {
    static navigationOptions = {
        title: "Шаг 4".toUpperCase(),
        headerTitleStyle: formStyles.stepNavigationTitle
    };

     onValueChange(key, value) {
         const { formAction } = this.props;
         const {setForm} = formAction;
         setForm({[key] : value});
         this.forceUpdate();
     }

     navigate = () => {
         const navigateToStep5 = NavigationActions.navigate({
             routeName: "Step5",
             params: { name: "Step5"}
         });
         this.props.navigation.dispatch(navigateToStep5);
     };

    render() {
        const {form} = this.props;
        const {data} = this.props;
        console.log(data);
        const dataStep = data.step4Data.price;
        const dataStepType = data.step4Data.tourType;
        return (
            <View style={formStyles.stepBox}>
                <Text  style = {formStyles.stepLabelText} >Источник цены</Text>
                <Item picker>
                    <Picker
                         //   style={formStyles.picker}
                            mode="dropdown"
                            placeholder="Select One"
                            placeholderStyle={{ color: "#2874F0" }}
                            note={false}
                            selectedValue={form.price}
                            onValueChange={(value)=> this.onValueChange.bind(this)('price', value)}>
                        {/*
                                this.props.categories.map((item,index)=>{
                                    return <Picker.Item key={index} label={item} value={item} />;
                                })
                            */}
                        { dataStep.map((item, index) =>

                            <Picker.Item
                                key={index}
                                label={item}
                                value={item}
                                color= "#0e73a7"
                            />)}
                    </Picker>
                </Item>
                <Text style = {formStyles.stepLabelText}>Тип тура</Text>
                <Item picker>
                    <Picker
                      //  style={formStyles.picker}
                        mode="dropdown"
                        placeholder="Select One"
                        placeholderStyle={{ color: "#2874F0" }}
                        note={false}
                        selectedValue={form.type}
                        onValueChange={(value)=> this.onValueChange.bind(this)('type', value)}
                    >
                        { dataStepType.map((item, index) =>

                            <Picker.Item
                                key={index}
                                label={item}
                                value={item}
                                color= "#0e73a7"
                            />)}

                    </Picker>
                </Item>
                <TouchableOpacity
                    style={formStyles.stepTitle}
                    onPress={this.navigate}
                >
                    <Text   style={formStyles.stepTitleText}>
                        Шаг 5
                    </Text>
                </TouchableOpacity>
            </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(Step4);