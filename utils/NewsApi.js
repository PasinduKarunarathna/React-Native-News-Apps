import { Query } from "@tanstack/react-query";
import { newsApiKey } from "./ApiKey";
import axios from "axios";
import { method } from "lodash";

// Endpoints

const apiBaseUrl = "https://newsapi.org/v2";

const breakingNewsUrl = `${apiBaseUrl}/top-headlines`;
const recommendedNewsUrl = `${apiBaseUrl}/top-headlines?country=us&category=business&apiKey=${newsApiKey}`;

const discoverNewsUrl = (discover) => `${apiBaseUrl}/top-headlines?country=us&category=${discover}&apiKey=${apiBaseUrl}`;

const searchNewsUrl = (query) => `${apiBaseUrl}/everything?q=${query}&apiKey=${newsApiKey}`;

const newsApiCall = async (endpoints, params) => {
    const options = {
        method: "GET",
        url:endpoints,
        params: params ? params : {},
    }

    try{
        const response = await axios.request(options);
        return response.data;
    } catch(error) {
        console.log(error);
        return {}
    }

};

export const fetchBreakingNews = async() => {
    return await newsApiCall(breakingNewsUrl);
}

export const fetchRecommendedNews = async() => {
    return await newsApiCall(recommendedNewsUrl);
}

export const fetchDiscoverNews = async(discover) => {
    return await newsApiCall(discoverNewsUrl(discover));
}

export const fetchSearchNews = async(query) => {
    const endpoint =searchNewsUrl(query);
    return await newsApiCall(endpoint);
}