import React, {useState} from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';
import {styles} from './style';

const Category = ({navigation, uri, title, name}) => {
  const [imageLoad, setImageLoading] = useState(true);
  return (
    <TouchableOpacity
      style={styles.homeItem}
      onPress={() => navigation.navigate({name})}>
      <Image
        style={[styles.homeItemImg, {display: imageLoad ? 'none' : 'flex'}]}
        onLoadEnd={() => setImageLoading(false)}
        source={{
          uri: uri,
        }}
      />
      {imageLoad ? (
        <View style={styles.loadingArea}>
          <Image
            source={require('../../assets/images/7.gif')}
            style={styles.homeLoadingImg}
            resizeMode="contain"
          />
          <Text>check internet connection</Text>
          <Text style={{marginTop: '24%'}}>Loading ...</Text>
        </View>
      ) : null}
      <Text style={styles.homeItemText}>{title}</Text>
    </TouchableOpacity>
  );
};
export default Category;
