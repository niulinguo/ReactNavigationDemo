import React from 'react';
import {BackHandler, ToastAndroid, Alert} from 'react-native';

export class MainTabBaseScreen extends React.Component {
  _didFocusSubscription;
  _willBlurSubscription;
  _lastBackTime;

  constructor(props) {
    super(props);
    this._didFocusSubscription = props.navigation.addListener(
      'didFocus',
      payload => {
        BackHandler.addEventListener(
          'hardwareBackPress',
          this.onBackButtonPressAndroid,
        );
      },
    );
  }

  componentDidMount() {
    this._willBlurSubscription = this.props.navigation.addListener(
      'willBlur',
      payload => {
        BackHandler.removeEventListener(
          'hardwareBackPress',
          this.onBackButtonPressAndroid,
        );
      },
    );
  }

  onBackButtonPressAndroid = () => {
    let currTime = new Date().getTime();
    if (currTime - this._lastBackTime < 2000) {
      BackHandler.exitApp();
      return false;
    }
    this._lastBackTime = currTime;
    ToastAndroid.show('再按一次退出程序', ToastAndroid.SHORT);
    return true;
  };

  componentWillUnmount() {
    this._didFocusSubscription && this._didFocusSubscription.remove();
    this._willBlurSubscription && this._willBlurSubscription.remove();
    BackHandler.removeEventListener(
      'hardwareBackPress',
      this.onBackButtonPressAndroid,
    );
  }
}
