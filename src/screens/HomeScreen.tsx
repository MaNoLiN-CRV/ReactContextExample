import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import Slider from '../components/Slider';
import { AppContext, ContextProvider } from '../context/Context';
import PageButton from '../components/PageButton';

export default function HomeScreen() {
    return (
       <ContextProvider>
            <View>
                <Text>HomeScreen</Text>
                <Slider height={100} />
                <PageButton/>
            </View>
        </ContextProvider> 
    )
}

const styles = StyleSheet.create({})