import React from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';
import colorMap from './color';
import {Input} from 'react-native-elements';

export class ColorScreen extends React.Component {
  static navigationOptions = {
    title: '颜色',
  };

  constructor({props}) {
    super(props);

    let colorArr = [];
    for (let key in colorMap) {
      let value = colorMap[key];
      colorArr.push({
        name: key,
        value: value,
      });
    }

    this.state = {
      colorList: colorArr,
      filterText: '',
    };
  }

  renderItem = ({item}) => {
    return (
      <View>
        <Text
          style={{
            ...styles.item,
            backgroundColor: item.name,
            color: this.colorReverse(item.value),
          }}>
          {item.name + '(' + item.value + ')'}
        </Text>
      </View>
    );
  };

  colorReverse = oldColor => {
    oldColor = '0x' + oldColor.replace(/#/g, '');
    if (oldColor > 0x888888) {
      return '#000000';
    } else {
      return '#ffffff';
    }
    // let str = '000000' + (0xffffff - oldColor).toString(16);
    // return '#' + str.substring(str.length - 6, str.length);
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <Input
          onChangeText={text => {
            this.setState({
              filterText: text,
            });
          }}
        />
        <FlatList
          data={this.state.colorList.filter(item => {
            return (
              item.name.indexOf(this.state.filterText) !== -1 ||
              item.value.indexOf(this.state.filterText) !== -1
            );
          })}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
