import React from 'react';
import {Button, Text, View} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {MainTabBaseScreen} from '../MainTabBaseScreen';

export class MainScreen extends MainTabBaseScreen {
  static navigationOptions = {
    title: '首页',
  };

  state = {
    username: null,
  };

  componentDidMount(): void {
    super.componentDidMount();
    AsyncStorage.getItem('username').then(username => {
      this.setState({
        username: username,
      });
    });
  }

  render() {
    return (
      <View
        style={{flex: 1, justifyContent: 'space-evenly', alignItems: 'center'}}>
        <Text style={{fontSize: 30}}>{'欢迎回来：' + this.state.username}</Text>
        <Button
          title="退出登录"
          onPress={() => {
            AsyncStorage.removeItem('isLogin').then(() => {
              this.props.navigation.navigate('LoginStackNavigator');
            });
          }}
        />
        <Button
          title="看头条"
          onPress={() => this.props.navigation.navigate('HeadlineTabNavigator')}
        />
      </View>
    );
  }
}
