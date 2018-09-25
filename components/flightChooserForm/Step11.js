import React from "react";
import { View, TouchableOpacity } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Container,  Content,  Item, Button, Text, Input } from 'native-base';
import { formStyles } from "./style";
import CheckBoxComponent  from "./CheckBox";
import * as formAction from "../../actions/FormActions";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavigationActions } from "react-navigation";
import * as childrenActions from "../../actions/ChildrenActions";

class Step11 extends React.Component {

    static navigationOptions = {
        title: "Шаг 11".toUpperCase(),
        headerTitleStyle: formStyles.stepNavigationTitle
    };

    constructor(props){
        super(props);
        const {data} = this.props;
        const stepData = data.step11Data.data;
        const stepDataFilter = data.step11Data.filters;
        step11Data = {};
        step11Filter = {};
        stepData.map((item) =>
        {
            item.checked = false;
            step11Data[item.value] = item;
        });
        stepDataFilter.map((item) =>
        {
            item.checked = false;
            step11Filter[item.item] = item;
        });
        this.state = {data : step11Data, filters: step11Filter};
    }

    onValueChange(group, key, value, itemClass) {
        if(itemClass === 'checkbox main treefind'){
            let idx = this.state[group][key].value;
            for(let item in this.state[group])
            {
                if( this.state[group][item].cityIndex === idx){
                    this.setState(
                        {[group] : Object.assign(
                                this.state[group],
                                {item:
                                        Object.assign(this.state[group][item],
                                            {
                                                "checked": value,
                                            })
                                })});
                }
            }
        }
        this.setState(
            {[group] : Object.assign(
                    this.state[group],
                    {[key]:
                            Object.assign(this.state[group][key],
                                {
                                    "checked": value,
                                })
                    })});
    };

    navigate = () => {
        const navigateToStep12 = NavigationActions.navigate({
            routeName: "Step12",
            params: { name: "Step12"}
        });
        this.props.navigation.dispatch(navigateToStep12);
    };


    render() {
        const {data} = this.props;
        const stepData = data.step11Data.data;
        const stepDataFilter = data.step11Data.filters;
       // console.log(this.state);

        return (
            <Container>
                <Content>
            <View style={formStyles.stepBox}>

                            <Text style = {formStyles.stepLabelText} >Города и курорты</Text>
                            <Input style={formStyles.pickerItemsText} placeholder="Поиск" />

                {stepDataFilter.map((item, index)=>
                    <CheckBoxComponent
                        key={index}
                        text = {item.item}
                        onValueChange={(checked, key)=> this.onValueChange.bind(this)('filters', key, checked)}
                        checked = {this.state.filters[item.item].checked}
                    />
                )}

                {stepData.map((item, index)=>
                    <CheckBoxComponent
                        key={index}
                        text = {item.item}
                        onValueChange={(checked, key)=> this.onValueChange.bind(this)('data', item.value, checked, item.class)}
                        checked = {this.state.data[item.value].checked}
                        style = {(item.class === 'checkbox sub') ? {marginLeft : 20}: {}}
                    />
                )}

                <TouchableOpacity
                    style={formStyles.stepTitle}
                    onPress={this.navigate}
                >
                    <Text   style={formStyles.stepTitleText}>
                       Шаг 12
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

export default connect(mapStateToProps, mapDispatchToProps)(Step11);