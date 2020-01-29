import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Bttn = ({pressEvent, children}) => {
  const {button, button_text} = styles;
  return (
    <TouchableOpacity style={button} onPress={pressEvent}>
      {<Text style={button_text}>{children}</Text>}
    </TouchableOpacity>
  );
};

const styles = {
  button: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#FFF',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007AFF',
    margin: 5,
  },
  button_text: {
    alignSelf: 'center',
    color: '#007AFF',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 14,
    paddingBottom: 14,
  },
};
export default Bttn;
