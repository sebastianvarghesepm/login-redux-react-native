/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import login from './login';
import UserList from './userlist';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {userlogin, userlist} from './redux/initialState';

import {combineReducers} from 'redux';

const rootReducer = combineReducers({loginReducer, userlistReducer});
function userlistReducer(state = userlist, action) {
  switch (action.type) {
    default:
      return state;
  }
}
function loginReducer(state = userlogin, action) {
  switch (action.type) {
    case 'LOGIN_USER':
      return new Object({
        ...state,
        isLoggedIn: action.payload.isLoggedIn,
      });

    default:
      return state;
  }
}
const Stack = createStackNavigator();
const store = createStore(rootReducer);
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="login"
            component={login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="UserList"
            component={UserList}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
