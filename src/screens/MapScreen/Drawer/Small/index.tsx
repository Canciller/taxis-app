import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Header } from "./Header";
import Animated, {
  SharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { useTheme } from "@react-navigation/native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { MaterialIcons } from "@expo/vector-icons";

export function Small({
  isOpen,
  data,
}: {
  isOpen: SharedValue<number>;
  data: {
    display_name: string;
    address: {
      house_number: string;
      road: string;
    };
  } | null;
}) {
  const theme = useTheme();

  const animatedStyles = useAnimatedStyle(() => {
    return {
      display: isOpen.value === 1 ? "none" : "flex",
      opacity: 1 - isOpen.value,
    };
  }, []);

  return (
    <Animated.View style={[StyleSheet.absoluteFill, animatedStyles]}>
      <Header />

      <View style={{ flex: 1, padding: 20, gap: 15 }}>
        <TouchableOpacity
          onPress={() => {
            isOpen.value = withTiming(1, {
              duration: 300,
            });
          }}
        >
          <View
            style={{
              backgroundColor: theme.colors.background,
              padding: 14,
              borderRadius: 10,
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
            }}
          >
            <MaterialIcons
              name="location-pin"
              size={18}
              color={theme.colors.text}
            />

            <View style={{ flex: 1 }}>
              <Text
                style={{
                  color: theme.colors.text,
                }}
                numberOfLines={1}
              >
                {data
                  ? `${data.address.road} ${data.address.house_number ?? ""}`
                  : null}
              </Text>
            </View>

            <FontAwesome name="search" color={theme.colors.text} size={16} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View
            style={{
              backgroundColor: theme.colors.text,
              alignItems: "center",
              padding: 20,
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                color: theme.colors.card,
                fontSize: 16,
              }}
            >
              Confirm destination
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
}
