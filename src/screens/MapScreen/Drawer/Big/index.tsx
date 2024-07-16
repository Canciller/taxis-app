import { StyleSheet, View } from "react-native";
import { Header } from "./Header";
import Animated, {
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

export function Big({ isOpen }: { isOpen: SharedValue<number> }) {
  const animatedStyles = useAnimatedStyle(() => {
    return {
      display: isOpen.value === 0 ? "none" : "flex",
      opacity: isOpen.value,
    };
  }, []);

  return (
    <Animated.View style={[StyleSheet.absoluteFill, animatedStyles]}>
      <Header />

      <View style={{ flex: 1 }}></View>
    </Animated.View>
  );
}
