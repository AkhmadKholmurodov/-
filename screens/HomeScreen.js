import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, SafeAreaView, Text, View } from 'react-native'

export default function HomeScreen() {

    const navigation = useNavigation()
    useLayoutEffect(()=> {
        navigation.setOptions({
            headerTitle: "TESTING"
        })
    }, [])
  return (
    <SafeAreaView>
        <Text className="text-red-500 ">

            {/* Header */}
            <View>
                <Image 
                source={{
                    url:'https://ibb.co/VTfttg2'
                }} className="h-7 w-7 bg-gray-300 rounded-full"></Image>
            </View>

        </Text>
    </SafeAreaView>
    
  )
}

