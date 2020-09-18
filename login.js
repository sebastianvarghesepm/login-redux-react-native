import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import {CheckEmail, CheckPassword} from './validation';
import {connect} from 'react-redux';

class login extends React.Component {
  constructor() {
    super();
    this.state = {name: '', pwd: '', errmsg: ''};
  }
  validateLogin = (email, pwd) => {
    let emailErr = CheckEmail(email);
    let pwdErr = CheckPassword(pwd);
    let errMsg = '';
    console.log(emailErr);
    if (!emailErr) {
      errMsg = 'Please Enter Valid Email';
      if (!pwdErr) {
        errMsg += ' and Password';
      }
    } else if (!pwdErr) {
      errMsg = 'Please Enter Valid Password';
      if (!emailErr) {
        errMsg += ' and Email';
      }
    }
    this.setState({errmsg: errMsg});

    if (emailErr && pwdErr) {
      return true;
    }
    return false;
  };

  render() {
    console.log('props from store ', this.props);
    console.log('local state', this.state);
    const {isLoggedIn, username, password} = this.props;
    return (
      <View style={{flex: 1, marginHorizontal: 50, marginTop: 100}}>
        <TextInput
          style={{borderColor: 'black', borderWidth: 1}}
          value={this.state.name}
          onChangeText={(name) => {
            this.setState({name});
          }}
          placeholder={'Email'}
        />
        <TextInput
          style={{borderColor: 'black', borderWidth: 1, marginTop: 5}}
          value={this.state.pwd}
          onChangeText={(pwd) => {
            this.setState({pwd});
          }}
          placeholder={'Password'}
        />
        <Text style={{color: 'red'}}>{this.state.errmsg}</Text>
        <View>
          <TouchableOpacity
            style={localStyles.button}
            onPress={() => {
              if (this.validateLogin(this.state.name, this.state.pwd)) {
                let nav = this.props.loginUser(
                  true,
                  this.state.name,
                  this.state.pwd,
                );

                if (nav.payload.isLoggedIn) {
                  this.props.navigation.navigate('UserList');
                }
              }
            }}>
            <Text style={{color: 'red'}}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  console.log('from login page maps', state);
  return {
    // isLoggedIn: state.isLoggedIn,
    // username: state.username,
    // password: state.password,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loginUser: (isLoggedIn, username, password) =>
      dispatch({
        type: 'LOGIN_USER',
        payload: {isLoggedIn, username, password},
      }),
  };
}

const localStyles = StyleSheet.create({
  button: {
    marginTop: 10,
    width: 250,
    height: 50,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(login);
