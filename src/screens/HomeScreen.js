import { View, Text, useColorScheme,  } from 'react-native'
import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query';
import { fetchBreakingNews, fetchRecommendedNews } from '../../utils/NewsApi';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import Header from '../components/Header';

export default function HomeScreen() {
  const {colorScheme, toggleColorScheme} = useColorScheme();
  const [breakingNews, setBreakingNews] = useState([]);
  const [recommendedNewsUrl, setRecommendedNews] = useState([]);

//Breaking News
const {isLoading: isBreakingLoading} = useQuery({
  queryKey: ["breakingNews"],
  queryFn: fetchBreakingNews,
  onSuccess: (data) => {
    setBreakingNews(data.articles);
  },
  onError: (error) => {
    console.log("Error fetching breaking news:",error);
  },
});

//Recommended News
const {isLoading: isRecommendedNewsLoadingLoading} = useQuery({
  queryKey: ["recommendedNews"],
  queryFn: fetchRecommendedNews,
  onSuccess: (data) => {
    setRecommendedNews(data.articles);
  },
  onError: (error) => {
    console.log("Error fetching recommended news:",error);
  },
});

  return (
    <SafeAreaView>
      <StatusBar style={colorScheme == "dark" ? "light" : "dark"}/>

      <Header />
      
      

    </SafeAreaView>
  )
}