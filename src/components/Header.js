import { View, Text, Switch, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useColorScheme } from 'nativewind';
import { MagnifyingGlassIcon } from "react-native-heroicons/outline"

export default function Header() {
const navigation = useNavigation();
const { colorScheme, toggleColorScheme} = useColorScheme();
  return (
    <View className="flex-row justify-between items-center mx-4 mt-4">
        <View>
        <Text style={{ fontSize: 20, color: colorScheme === 'dark' ? 'white' : 'green', fontFamily: "SpaceGroteskBold", textTransform: 'uppercase' }}>
            World News
        </Text>

        </View>

        <View className="flex-row space-x-4 rounded-full justify-center items-center">
            <Switch value={colorScheme == "dark"} onChange={toggleColorScheme}/>

            <TouchableOpacity
            onPress={() => navigation.navigate("Search")}
            className="bg-gray-200 dark:bg-green-800 rounded-full p-2"
            >

                <MagnifyingGlassIcon size={25} strokeWidth={2} color={colorScheme == "dark" ? "white" : "green"}/>

            </TouchableOpacity>
        </View>
    </View>
  )
}