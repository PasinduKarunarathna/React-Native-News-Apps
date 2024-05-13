import { View, Text, ImageBackground } from 'react-native'
import React, { useCallback, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useFonts } from 'expo-font';
import* as SplashScreen from "expo-splash-screen";
import { LinearGradient } from 'expo-linear-gradient';

export default function SplashScreens() {
  const navigation = useNavigation();

  const [fontsLoaded, fontError] = useFonts({
    SpaceGroteskMedium: require("../fonts/SpaceGrotesk-Medium.ttf"),
    SpaceGroteskSemiBold: require("../fonts/SpaceGrotesk-SemiBold.ttf"),
    SpaceGroteskBold: require("../fonts/SpaceGrotesk-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async() =>{
      if(fontsLoaded || fontError){
          await SplashScreen.hideAsync();
      }

setTimeout(() =>{
  navigation.navigate("Welcome");
}, 3000)

  });
useEffect(() => {
  onLayoutRootView();
}, [fontsLoaded, fontError]);
if (!fontsLoaded){
  return null;
}

  return (
    <ImageBackground
      source={require("../../assets/images/welcom.jpg")}
      className="flex-1 justify-center items-center"
    >
      <LinearGradient
      colors={["rgb(0,85,0,0,95)", "rgba(0,85,0,95)"]}
      style={{
        position: "absolute",
        bottom:0,
        width:"100%",
        height:"100%"
      }}

      start={{x:0.5, y:0}}
      end={{x: 0.5, y:1}}
      />

      <View onLayout={onLayoutRootView}>
          <Text className="text-white text-3xl font-extrabold uppercase">
            World News
          </Text>
      </View>
    </ImageBackground>
  )
}