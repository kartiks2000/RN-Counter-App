import React,{useState} from 'react';
import { View ,Text ,Button, StyleSheet} from 'react-native';

const Counter = () => {

    const [counter,setcounter] = useState(0);

    const increment = () => {
        var temp = counter + 1;
        setcounter(temp); 
    }

    const Decrement = () => {
        var temp = counter - 1;
        setcounter(temp); 
    }

    return(
        <View style={sty1.counter}>
            <View style={sty1.counterdisplay}>
                <Text style={sty1.counterdisplaytext}>{counter}</Text>
            </View>    
            <View style={sty1.btns}>
                <View style={sty1.btn} ><Button title='Increment' onPress={increment} /></View>
                <View style={sty1.btn}><Button title='Decrement' onPress={Decrement} /></View>
            </View>
        </View>
    );
}

const sty1 = StyleSheet.create({
    counter:{
        marginTop: '50%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    counterdisplay:{
        margin: 60,
        padding: 30,
        backgroundColor: 'grey',
    },
    counterdisplaytext:{
        fontSize: 25,
    },
    btns:{
        flexDirection: "row",
        justifyContent: 'center',
    },
    btn:{
        marginHorizontal: 30,
    }
});

export default Counter;