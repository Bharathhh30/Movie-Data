import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons'

interface Props {
    placeHolder : string
    onPress ?: ()=>void
    value : string
    onChangeText? : (text:string) => void
}

const SearchBar = ({placeHolder,onPress,value , onChangeText}:Props) => {
  return (
    <View className='flex-row items-center bg-dark-200 rounded-full px-5 py-1 gap-1'>
        <Image source={icons.search} className='w-5 h-5 ' resizeMode='contain' tintColor={"#ab8bff"} />
        <TextInput 
            onPress={onPress}
            placeholder={placeHolder}
            value={value}
            onChangeText={onChangeText}
            placeholderTextColor={"#a8b5db"}
            className='flex-1 ml-2 text-white'
        />
    </View>
  )
}

export default SearchBar