import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import Home from './screens/homeScreen';
import EntreeScreen from './screens/entreeScreen';
import PastryScreen from './screens/pastryScreen';
import DishSideScreen from './screens/sideDishScreen';
import SoupScreen from './screens/soupScreen';
import RecipeScreen from './screens/recipeScreen';
import Favorite from './screens/favoriteScreen';
import {FavProvider} from './context/favoContext';

const Stack = createStackNavigator();

const App = () => {
  return (
    <FavProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{
              title: 'PERSIAN RECIPES',
              headerBackTitle: true,
              headerTitleStyle: {
                color: '#252525',
                alignSelf: 'center',
                fontSize: 36,
                fontWeight: 'bold',
              },
            }}
            name="Home"
            component={Home}
          />
          <Stack.Screen
            name="EntreeScreen"
            component={EntreeScreen}
            options={{
              ...TransitionPresets.SlideFromRightIOS,
              title: 'ENTREE',
            }}
          />
          <Stack.Screen
            name="SoupScreen"
            component={SoupScreen}
            options={{
              ...TransitionPresets.SlideFromRightIOS,
              title: 'SOUP',
            }}
          />
          <Stack.Screen
            name="PastryScreen"
            component={PastryScreen}
            options={{
              ...TransitionPresets.SlideFromRightIOS,
              title: 'PASTRY',
            }}
          />
          <Stack.Screen
            name="DishSideScreen"
            component={DishSideScreen}
            options={{
              ...TransitionPresets.SlideFromRightIOS,
              title: 'DISH SIDE',
            }}
          />
          <Stack.Screen
            name="RecipeScreen"
            component={RecipeScreen}
            options={{
              ...TransitionPresets.RevealFromBottomAndroid,
              title: 'RECIPE',
            }}
          />
          <Stack.Screen
            name="Favorite"
            component={Favorite}
            options={{
              ...TransitionPresets.RevealFromBottomAndroid,
              title: 'FAVORITE LIST',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </FavProvider>
  );
};

export default App;
