import { useNavigation } from '@react-navigation/native'
import React, { useLayoutEffect } from 'react'
import { Image, SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native'
import {
    UserIcon,
    ChevronDownIcon,
    MagnifyingGlassIcon,
    AdjustmentsHorizontalIcon,
    BellAlertIcon,
    ShoppingCartIcon,

} from 'react-native-heroicons/outline'
import Categories from '../components/Categories';

export default function HomeScreen() {

    const navigation = useNavigation();

    useLayoutEffect(()=> {
        navigation.setOptions({
            headerShown: false,
        })
    }, []);
  return (
    <SafeAreaView className="bg-[#00CCBB] pt-5">


            {/* Header */}
            <View className="flex-row pb-3 items-center mx-4 space-x-2">
                <Image 
                source={{
                    url:'https://avatars.githubusercontent.com/u/87185085?v=4'
                }} className="h-9 w-9 bg-gray-300 p-4 rounded-full"
                />
                <View className="flex-1">
                    <Text className="font-bold text-xl">
                        위치
                        <ChevronDownIcon size={20} color="white"/>
                    </Text>   
                </View>
                < ShoppingCartIcon color="white"/>
                <BellAlertIcon color={'white'}/>
                <UserIcon size={35} color={'white'}/>
            </View>
            {/* Search */}
            <View className="flex-row m-auto items-center w-full mx-2 px-2 pb-3 ">
                <View className="flex-row  space-x-2 bg-white p-3 rounded-md shadow-lg items-center w-[95%]">
                    <MagnifyingGlassIcon color='#00CCBB '/> 
                    <TextInput 
                    placeholder='맛집 이름을 찾아보세요!'
                    keyboardType='default'
                    />
                </View>
            </View>

            {/* Body */}
            <ScrollView className="bg-gray-100" contentContainerStyle={{paddingBottom: 100,}}>
                <Categories/>
            </ScrollView>

    </SafeAreaView>
    
  )
}

