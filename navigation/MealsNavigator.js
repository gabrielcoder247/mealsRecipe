import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from "react-navigation";

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/Colors';
import { Platform } from 'react-native';



const MealsNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoryMeals: {
    screen: CategoryMealsScreen
  },
  MealDetail: MealDetailScreen
}, {
  // initialRouteName :'categories',
  defaultNavigatorOptions:{
    headerStyle:{
    backgroundColor:Platform.OS === 'android ' ?
    Colors.primaryColor: ''
    },
    headerTintColor:Platform.OS === 'android' ? 'white' : Colors.primaryColor,
    headerTitle:'A Screen'
  }
}
);

export default createAppContainer(MealsNavigator);