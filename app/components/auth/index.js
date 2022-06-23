import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import AuthForm from './authForm';
import AuthLogo from './authLogo';
import {getTokens} from '../../utils/misc'
class AuthComponent extends Component {
  state = {
    loading: false,
  };

  goWithoutLogin = () => {
    this.props.navigation.navigate('AppTapCompoment');
  };

  componentDidMount(){
    getTokens();
  }

  render() {
    if (this.state.loading) {
      return (
        <View style={styles.loading}>
          <ActivityIndicator />
        </View>
      );
    } else {
      return (
        <ScrollView style={styles.container}>
          <View>
            <AuthLogo />
            <AuthForm goWithoutLogin={this.goWithoutLogin} />
          </View>
        </ScrollView>
      );
    }
  }
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#7487C5',
    paddingTop: 130,
    paddingRight: 50,
    paddingLeft: 50,
  },
});

export default AuthComponent;
