import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import { petEmergencyGuide } from "@/utils/EmergencyDetails"

type guideType = {
    title: string,
    commonAreas?: [string],
    causes?: [string],
    symptoms?: [string],
    whatToDo: Array<string>,
    signs?: [string],
}

export default function EmergencyInstructions() {
    const {id} = useLocalSearchParams();

    const details = petEmergencyGuide.find((guide)=> guide.id == id);

  return (
    <View className="flex-1">
      <Text className="text-4xl text-blue-500 font-semibold">{details!.title}</Text>
      {details!.commonAreas && (
        <View className="mt-2 bg-blue-500/10 rounded-3 p-5">
            <Text className="text-2xl font-bold mb-2">Common Areas</Text>
            <View>
            {details!.commonAreas?.map((area, key)=> (
                <Text key={key}>{area}</Text>
            ))}
            </View>
        </View>
      )}
      {details!.signs && (
        <View className="mt-2 bg-blue-500/10 rounded-3 p-5">
            <Text className="text-2xl font-bold mb-2">Signs</Text>
            <View>
            {details!.signs?.map((sign, key)=> (
                <Text key={key}>{sign}</Text>
            ))}
            </View>
        </View>
      )}
      {details!.symptoms && (
        <View className="mt-2 bg-blue-500/10 rounded-3 p-5">
            <Text className="text-2xl font-bold mb-2">Symptoms</Text>
            <View>
            {details!.symptoms?.map((symptom, key)=> (
                <Text key={key}>{symptom}</Text>
            ))}
            </View>
        </View>
      )}
      {details!.causes && (
        <View className="mt-2 bg-blue-500/10 rounded-3 p-5">
            <Text className="text-2xl font-bold mb-2">Common Causes</Text>
            <View>
            {details!.causes?.map((cause, key)=> (
                <Text key={key}>{cause}</Text>
            ))}
            </View>
        </View>
      )}
      {details!.whatToDo && (
        <View className="mt-2 bg-blue-500/10 rounded-3 p-5">
            <Text className="text-2xl font-bold mb-2">What to do</Text>
            <View>
            {details!.whatToDo?.map((action, key)=> (
                <Text key={key}>{action}</Text>
            ))}
            </View>
        </View>
      )}
    </View>
  );
}
