import React, {Component} from "react";
import {Text, View} from "react-native";

export default class Header extends Component {

  render(){
    const {textStyle, viewStyle} = styles;
    return(
      <View style={viewStyle}>
        <Text style={textStyle}>{this.props.headerText}</Text>
      </View>
    )
  }

}

const styles = {
  viewStyle: {
    backgroundColor: '#b1bbcc',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20,
  }
}
