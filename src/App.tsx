import {View, Text, StyleSheet, Image, ImageSourcePropType } from 'react-native'
import React, { useState } from 'react';
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

const Dice = ({imageUrl}: DiceProps):JSX.Element => {
  return (
    <View>
      <Image style={styles.diceImages} source={imageUrl} />
    </View>
  )
}

export default function App(): JSX.Element {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne)

  const rollDiceOnTap = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;

  }
  return (
    <View style={styles.container}>
      <Dice  imageUrl={diceImage}/>
    </View>
  )
}

const styles = StyleSheet.create({});