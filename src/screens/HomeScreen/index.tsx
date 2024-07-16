import { FlatList, ListRenderItem, View } from "react-native";
import { Search } from "./Search";
import { HistoryItem, HistoryItemType } from "./HistoryItem";
import { useCallback } from "react";
import { useTheme } from "@react-navigation/native";

const data: HistoryItemType[] = [
  {
    name: "Rosario 427",
    description: "Costa Azul, 22890 Ensenada, B.C.",
  },
  {
    name: "Aguila 188",
    description: "Contry, 64860 Monterrey, N.L.",
  },
];

export function HomeScreen() {
  const renderItem = useCallback<ListRenderItem<HistoryItemType>>(
    ({ item }) => {
      return <HistoryItem item={item} />;
    },
    [],
  );

  return (
    <FlatList
      renderItem={renderItem}
      data={data}
      ListHeaderComponent={Search}
      stickyHeaderIndices={[0]}
      ItemSeparatorComponent={ItemSeparator}
      contentContainerStyle={{
        paddingBottom: 20,
      }}
    />
  );
}

function ItemSeparator() {
  const theme = useTheme();

  return (
    <View
      style={{
        backgroundColor: theme.colors.border,
        height: 1,
        marginHorizontal: 20,
      }}
    />
  );
}
