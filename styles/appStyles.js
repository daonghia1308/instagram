import React from 'react';
import { StyleSheet } from 'react-native';

const POLO_BLUE_COLOR = 'rgb(51,60,87)';
const FOLLOW_COLOR = 'rgb(71,113,246)';
const SEND_MESSAGE_COLOR = 'rgb(120,213,250)';
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        // marginTop: 44,
        flex: 0.4,
        flexDirection: 'row'
    },
    imageWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 150
    },
    userInfo: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    nameText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'gray'
    },
    jobText: {
        fontSize: 18,
        fontWeight: '400',
        color: 'gray'
    },
    buttonWrapper: {
        marginTop: 20,
        flexDirection: "row"
    },
    followButton: {
        backgroundColor: FOLLOW_COLOR,
        width: 120,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    followText: {
        color: 'white',
        fontSize: 15,
        fontWeight: '700'
    },
    sendButton: {
        marginLeft: 10,
        backgroundColor: SEND_MESSAGE_COLOR,
        width: 50,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20
    },
    countLikeGroup: {
        flex: 0.15,
        flexDirection: "row",
        justifyContent: 'space-around',
        // alignItems: 'center'
    },
    countText: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    countLable: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    imageGroup: {

        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20
    },
    flatList: {
        flex: 0.4
    }
});

export default styles;