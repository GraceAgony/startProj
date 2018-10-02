import React from "react";
import { View, Image, ImageEditor, TouchableOpacity,TouchableHighlight, ImageBackground} from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Container, Content, Form, Item, Button, Text, Input } from 'native-base';
import { Icon } from 'react-native-elements';
import { formStyles } from "./style";
import CheckBoxComponent  from "./CheckBox";
import * as formAction from "../../actions/FormActions";
import { connect } from 'react-redux';
import * as childrenActions from "../../actions/ChildrenActions";
import { bindActionCreators } from 'redux';
import SearchResult from "./../SearchResult"
import {NavigationActions} from "react-navigation";
import ButtonRed from "./ButtonRed";

class Step12 extends React.Component {

    static navigationOptions = {
        title: "Шаг 12".toUpperCase(),
        headerTitleStyle: formStyles.stepNavigationTitle
    };

    constructor(props){
        super(props);
        const {data} = this.props;
        const stepData = data.step12Data.data;
        const stepDataFilter = data.step12Data.filters;

        let step12Filter = {};

        stepDataFilter.map((item) =>
        {
            item.checked = false;
            step12Filter[item.item] = item;
        });
        this.state = {data : stepData, filters: step12Filter};

        this.holder = stepData;
    }


    handleSubmit(){
        console.log('submit');
        let form = this.props.form;
        console.log(form);
        fetch('https://www.tpg.ua/index.php', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                form
            }),
        }) .then((response) =>  this.props.navigation.navigate('SearchResult', response))
    }

   /* navigate = (params) => {
        const navigateToSearchResult = NavigationActions.navigate({
            routeName: "SearchResult",
            params: { name: "SearchResult" , params}
        });
        this.props.navigation(navigateToSearchResult);
    };
*/
    searchFilterFunction(text){
        let textData = text.toUpperCase();
        let newData = {};
        if(textData.length > 0) {
            for (let item in this.holder) {
                    if (this.holder[item].toUpperCase().indexOf(textData) > -1) {
                        newData[item] = this.holder[item];
            }}

        }else {
            newData = this.holder;
        }
        this.setState({ data: newData });
    }

    onValueChange(group, key, value) {
        let newData ={};
       if(group === 'data'){
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
            return;
        }
            if(key === 'Отображать выбранные') {
                if (value === true) {
                    let newData = {};
                    for (let item in this.state['data']) {
                        if (this.state['data'][item]['checked'] === true) {
                            newData[item] = this.state['data'][item];
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
                    return;
                } else {
                    let newData = {};
                    Object.assign(newData, this.holder);
                    for (let item in this.state.data) {
                        Object.assign(newData, this.state.data[item]);
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
                        }
                    );
                    return;
                }
            }
            // this.setState(
            //     {
            //         [group]: Object.assign(
            //             this.state[group],
            //             {
            //                 [key]:
            //                     Object.assign(this.state[group][key],
            //                         {
            //                             "checked": value,
            //                         })
            //             })
            //     });

    };


    render() {
        const {form} = this.props;
        const { formAction } = this.props;
        const {cleanFilter} = formAction;
        const {data} = this.props;
        const stepDataFilter = data.step12Data.filters;
        return (
            <Container >
                <Content>
            <View style={formStyles.stepBox}>
                            <Text style = {formStyles.stepLabelText} >Отель</Text>
                        {stepDataFilter.map((item, index)=>
                            <CheckBoxComponent
                                key={index}
                                text = {item.item}
                                onValueChange={(checked, key)=> this.onValueChange.bind(this)('filters', key, checked)}
                                checked = {this.state.filters[item.item].checked}
                            />
                        )}

                        <Input  style={formStyles.pickerItemsText} placeholder="Поиск"/>

                { Object.keys(this.state.data).map((item, index) =>
                        <CheckBoxComponent
                            key={index}
                            text={this.state.data[item].item}
                            onValueChange={(checked, key) =>
                                this.onValueChange.bind(this)('data',  this.state.data[item].value, checked)}
                            checked={this.state.data[item].checked}
                            style={{marginLeft: 20}}
                        />)
                    }

                <Row style={formStyles.containerFlex}>
                    <Icon
                        name='cancel'
                        size = {25}
                        color='red'
                        onPress={()=> {
                            cleanFilter();
                            this.forceUpdate();
                        }}
                    />
                    {/*<Text*/}
                          {/*style={{*/}
                              {/*color: 'blue',*/}
                              {/*textDecorationLine: 'underline',*/}
                              {/*textDecorationColor: 'rgb(0, 123, 229)' ,*/}
                              {/*textDecorationStyle: 'dashed',*/}
                              {/*textAlign: 'center'*/}
                          {/*}}*/}
                          {/*onPress={()=> {*/}
                              {/*cleanFilter();*/}
                              {/*this.forceUpdate();*/}
                          {/*}}*/}
                    {/*>*/}
                        {/*Очистить фильтр*/}
                    {/*</Text>*/}
                </Row>

                        <ButtonRed
                            text = 'Подобрать тур'
                            onPress={this.handleSubmit.bind(this)}
                        />
                        <ButtonRed
                            text = 'Сгенерировать ссылку'
                            onPress={()=>{}}
                        />
                       {/* <ButtonRed
                        text = 'Очистить фильтр'
                        onPress={()=> {
                            cleanFilter();
                            this.forceUpdate();
                        }}
                    />*/}
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

export default connect(mapStateToProps, mapDispatchToProps)(Step12);