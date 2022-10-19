import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

export const useRoutes = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const goToNavigation = (navigation: any, route: string) => {
    return navigation.navigate(route);
  };
  const setHeaderTransparent = (navigation: any) => {
    navigation.getParent()?.setOptions({tabBarStyle: {display: 'none'}});
    return navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
    });
  };
  return {Stack, Tab, goToNavigation, setHeaderTransparent};
};
