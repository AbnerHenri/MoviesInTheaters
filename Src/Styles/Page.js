import { StyleSheet } from "react-native"

export const Styles = StyleSheet.create({
    Page: {
        flex: 1,
        flexDirection : 'column',
        backgroundColor: '#000000',
    },

    List : {
        flex : 1,
        width : '100%',
    },

    TitleView : {
        width : '60%',
        height : 50,
        margin : 25,

        alignSelf : 'center',
        justifyContent : 'center',
        alignItems : 'center',
        paddingLeft : 15,

        borderBottomWidth : 5,
        borderBottomColor: '#E2B616'
    },

    Title : {
        color : '#FFF',
        fontSize : 22,
    },

    AwaitView : {
        transform : [{ translateY : 200 }],
        alignSelf : 'center',
        flexDirection : 'column',
    },

    AwaitText : {
        color : '#ccc',
        fontSize : 18
    }
})