import React from 'react';
import {Button, View, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';

export class LoginScreen extends React.Component {
  static navigationOptions = {
    title: '登录页',
  };

  state = {
    username: null,
  };

  componentDidMount(): void {
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
        <Input
          placeholder="请输入用户名"
          leftIcon={<Icon name="user" size={24} color="black" />}
          onChangeText={text => {
            this.setState({
              username: text,
            });
          }}
          value={this.state.username}
        />
        <Button
          title="登录"
          onPress={() => {
            if (!this.state.username) {
              Alert.alert('error', '请输入用户名');
              return;
            }
            AsyncStorage.multiSet([
              ['username', this.state.username],
              ['isLogin', 'True'],
            ]).then(() => {
              this.props.navigation.navigate('MainStackNavigator');
            });
          }}
        />
        <Button
          title="没有账号，去注册"
          onPress={() => this.props.navigation.navigate('SignUpScreen')}
        />
      </View>
    );
  }
}
