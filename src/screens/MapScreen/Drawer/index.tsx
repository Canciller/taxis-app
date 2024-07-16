import { useTheme } from "@react-navigation/native";
import { useWindowDimensions, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  clamp,
  interpolate,
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Big } from "./Big";
import { Small } from "./Small";

export function Drawer({
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
  const { height } = useWindowDimensions();
  const maxHeight = height * 0.9;
  const minHeight = height * 0.32;

  const theme = useTheme();
  const y = useSharedValue(maxHeight);

  const pan = Gesture.Pan()
    .onStart(() => {
      y.value = interpolate(isOpen.value, [0, 1], [minHeight, maxHeight]);
    })
    .onChange((e) => {
      y.value = clamp(y.value - e.changeY, minHeight, maxHeight);
      isOpen.value = interpolate(y.value, [minHeight, maxHeight], [0, 1]);
    })
    .onFinalize((e) => {
      isOpen.value = withTiming(e.velocityY < 0 ? 1 : 0, {
        duration: 300,
      });
    });

  const animatedStyles = useAnimatedStyle(() => {
    return {
      height: interpolate(isOpen.value, [0, 1], [minHeight, maxHeight]),
    };
  }, []);

  return (
    <GestureDetector gesture={pan}>
      <Animated.View
        style={[
          {
            backgroundColor: theme.colors.card,
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
          animatedStyles,
        ]}
      >
        <Big isOpen={isOpen} />
        <Small isOpen={isOpen} data={data} />
      </Animated.View>
    </GestureDetector>
  );
}
