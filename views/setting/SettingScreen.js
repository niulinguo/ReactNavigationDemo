import React from 'react';
import {Button, View} from 'react-native';

export class SettingScreen extends React.Component {
  static navigationOptions = {
    title: '设置',
  };

  render() {
    return (
      <View
        style={{flex: 1, justifyContent: 'space-evenly', alignItems: 'center'}}>
        <Button
          title="打开菜单"
          onPress={() => this.props.navigation.openDrawer()}
        />
      </View>
    );
  }
}
