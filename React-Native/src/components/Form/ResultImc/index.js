import React from "react"
import {View, Text} from "react-native"

export default function ResultImc(props){ // Componente ResultImc que recebe props
    return(
        <View>
            <Text>{props.messageResultImc}</Text>
            <Text>{props.ResultImc}</Text> 
            
        </View>
    );
}