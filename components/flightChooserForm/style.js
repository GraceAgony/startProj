import {colors, dimensions, fonts, padding} from "../../baseStyles";
import {StyleSheet} from 'react-native'

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
            display: 'flex',
            justifyContent: 'space-around',
            flexDirection: 'row',
            flexWrap: 'wrap',

        },
        button: {
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
            justifyContent:  'space-around'
        },
        stepTitleText:{
            fontSize: 23,
            fontWeight: "600",
            color: colors.white
        },

    }
);