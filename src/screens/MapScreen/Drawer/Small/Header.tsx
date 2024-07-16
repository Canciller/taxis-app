import { useTheme } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";

export function Header() {
  const theme = useTheme();

  return (
    <View
      style={{
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 20,
        gap: 15,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: theme.colors.border,
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

      <View
        style={{
          gap: 5,
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
          Set your destination
        </Text>

        <Text
          style={{
            textAlign: "center",
            color: theme.colors.text,
          }}
        >
          Drag map to move pin
        </Text>
      </View>
    </View>
  );
}
