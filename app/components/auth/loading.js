import React, {Component} from 'react';
import {Animated, TouchableNativeFeedbackBase, View} from 'react-native';
import {auth} from '../../utils/misc';
const LogoImage = require('../../assets/images/winthiary_login_logo.png');

export default class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      xValue: new Animated.Value(60),
      opacity: new Animated.Value(0),
    };
  }
  onLoad = () => {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 2000,
    }).start(() => {
      this.onComplete();
    });
  };

  onComplete = () => {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.props.navigation.navigate('AppTapCompoment');
      } else {
        this.props.navigation.navigate('SignIn');
      }
    });
  };

  render() {
    return (
      <View
        style={{
          height: '100%',
          backgroundColor: '#7487C5',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Animated.Image
          source={LogoImage}
          style={{
            width: 300,
            height: 88,
            opacity: this.state.opacity,
            ㅣㄷㄹㅅ: this.state.opacity.interpolate({
              inputRange: [0, 1],
              outputRange: [60, 0],
            }),
          }}
          onLoad={this.onLoad}></Animated.Image>
      </View>
    );
  }
}
