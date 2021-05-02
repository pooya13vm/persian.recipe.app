import React from 'react';
import {View, FlatList} from 'react-native';
import data from '../recipes.json';
import FoodItem from './../components/shared/foodItem';
import {styles} from './../components/shared/style';

const DishSideScreen = ({navigation}) => {
  return (
    <View style={styles.categoryContainer}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => {
          if (item.group == 'side') {
            return (
              <FoodItem
                id={item.id}
                title={item.title}
                url={item.imgUrl}
                disc={item.disc}
                navigation={navigation}
              />
            );
          }
        }}
      />
    </View>
  );
};

export default DishSideScreen;
