import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  SafeAreaView,
} from 'react-native';
import ListItem from './components/ListItem';
import dummyarticles from './dummies/articles';
import Constants from 'expo-constants';
import axios from 'axios';

const URL = `http://newsapi.org/v2/top-headlines?country=jp&category=business&apiKey=${Constants.manifest.extra.newsApiKey}`;
export default function App() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await axios.get(URL);
      setArticles(response.data.articles);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <SafeAreaView styles={styles.container}>
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            imageUrl={item.urlToImage}
            author={item.author}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      ></FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
