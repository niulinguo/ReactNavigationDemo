import React from 'react';
import {Button, View} from 'react-native';
import {getAndIncrease} from '../CountUtil';

export class HeadlineDetailScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('title'),
    };
  };

  state = {
    newsTitle1: '健康头条：' + getAndIncrease(),
    newsTitle2: '健康头条：' + getAndIncrease(),
    newsTitle3: '健康头条：' + getAndIncrease(),
  };

  render() {
    return (
      <View
        style={{flex: 1, justifyContent: 'space-evenly', alignItems: 'center'}}>
        <Button
          title={'猜你喜欢：' + this.state.newsTitle1}
          onPress={() =>
            this.props.navigation.push('HeadlineDetailScreen', {
              title: this.state.newsTitle1,
            })
          }
        />
        <Button
          title={'猜你喜欢：' + this.state.newsTitle2}
          onPress={() =>
            this.props.navigation.push('HeadlineDetailScreen', {
              title: this.state.newsTitle2,
            })
          }
        />
        <Button
          title={'猜你喜欢：' + this.state.newsTitle3}
          onPress={() =>
            this.props.navigation.push('HeadlineDetailScreen', {
              title: this.state.newsTitle3,
            })
          }
        />
        <Button
          title="返回列表"
          onPress={() => this.props.navigation.navigate('HeadlineTabNavigator')}
        />
      </View>
    );
  }
}
