import React from 'react';
import {Button, View} from 'react-native';

export class AboutScreen extends React.Component {
  static navigationOptions = {
    title: '关于',
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
