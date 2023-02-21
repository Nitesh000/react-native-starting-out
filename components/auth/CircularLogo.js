import { View, Image, Text } from "react-native";

const CircularLogo = () => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={require("../../assets/smirk.png")}
        style={{
          width: 200,
          height: 200,
          borderRadius: 125,
          marginVertical: 20,
        }}
      />
    </View>
  );
};

export default CircularLogo;
