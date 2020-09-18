import React from 'react';
import {View, Text, Image, FlatList, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
const userlist = ({list, ...props}) => {
  return (
    <View style={{flex: 1}}>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={list}
        renderItem={({item}) => (
          <View
            style={{
              marginVertical: 10,
              borderWidth: 1,
              borderColor: 'red',
              color: 'blue',
            }}>
            <Text>{item.name}</Text>
            <Text>{item.age}</Text>
            <Text>{item.gender}</Text>
            <Text>{item.email}</Text>
            <Text>{item.phoneNo}</Text>
          </View>
        )}
      />
    </View>
  );
};
function mapStateToProps(state) {
  // return {onChangeuserlist(state)};
  return {list: state.userlistReducer.user};
}
export default connect(mapStateToProps)(userlist);
