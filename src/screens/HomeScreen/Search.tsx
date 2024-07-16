import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useNavigation, useTheme } from "@react-navigation/native";

export function Search() {
  const theme = useTheme();
  const navigation = useNavigation<any>();

  return (
    <View
      style={{
        padding: 20,
        paddingBottom: 10,
      }}
    >
      <TouchableOpacity
        onPress={() => navigation.navigate("map")}
        style={{
          backgroundColor: theme.colors.card,
          padding: 15,
          borderRadius: 9999,
          flexDirection: "row",
          gap: 12,
          alignItems: "center",
          borderWidth: StyleSheet.hairlineWidth,
          borderColor: theme.colors.border,
        }}
      >
        <FontAwesome name="search" color={theme.colors.text} size={24} />

        <Text
          style={{
            color: theme.colors.text,
            fontWeight: "500",
            fontSize: 18,
          }}
        >
          Where to?
        </Text>
      </TouchableOpacity>
    </View>
  );
}
