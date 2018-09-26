import React from "react";
import { View, TouchableOpacity } from 'react-native';
import { Container,  Content,  Text, Input } from 'native-base';
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

        step11Filter = {};

        stepDataFilter.map((item) =>
        {
            item.checked = false;
            step11Filter[item.item] = item;
        });
        this.state = {data : stepData, filters: step11Filter};

        this.holder = stepData;
    }

    searchFilterFunction(text){
        let textData = text.toUpperCase();
        newData = {};
        for(let mainItem in this.holder){
            for(let subItem in this.holder[mainItem].children){
               // console.log(this.holder[mainItem].children[subItem]);
                if(this.holder[mainItem].children[subItem].item.toUpperCase().indexOf(textData) > -1){
                    let value = this.holder[mainItem].children[subItem].value;
                    newData[value] = {};
                    newData[value] = this.holder[mainItem].children[subItem];
                }
            }
        }

        this.setState({ data: newData });

    }

    onValueChange(group, key, value, itemClass, parentValue) {
        console.log('value changing');
        if(group === 'data'){
        if(itemClass === 'checkbox main treefind'){
            for(let item in this.state[group][key].children)
            {
                this.setState(
                        {[group] : Object.assign(
                                this.state[group],
                                {[key]:
                                        Object.assign(this.state[group][key],
                                            {
                                                'children':  Object.assign(this.state[group][key]['children'],
                                                    {
                                                        [item] : Object.assign(this.state[group][key]['children'][item],
                                                            {'checked': value})
                                                    })
                                            })
                                })});
                }
        }else {
            this.setState(
                {[group] : Object.assign(
                        this.state[group],
                        {[parentValue]:
                                Object.assign(this.state[group][parentValue],
                                    {
                                        'children':  Object.assign(this.state[group][parentValue]['children'],
                                            {
                                                [key] : Object.assign(this.state[group][parentValue]['children'][key],
                                                    {'checked': value})
                                            })
                                    })
                        })}
            )
        }}
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
        const stepDataFilter = data.step11Data.filters;

        const cities = Object.keys(this.state.data).map((item, index) => {
            return (
                <View>
                    <CheckBoxComponent
                        key={index}
                        text = {this.state.data[item].item}
                         onValueChange={(checked, key)=>
                           this.onValueChange.bind(this)('data', this.state.data[item].value, checked, this.state.data[item].class)}
                        checked = {this.state.data[item].checked}
                    />
                    { Object.keys(this.state.data[item].children).map((child, index) => {
                        let subItem  = this.state.data[item].children[child];
                        return ( <CheckBoxComponent
                            key={index}
                            text={subItem.item}
                            onValueChange={(checked, key)=>
                               this.onValueChange.bind(this)('data', subItem.value, checked, subItem.class, subItem.cityIndex)}
                            checked={subItem.checked}
                            style={{marginLeft: 20}}
                        />)
                    } )}
                </View>); });

        return (
            <Container>
                <Content>
            <View style={formStyles.stepBox}>

                 <Text style = {formStyles.stepLabelText} >Города и курорты</Text>

                {stepDataFilter.map((item, index)=>
                    <CheckBoxComponent
                        key={index}
                        text = {item.item}
                        onValueChange={(checked, key)=> this.onValueChange.bind(this)('filters', key, checked)}
                        checked = {this.state.filters[item.item].checked}
                    />
                )}

                <Input
                    style={formStyles.pickerItemsText}
                    placeholder="Поиск"
                    onChangeText = {(text) => this.searchFilterFunction(text).bind(this)}
                />

                {cities}

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