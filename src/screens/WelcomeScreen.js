import React from 'react'
import { View, Text, ImageBackground, TouchableOpacity } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

export default function WelcomeScreen() {
  const navigation = useNavigation();
  return (
    <ImageBackground
    source={require("../../assets/images/bg.jpg")}
    className="flex-1 justify-center items-center "
    >

      <LinearGradient
            colors={["transparent", "rgba(0,0,0,95)"]}
            style={{
              position: "absolute",
              bottom:0,
              width:"100%",
              height:"100%"
            }}

            start={{x:0.5, y:0}}
            end={{x: 0.5, y:1}}
            />

            <View className="flex-1 items-center justify-end max-w-[85%] space-y-4">
              <Text className=" text-4xl shadow-2xl text-white text-center tracking-wider"
              style={{
                fontSize:wp(10),
                fontFamily:"SpaceGroteskBold",
              }}
              >
                Stay Informed from Day One
              </Text>

              <Text className="text-white text-center max-w[85%] leading-12 tracking-wider"
              style={{
                fontSize: wp(4),
                fontFamily: "SpaceGroteskMedium",
              }}
              >
                Discover the latest News with our Seamless onboarding Experience 
              </Text>
            </View>

            <TouchableOpacity className="bg-green-900 rounded-full p-4 justify-center items-center w-[55%] mt-8"
            onPress={() => navigation.navigate("HomeTabs")}
            >
              <Text 
              className="text-base text-white"
              style={{
                fontSize: wp(4),
                fontFamily: "SpaceGroteskMedium",
              }}
              >
                Get Started</Text>
            </TouchableOpacity>

    </ImageBackground>
  )
}