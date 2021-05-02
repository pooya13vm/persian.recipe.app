import React, {useContext, useEffect} from 'react';
import {FavContext} from '../context/favoContext';
import {Text, TouchableOpacity, View, Image} from 'react-native';
import Category from '../components/shared/category';
import {styles} from '../components/shared/style';

const entree =
  'https://www.saveur.com/app/uploads/2019/03/11/WSVNQHIRDDTVZHYCGAMFEB5ZCM-1024x768.jpg';
const soup =
  'https://www.saveur.com/app/uploads/2019/02/08/XO5FDD6YFGPZ4JW44VREIEZ2OE-1024x768.jpg';
const sideDish =
  'https://www.saveur.com/app/uploads/2019/03/14/O5Q6RWA6W37BIAJ6DE35LHJR6M-768x1024.jpg';
const pastry =
  'https://www.saveur.com/app/uploads/2019/03/27/65IZ6T5ARWV7AMI6YLUQWMFHEU-1024x768.jpg';

export default function Home({navigation}) {
  const context = useContext(FavContext);
  useEffect(() => {
    context.checkStorage();
  }, []);
  return (
    <View style={styles.container}>
      <Category
        navigation={navigation}
        uri={entree}
        title={'ENTREE'}
        name={'EntreeScreen'}
      />
      <Category
        navigation={navigation}
        uri={soup}
        title={'SOUP'}
        name={'SoupScreen'}
      />
      <Category
        navigation={navigation}
        uri={sideDish}
        title={'SIDE DISH'}
        name={'DishSideScreen'}
      />
      <Category
        navigation={navigation}
        uri={pastry}
        title={'PASTRY'}
        name={'PastryScreen'}
      />

      <TouchableOpacity
        style={styles.favBtn}
        onPress={() => navigation.navigate('Favorite')}>
        <Image
          style={styles.favBtnImage}
          source={{
            uri:
              'https://markevel.com/wp-content/uploads/2020/03/Persian-Food-Markevel.jpg',
          }}
        />
        <Text style={styles.favBtnText}>MY FAVORITES</Text>
      </TouchableOpacity>
    </View>
  );
}
