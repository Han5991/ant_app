import React, {Component} from 'react';
import {StyleSheet, View, ActivityIndicator, ScrollView} from 'react-native';
import AuthForm from './authForm';
import AuthLogo from './authLogo';
import {getTokens, setTokens} from '../../utils/misc';
import {autoSignIn} from '../../store/actions/user_actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class AuthComponent extends Component {
  goWithoutLogin = () => {
    this.props.navigation.navigate('AppTapCompoment');
  };

  componentDidMount() {
    getTokens(value => {
      if (value[1][1] !== null) {
        this.props.autoSignIn(value[2][1]).then(() => {
          if (this.props.User.auth.token) {
            setTokens(this.props.User.auth, () => {
              this.goWithoutLogin();
            });
          }
        });
      }
    });

    this.props.navigation.addListener('beforRemove', e => {
      e.preventDefalt();
    });
  }

  render() {
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

function mapStateToProps(state) {
  return {
    User: state.User,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({autoSignIn}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthComponent);
