import { Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";

export type HistoryItemType = {
  name: string;
  description: string;
};

export function HistoryItem({ item }: { item: HistoryItemType }) {
  const theme = useTheme();

  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 15,
        paddingHorizontal: 20,
        paddingVertical: 10,
      }}
    >
      <AntDesign name="clockcircle" size={26} color={theme.colors.text} />

      <View
        style={{
          gap: 2,
        }}
      >
        <Text
          style={{
            color: theme.colors.text,
            fontWeight: "500",
            fontSize: 16,
          }}
        >
          {item.name}
        </Text>

        <Text
          style={{
            color: theme.colors.text,
          }}
        >
          {item.description}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
