import React from 'react'
import {StyleSheet, View, Text, TextInput} from 'react-native'

export default class InputTextFields extends React.Component{

    render(){
        return(
            <View style={this.props.style}>
                <Text style={styles.inputTitle}>{this.props.title}</Text>
                <TextInput
                 placeholder={this.props.placeholderText} 
                 secureTextEntry={this.props.isSecure} 
                 style={styles.input}
                 ></TextInput>
                <View style={styles.bottomView}></View>
            </View>
        );
    }

}
const styles = StyleSheet.create({
    inputTitle: {
        color: "#000",
        fontSize: 14
    },
    input: {
        paddingVertical: 12,
        color: "#1D2039",
        fontSize: 14,
    },
    bottomView: {
        borderBottomWidth: 1,
        borderBottomColor: "#D8D8D8"
    }
})