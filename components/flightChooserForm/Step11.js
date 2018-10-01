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
import { KeyboardAvoidingView } from 'react-native';


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

        let step11Filter = {};

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
        let newData = {};
        if(textData.length > 0) {
            for (let mainItem in this.holder) {
                for (let subItem in this.holder[mainItem].children) {
                    // console.log(this.holder[mainItem].children[subItem]);
                    if (this.holder[mainItem].children[subItem].item.toUpperCase().indexOf(textData) > -1) {
                        let value = this.holder[mainItem].children[subItem].value;
                        newData[value] = {};
                        newData[value] = this.holder[mainItem].children[subItem];
                    }
                }
            }

        }else {
            newData = this.holder;
        }
        this.setState({ data: newData });
    }

    submit(){
        const { formAction } = this.props;
        const {setForm} = formAction;
        setForm({'step11Data' : this.state.data});
        this.forceUpdate();
        this.navigate();
    }

    onValueChange(group, key, value, itemClass, parentValue) {
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
            this.setState(
                {
                    [group]: Object.assign(
                        this.state[group],
                        {
                            [key]:
                                Object.assign(this.state[group][key],
                                    {
                                        "checked": value,
                                    })
                        })
                });
        }else {
            if(Object.keys(this.state[group][parentValue]['children']).length === 1){
                this.setState(
                    {
                        [group]: Object.assign(
                            this.state[group],
                            {
                                [parentValue]:
                                    Object.assign(this.state[group][parentValue],
                                        {
                                            'checked': value,
                                            'children': Object.assign(this.state[group][parentValue]['children'],
                                                {
                                                    [key]: Object.assign(this.state[group][parentValue]['children'][key],
                                                        {'checked': value})
                                                })
                                        })
                            })
                    }
                )
            }else {
                this.setState(
                    {
                        [group]: Object.assign(
                            this.state[group],
                            {
                                [parentValue]:
                                    Object.assign(this.state[group][parentValue],
                                        {
                                            'children': Object.assign(this.state[group][parentValue]['children'],
                                                {
                                                    [key]: Object.assign(this.state[group][parentValue]['children'][key],
                                                        {'checked': value})
                                                })
                                        })
                            })
                    }
                )
            }
        }}else {
            if(key === 'Отображать выбранные'){
                if(value === true){
                let newData = {};
                for(let mainItem in this.state['data']){
                    if(this.state['data'][mainItem]['checked'] === true){
                        newData[mainItem] = this.state['data'][mainItem];
                    }else{
                    for(let subItem in this.state['data'][mainItem]['children']){
                        if(this.state['data'][mainItem]['children'][subItem]['checked'] === true){
                            newData[this.state['data'][mainItem]['children'][subItem].value] =
                                this.state['data'][mainItem]['children'][subItem];
                        }
                    }
                }
                }

                this.setState(
                    {
                        'data': newData,
                        [group]: Object.assign(
                           this.state[group],
                            {
                                [key]:
                                    Object.assign(this.state[group][key],
                                        {
                                            "checked": value,
                                        })
                            })
                    });
            }else {
                    let newData = {};
                    Object.assign(newData, this.holder);
                    for(let item in this.state.data){
                        if(this.state.data[item].class === "checkbox main treefind"){
                            Object.assign(newData, this.state.data[item]);
                        }else{
                            console.log(newData[this.state.data[item].cityIndex]);
                            Object.assign(newData[this.state.data[item].cityIndex].children,
                                {[this.state.data[item].value]: this.state.data[item]});
                        }
                    }
                    this.setState(
                        {
                           'data':newData
                        }
                    );
                }
            this.setState(
                {
                    [group]: Object.assign(
                        this.state[group],
                        {
                            [key]:
                                Object.assign(this.state[group][key],
                                    {
                                        "checked": value,
                                    })
                        })
                });
        } }};
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
        let cities;
        if(Object.keys(this.state.data).length > 0) {
            if (this.state.data[Object.keys(this.state.data)[0]].class === "checkbox main treefind") {
                cities = Object.keys(this.state.data).map((item, index) => {
                    return (
                        <View key={index}>
                            <CheckBoxComponent
                                key={index}
                                text={this.state.data[item].item}
                                onValueChange={(checked, key) =>
                                    this.onValueChange.bind(this)('data', this.state.data[item].value, checked, this.state.data[item].class)}
                                checked={this.state.data[item].checked}
                            />
                            {Object.keys(this.state.data[item].children).map((child, index) => {
                                let subItem = this.state.data[item].children[child];
                                return (
                                    <CheckBoxComponent
                                    key={index}
                                    text={subItem.item}
                                    onValueChange={(checked, key) =>
                                        this.onValueChange.bind(this)('data', subItem.value, checked, subItem.class, subItem.cityIndex)}
                                    checked={subItem.checked}
                                    style={{marginLeft: 20}}
                                />)
                            })}
                        </View>);
                });
            } else {
                cities = Object.keys(this.state.data).map((item, index) => {
                    return (
                        <View key={index}>
                            <CheckBoxComponent
                                key={index}
                                text={this.state.data[item].item}
                                onValueChange={(checked, key) =>
                                    this.onValueChange.bind(this)('data', this.state.data[item].value, checked, this.state.data[item].class)}
                                checked={this.state.data[item].checked}
                            />
                        </View>);
                });
            }
        }else {
            cities = <View></View>
        }
        return (
            <Container>
                <Content>
            <KeyboardAvoidingView
                behavior="padding"
                style={formStyles.stepBox}>
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
                    style={[formStyles.pickerItemsText, {marginBottom: 10}]}
                    placeholder="Поиск"
                    onChangeText = {(text) => this.searchFilterFunction.bind(this)(text)}
                />

                {cities}

                <TouchableOpacity
                    style={formStyles.stepTitle}
                    onPress={this.submit.bind(this)}
                >
                    <Text style={formStyles.stepTitleText}>
                       Шаг 12
                    </Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
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