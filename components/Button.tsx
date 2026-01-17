import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const Button = ({
  title,
  onPress,
  buttonContainerStyles,
  buttonTextStyles,
  buttonStyles,
}: {
  title: string;
  onPress: () => void;
  buttonContainerStyles: any;
  buttonTextStyles: any;
  buttonStyles: any;
}) => {
  return (
    <View style={buttonContainerStyles}>
      <TouchableOpacity onPress={onPress} style={buttonStyles}>
        <Text style={buttonTextStyles}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
