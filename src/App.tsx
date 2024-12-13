import {View, Text, StyleSheet, Image, ImageSourcePropType, Pressable } from 'react-native'
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

    switch (randomNumber) {
      case 1:
        setDiceImage(DiceOne)
        break;
        case 2:
        setDiceImage(DiceTwo)
        break;
        case 3:
        setDiceImage(DiceThree)
        break;
        case 4:
        setDiceImage(DiceFour)
        break;
        case 5:
        setDiceImage(DiceFive)
        break;
        case 6:
        setDiceImage(DiceSix)
        break;
    
      default:
        break;
    }
  }
  return (
    <View style={styles.container}>
      <Dice  imageUrl={diceImage}/>
      <Pressable
      onPress={rollDiceOnTap}
      >
        <Text style={styles.rollDiceBtnText}>
      Roll the dice
        </Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({});