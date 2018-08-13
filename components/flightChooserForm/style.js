import {colors, dimensions, fonts, padding} from "../../baseStyles";
import {StyleSheet} from 'react-native'
import { Dimensions } from 'react-native'

export const formStyles = StyleSheet.create(
    {
        container: {
            width: dimensions.fullWidth,
            paddingHorizontal: padding.sm,
            paddingVertical: padding.lg,
        },
        title: {
            color: colors.secondary,
            fontWeight: 'bold',
            fontSize: fonts.md,
            margin: padding.sm
        },
        buttonContainer: {
            margin: 10,
            borderRadius: 40,
            height: 40,
            display: 'flex',
            justifyContent:  'space-around',
            alignSelf: 'center',
            overflow: 'hidden',
        },
        button: {
            backgroundColor: 'rgba(0,0,0,0)',
            height: 40,
            borderRadius: 40,
        },

        marginSm:{
            margin: padding.sm
        },
        searchResult:{
             borderColor: colors.secondary,
             borderWidth: 2,
             padding: padding.sm
        },
        stepTitle:{
            backgroundColor: colors.blue,
            height: 60,
            display: 'flex',
            justifyContent:  'space-around',
        },
        stepTitleText:{
            fontFamily: 'sans-narrow',
            fontSize: 23,
            color: colors.white,
            textAlign: 'center'
        },

        buttonText:{
            fontFamily: 'sans-narrow',
            fontSize:20,
            color: colors.white,
            textAlign: 'center'
        },
        stepNavigationTitle:{
            fontFamily: 'arial',
            color: 'rgb(14, 115, 167)',
            textAlign: 'center',
            fontSize: 23,
        },

        stepLabelText:{
            fontFamily: 'sans-narrow',
            color: '#7f7f7f',
            fontSize: 23,
            textAlign: 'center',
            margin: 10,
        },
        checkBoxText:{
            fontFamily: 'sans-narrow',
            color: '#7f7f7f',
            fontSize: 23,
        },
        stepBox:{
            backgroundColor: 'rgb(247, 247, 247)',
        },
        picker:{
            backgroundColor: 'rgb(255, 255, 255)',
            borderColor: '#0e73a7',
            paddingLeft: 20,
        },
        pickerItemsText:{
            color: '#0e73a7',
            backgroundColor:'rgb(255, 255, 255)',
            borderWidth: 1,
            borderColor: '#0e73a7',
            borderRadius: 20,
            paddingLeft: 10,
            marginLeft: 10,
            marginRight: 10,
            flex: 1

        },
        containerFlex:{
            display: 'flex',
            justifyContent:'center',
            margin: 10
        },


    }
);