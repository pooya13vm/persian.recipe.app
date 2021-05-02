import React, {useContext} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Share,
  ImageBackground,
  ScrollView,
} from 'react-native';
import data from '../recipes.json';
import {Icon} from 'react-native-elements';
import {FavContext} from './../context/favoContext';
import {styles} from './../components/shared/style';

const RecipeScreen = ({route}) => {
  const context = useContext(FavContext);

  const onShare = async (title, disc, image) => {
    try {
      const result = await Share.share({
        message: `${title}
           ${disc}
           ${image}`,
        title: title,
      });
    } catch (error) {
      alert(error.message);
    }
  };

  let {id} = route.params;
  let checkFavorite = context.favoriteList.includes(id);
  return (
    <View style={styles.categoryContainer}>
      {data.map(item => {
        if (item.id == id) {
          return (
            <ScrollView key={item.id.toString()}>
              <ImageBackground
                source={{uri: item.imgUrl}}
                style={styles.recipeImg}
                imageStyle={{
                  borderBottomLeftRadius: 12,
                  borderBottomRightRadius: 12,
                }}>
                <View style={styles.recipeIconArea}>
                  <TouchableOpacity
                    onPress={() => onShare(item.title, item.disc, item.imgUrl)}>
                    <Icon
                      name="share"
                      type="material"
                      color="#404040"
                      size={34}
                      style={styles.recipeIcons}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => context.toggler(id)}>
                    <Icon
                      name={checkFavorite ? 'favorite' : 'favorite-border'}
                      type="material"
                      color="#ff0000"
                      size={34}
                      style={styles.recipeIcons}
                    />
                  </TouchableOpacity>
                </View>
              </ImageBackground>
              <Text style={styles.recipeTitle}>{item.title}</Text>
              <View style={styles.recipeTextContainer}>
                <Text style={styles.recipeYield}>
                  Yield : {item.recipe.yield}
                </Text>
                <Text style={styles.recipeDiscTitle}>Ingredients :</Text>
                {item.recipe.Ingredients.split('&').map((item, index) => {
                  return (
                    <Text style={styles.recipeDisc} key={index.toString()}>
                      {index + 1}- {item}
                    </Text>
                  );
                })}
                <Text style={styles.recipeDiscTitle}>Instructions :</Text>
                {item.recipe.Instructions.split('&').map((item, index) => {
                  return (
                    <Text style={styles.recipeDisc} key={index.toString()}>
                      {index + 1}- {item}
                    </Text>
                  );
                })}
              </View>
            </ScrollView>
          );
        }
      })}
    </View>
  );
};

export default RecipeScreen;
