import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {styles} from './style';

const FoodItem = ({id, title, url, disc, navigation}) => {
  const [loadingImage, setImageLoading] = useState(true);
  return (
    <View>
      <View style={styles.cardContainer}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Image
          style={[styles.cardImg, {display: loadingImage ? 'none' : 'flex'}]}
          source={{
            uri: url,
          }}
          onLoadEnd={() => setImageLoading(false)}
        />
        {loadingImage ? (
          <View style={styles.loadingArea}>
            <Image
              style={styles.cardImgLoading}
              source={require('../../assets/images/7.gif')}
              resizeMode="contain"
            />
            <Text style={{marginTop: '27%'}}>Loading ...</Text>
          </View>
        ) : null}
        <Text style={styles.cardDis}>{disc}</Text>
        <TouchableOpacity
          style={styles.cardBtn}
          onPress={() => navigation.navigate('RecipeScreen', {id: id})}>
          <Text style={styles.cardBtnTxt}>Read the recipe</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FoodItem;
