import React from 'react';
import { View, Text, StyleSheet,Button, Platform } from 'react-native';
import Colors from '../constants/Colors';
import { CATEGORIES } from '../data/dummy-data';


const CategoryMealScreen = props => {
  const catId = props.navigation.getParam('categoryId')
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return (
    <View style={styles.screen}>
      <Text>The Category Meal Screen!</Text>
        <Text>{selectedCategory.title}</Text>
      <Button title='Go to Details' onpress={() => {
        props.navigation.nagivate({
          routeName: 'MealDetail'
        })
      }}/>
      <Button title='Go Back' onPress={() => {
        props.navigation.pop();
      }}/>
    </View>
  );
};
CategoryMealScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(cat => cat.id ===catId);
  return {
    headerTitle:selectedCategory.title
    // headerStyle:{
    //   backgroundColor:Platform.OS === 'android' ?
    //   Colors.primaryColor : ''
    // },
    // headerTintColor:Platform.OS === 'android' ? 'white' :
    // Colors.primaryColor
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoryMealScreen;