import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation, useTheme } from "@react-navigation/native";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export function Header() {
  const theme = useTheme();
  const navigation = useNavigation();

  return (
    <View
      style={{
        paddingHorizontal: 20,
        paddingVertical: 10,
        gap: 15,
      }}
    >
      <View
        style={{
          backgroundColor: theme.colors.text,
          height: 8,
          width: 50,
          borderRadius: 9999,
          alignSelf: "center",
        }}
      />

      <View>
        <View
          style={{
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontWeight: "500",
              fontSize: 18,
              color: theme.colors.text,
            }}
          >
            Plan your ride
          </Text>
        </View>

        <View
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            height: 24,
            width: 24,
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesome5
              name="arrow-left"
              size={24}
              color={theme.colors.text}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
