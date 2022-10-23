import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const LoadMore = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getData();
  }, [page]);

  const getData = async () => {
    const apiURL = `https://jsonplaceholder.typicode.com/photos?_limit=10&_page=${page}`;
    await axios
      .get(apiURL)
      .then(res => {
        setData(data.concat(res.data));
      })
      .catch(err => console.log(err));
  };

  const _renderItem = ({item}) => {
    return (
      <View style={styles.itemRow}>
        <Image source={{uri: item.url}} style={styles.itemImage} />
        <Text style={styles.itemText}>{item.title}</Text>
        <Text style={styles.itemText}>{item.id}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={_renderItem}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={() => setPage(page + 1)}
        onEndReachedThreshold={0}
      />
    </View>
  );
};

export default LoadMore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  itemRow: {
    borderBottomColor: '#ccc',
    marginBottom: 10,
    borderBottomWidth: 1,
  },
  itemText: {
    fontSize: 16,
    padding: 5,
  },
  itemImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
});
