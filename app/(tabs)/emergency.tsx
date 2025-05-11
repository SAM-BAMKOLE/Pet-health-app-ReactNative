import { useBottomTabOverflow } from "@/app-example/components/ui/TabBarBackground.ios";
import { petEmergencyGuide } from "@/utils/EmergencyDetails";
import { Link } from "expo-router";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Animated, { interpolate, useAnimatedRef, useAnimatedStyle, useScrollViewOffset } from "react-native-reanimated";

const HEADER_HEIGHT = 250;

export default function Emergency() {
    const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);
  const bottom = useBottomTabOverflow();

  const headerAnimatedStyle = useAnimatedStyle(() => {
    
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75]
          ),
        },
        {
          scale: interpolate(scrollOffset.value, [-HEADER_HEIGHT, 0, HEADER_HEIGHT], [2, 1, 1]),
        },
      ],
    };
  });

    return (
        <SafeAreaView className="px-5">
            <Animated.ScrollView
            ref={scrollRef}
            scrollEventThrottle={16}
            scrollIndicatorInsets={{ bottom }}
            showsVerticalScrollIndicator={false}>
            <Animated.View style={[
                styles.header,
                headerAnimatedStyle,
            ]}>
            <Image source={ require("@/assets/images/cute-dog.jpg") } className="w-80 h-60" resizeMode="contain"  />
            </Animated.View>
            <View className="bg-white mt-5">
            <Text className="text-3xl mb-2 font-extrabold text-black">Quick First Aid Tips</Text>
             <Text className="mb-5 text-lg text-gray-700 leading-[1.2]">Here are some quick tips on first aid for your pets incase of emergencies.</Text>
            <View className="">
                {petEmergencyGuide.map((guide, key)=> (
                    <View key={key}>
                    <Link href={`instructions/${guide.id}`} className="w-full px-2 py-3 rounded mb-3 bg-red-500/5 text-lg">{guide.title}</Link>
                </View>
                ))}
            </View>
            </View>
            </Animated.ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
      height: HEADER_HEIGHT,
      overflow: 'hidden',
      borderRadius: "1rem",
      position: "relative",
    }
  });

/*
 showsVerticalScrollIndicator={false} contentContainerStyle={{minHeight: "60%", paddingBottom: 10}}
 */