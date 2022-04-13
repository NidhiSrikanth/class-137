
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from './screens/home';
import DetailScreen from './screens/details';

export default function App() {
  return (
  <AppContainer/>
  );
}

const appStackNavigator= createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {headerShown: false}

    },
    Detail: {
      screen: DetailScreen,
      
  }
  },
  {initialRouteName: "Home"}

)

const AppContainer= createAppContainer(appStackNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
