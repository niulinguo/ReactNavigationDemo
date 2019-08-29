import React from 'react';
import {Button, View} from 'react-native';
import {getAndIncrease} from '../CountUtil';
import {MainTabBaseScreen} from '../MainTabBaseScreen';

export class HeadlineScreen extends MainTabBaseScreen {
  state = {
    newsTitle: '健康头条：' + getAndIncrease(),
  };

  render() {
    return (
      <View
        style={{flex: 1, justifyContent: 'space-evenly', alignItems: 'center'}}>
        <Button
          title={this.state.newsTitle}
          onPress={() =>
            this.props.navigation.navigate('HeadlineDetailScreen', {
              title: this.state.newsTitle,
            })
          }
        />
      </View>
    );
  }
}
