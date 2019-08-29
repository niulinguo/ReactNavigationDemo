import React from 'react';
import {Text} from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
  createAppContainer,
  createSwitchNavigator,
  createDrawerNavigator,
  getActiveChildNavigationOptions,
} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import {SplashScreen} from './views/splash/SplashScreen';
import {SignUpScreen} from './views/login/SignUpScreen';
import {LoginScreen} from './views/login/LoginScreen';
import {MainScreen} from './views/home/MainScreen';
import {UserScreen} from './views/setting/UserScreen';
import {SettingScreen} from './views/setting/SettingScreen';
import {HeadlineScreen} from './views/headline/HeadlineScreen';
import {HeadlineDetailScreen} from './views/headline/HeadlineDetailScreen';
import {AboutScreen} from './views/setting/AboutScreen';

let drawConfigHeadlineTabNavigator = {
  navigationOptions: {
    title: '健康头条',
  },
  defaultNavigationOptions: ({navigation}) => ({
    tabBarLabel: ({focused}) => {
      const {routeName} = navigation.state;
      let tabName = '';
      switch (routeName) {
        case 'Headline1Screen': {
          tabName = '推荐';
          break;
        }
        case 'Headline2Screen': {
          tabName = '糖尿病';
          break;
        }
        case 'Headline3Screen': {
          tabName = '癌症';
          break;
        }
      }
      let textColor = focused ? 'white' : 'black';
      return (
        <Text style={{color: textColor, textAlign: 'center'}}>{tabName}</Text>
      );
    },
  }),
};

let drawConfigMainTabNavigator = {
  defaultNavigationOptions: ({navigation}) => ({
    tabBarIcon: ({focused}) => {
      const {routeName} = navigation.state;
      let iconName = '';
      switch (routeName) {
        case 'MainScreen': {
          iconName = 'home';
          break;
        }
        case 'HeadlineTabNavigator': {
          iconName = 'rss';
          break;
        }
        case 'UserScreen': {
          iconName = 'user';
          break;
        }
      }
      let iconColor = focused ? 'blue' : 'black';
      return <Icon name={iconName} size={30} color={iconColor} />;
    },
    tabBarLabel: ({focused}) => {
      const {routeName} = navigation.state;
      let tabName = '';
      switch (routeName) {
        case 'MainScreen': {
          tabName = '首页';
          break;
        }
        case 'HeadlineTabNavigator': {
          tabName = '健康头条';
          break;
        }
        case 'UserScreen': {
          tabName = '我的';
          break;
        }
      }
      let textColor = focused ? 'blue' : 'black';
      return (
        <Text style={{color: textColor, textAlign: 'center'}}>{tabName}</Text>
      );
    },
  }),
  navigationOptions: ({navigation, screenProps}) => ({
    ...getActiveChildNavigationOptions(navigation, screenProps),
  }),
};

const AppContainer = createAppContainer(
  createSwitchNavigator({
    SplashScreen: SplashScreen,
    LoginStackNavigator: createStackNavigator({
      LoginScreen: LoginScreen,
      SignUpScreen: SignUpScreen,
    }),
    MainStackNavigator: {
      screen: createStackNavigator({
        MainTabNavigator: createBottomTabNavigator(
          {
            MainScreen: MainScreen,
            HeadlineTabNavigator: createMaterialTopTabNavigator(
              {
                Headline1Screen: HeadlineScreen,
                Headline2Screen: HeadlineScreen,
                Headline3Screen: HeadlineScreen,
              },
              drawConfigHeadlineTabNavigator,
            ),
            UserScreen: UserScreen,
          },
          drawConfigMainTabNavigator,
        ),
        HeadlineDetailScreen: {
          screen: HeadlineDetailScreen,
          path: 'detail/:title',
        },
        SettingDrawerNavigator: createDrawerNavigator(
          {
            SettingScreen: SettingScreen,
            AboutScreen: AboutScreen,
          },
          {
            navigationOptions: ({navigation, screenProps}) => ({
              ...getActiveChildNavigationOptions(navigation, screenProps),
            }),
          },
        ),
      }),
      path: '',
    },
  }),
);

const prefix = 'adac://';

export default class App extends React.Component {
  render() {
    return <AppContainer uriPrefix={prefix} />;
  }
}
