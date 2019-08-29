import React from 'react';
import {Text, View} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export class SplashScreen extends React.Component {
  state = {
    countDown: 3,
    username: null,
    isLogin: null,
  };

  componentDidMount(): void {
    this._timer = setInterval(() => {
      if (this.state.countDown <= 1) {
        this._timer && clearInterval(this._timer);

        this.state.isLogin
          ? this.props.navigation.navigate('MainStackNavigator')
          : this.props.navigation.navigate('LoginStackNavigator');
        return;
      }

      this.setState({
        countDown: this.state.countDown - 1,
      });
    }, 1000);

    AsyncStorage.multiGet(['username', 'isLogin']).then(res => {
      this.setState({
        username: res[0][1],
        isLogin: res[1][1],
      });
    });
  }

  componentWillUnmount(): void {
    this._timer && clearInterval(this._timer);
  }

  render() {
    return (
      <View
        style={{flex: 1, justifyContent: 'space-evenly', alignItems: 'center'}}>
        <Text style={{fontSize: 30}}>{this.state.countDown}</Text>
        <Text style={{fontSize: 30}}>
          {this.state.isLogin ? '欢迎回来：' + this.state.username : '请先登录'}
        </Text>
      </View>
    );
  }
}
