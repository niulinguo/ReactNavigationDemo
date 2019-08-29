import React from 'react';
import {Button, Text, View} from 'react-native';
import {MainTabBaseScreen} from '../MainTabBaseScreen';

export class UserScreen extends MainTabBaseScreen {
  static navigationOptions = {
    title: '我的',
  };

  render() {
    return (
      <View
        style={{flex: 1, justifyContent: 'space-evenly', alignItems: 'center'}}>
        <Button
          title="设置"
          onPress={() =>
            this.props.navigation.navigate('SettingDrawerNavigator')
          }
        />
      </View>
    );
  }
}
