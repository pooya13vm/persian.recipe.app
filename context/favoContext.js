import React, {createContext, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const FavContext = createContext();
export const FavProvider = props => {
  const [favoriteList, setFavoriteList] = useState([]);
  const toggler = id => {
    if (favoriteList.indexOf(id) !== -1) {
      //delete from list
      const favListDeleted = favoriteList.filter(x => x != id);
      setFavoriteList(favListDeleted);
      saveToStorage(favListDeleted);
    } else {
      //add to list
      setFavoriteList(favoriteList => [...favoriteList, id]);
      saveToStorage([...favoriteList, id]);
    }
  };
  const saveToStorage = async favoriteList => {
    try {
      const stringifiedFav = await JSON.stringify(favoriteList);
      await AsyncStorage.setItem('@myFavorite', stringifiedFav);
    } catch (error) {
      console.log(error);
    }
  };

  const checkStorage = async () => {
    const getST = await AsyncStorage.getItem('@myFavorite');
    const parsST = JSON.parse(getST);
    if (parsST.length == 0) {
      setFavoriteList([]);
    } else {
      setFavoriteList(parsST);
    }
  };

  return (
    <FavContext.Provider
      value={{
        favoriteList: favoriteList,
        toggler: toggler,
        checkStorage: checkStorage,
      }}>
      {props.children}
    </FavContext.Provider>
  );
};
