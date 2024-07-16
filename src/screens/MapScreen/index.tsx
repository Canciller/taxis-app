import { TouchableOpacity, useWindowDimensions, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTheme } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Drawer } from "./Drawer";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import MapView, { Region } from "react-native-maps";
import { useEffect, useState } from "react";
import axios from "axios";
import { MaterialIcons } from "@expo/vector-icons";

const latitudeDelta = 0.0015;
const longitudeDelta = 0.0015;

const ACCESS_TOKEN = "pk.035469a7603e516fb33719221c2cc770";

export function MapScreen({ navigation }: NativeStackScreenProps<any>) {
  const { height, width } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const theme = useTheme();

  const isOpen = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: 1 - isOpen.value,
      display: isOpen.value === 1 ? "none" : "flex",
    };
  }, []);

  const [region, setRegion] = useState<Region>({
    latitudeDelta,
    longitudeDelta,
    latitude: 25.638330416716805,
    longitude: -100.27998600022252,
    // latitude: 25.638271075966724,
    // longitude: -100.28003378215634,
  });

  const [data, setData] = useState<{
    display_name: string;
    address: {
      house_number: string;
      road: string;
    };
  } | null>(null);

  useEffect(() => {
    // console.log(JSON.stringify(region, null, 2));

    const fun = async () => {
      try {
        const res = await axios.get(
          `https://us1.locationiq.com/v1/reverse?key=${ACCESS_TOKEN}&lat=${region.latitude}&lon=${region.longitude}&format=json`,
        );

        const data = res.data;
        setData(data);

        // console.log(JSON.stringify(data, null, 2));
      } catch (e) {
        console.error(e);
      }
    };

    fun();
  }, [region]);

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <MapView
        initialRegion={region}
        onRegionChangeComplete={setRegion}
        style={{
          width: "100%",
          height: "100%",
        }}
      />

      <View
        style={{
          position: "absolute",
          top: height / 2 - 24,
          left: width / 2 - 24,
        }}
      >
        <MaterialIcons
          name="location-pin"
          size={48}
          color={theme.colors.text}
        />
      </View>

      <Animated.View
        style={[
          {
            position: "absolute",
            left: 20,
            top: 20 + insets.top,
          },
          animatedStyles,
        ]}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome5
            name="arrow-circle-left"
            size={36}
            color={theme.colors.text}
          />
        </TouchableOpacity>
      </Animated.View>

      <Drawer isOpen={isOpen} data={data} />
    </View>
  );
}
