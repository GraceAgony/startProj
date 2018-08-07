import React from "react";
import { View } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Container, Content, Form, Item, Button, Text, Input } from 'native-base';
import { Icon } from 'react-native-elements';
import { NavigationActions } from "react-navigation";
import {formStyles} from "./flightChooserForm/style";
import DOMParser from 'react-native-html-parser';

export default class TourPage extends React.Component {


   /* parse(html){
        try {
            const parser = new DOMParser.DOMParser();
            const parsed = parser.parseFromString(html, 'text/html');
        }catch (e) {
            console.log(e);
        }
    }*/

   parse(html){
       console.log(XPathResult);
       console.log(window.XPathResult);
       let headings = html.evaluate("//body/h1", html, null,
           XPathResult.ANY_TYPE, null
       );

       console.log("headings" + headings);
   }


    getHtml(url){
        console.log(window.XPathResult);
        fetch(url)
            .then((response) => response.text())
            .then((text)=>{
                html = text;
                this.parse(html);
            });
    }

    render(){
        const { navigation } = this.props;
        let url = navigation.state.params.url;
        this.getHtml(url);
        return(
            <Container>
                <Content>
                    <View>

                    </View>
                </Content>
            </Container>
        )
    }
}
