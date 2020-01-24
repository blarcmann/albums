import React from 'react';
import {Text, View} from 'react-native';

const Header = props => {
  const {textStyle, viewStyle} = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.title}</Text>
    </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 20,
  },
  viewStyle: {
    backgroundColor: '#fafafa',
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    paddingTop: 30,
    shadowColor: '#888',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    // elevation: 2,
    // position: 'relative',
  },
};

export default Header;
