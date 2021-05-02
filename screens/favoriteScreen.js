import React, {useContext} from 'react';
import {View, Text, FlatList} from 'react-native';
import {FavContext} from '../context/favoContext';
import FoodItem from '../components/shared/foodItem';
import data from '../recipes.json';
import {styles} from './../components/shared/style';

const Favorite = ({navigation}) => {
  const context = useContext(FavContext);
  const favListChecker = context.favoriteList.length === 0 ? true : false;
  const Empty = () => {
    return (
      <Text style={styles.favEmptyTxt}>There is no item in favorite list</Text>
    );
  };
  const List = () => {
    let favListArray = context.favoriteList;
    return (
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => {
          return favListArray.map(x => {
            if (item.id == x) {
              return (
                <FoodItem
                  key={item.id.toString()}
                  id={item.id}
                  title={item.title}
                  url={item.imgUrl}
                  disc={item.disc}
                  navigation={navigation}
                />
              );
            }
          });
        }}
      />
    );
  };
  return (
    <View style={styles.categoryContainer}>
      {favListChecker ? <Empty /> : <List />}
    </View>
  );
};

export default Favorite;
