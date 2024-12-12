import {View, Text, StyleSheet, Image, ImageSourcePropType } from 'react-native'
import React from 'react';
import type { PropsWithChildren } from 'react';
import DiceOne from '../assets/One.png'
import DiceTwo from '../assets/Two.png'
import DiceThree from '../assets/Three.png'
import DiceFour from '../assets/Four.png'
import DiceFive from '../assets/Five.png'
import DiceSix from '../assets/Six.png'

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>

const Dice = ({imageUrl}: DiceProps) => {

}

export default function App(): JSX.Element {
  return (
    <View>
      <Text style={{color: '#ffff'}}>Hello World</Text>
    </View>
  )
}

const styles = StyleSheet.create({});