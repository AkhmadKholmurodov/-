import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  HeartIcon,
  DocumentMinusIcon,
  FaceSmileIcon

} from 'react-native-heroicons/outline'

const MainChanges = () => {
  return (
    <SafeAreaView ClassName= "absolute flex-1 items-center w-full bg-gray-600">
      <View ClassName='flex-row space-x-5'>
        <MagnifyingGlassIcon color={'#333'}/>
        <ShoppingBagIcon/>
        <HeartIcon/>
        <DocumentMinusIcon/>
        <FaceSmileIcon/>
      </View>
    </SafeAreaView>
  )
}

export default MainChanges