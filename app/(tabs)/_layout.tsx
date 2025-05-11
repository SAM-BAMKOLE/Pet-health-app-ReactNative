import { Tabs } from "expo-router";


export default function _Layout() {
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{ title: "Home", headerShown: false }} />
            <Tabs.Screen name="breeds" options={{ title: "Breeds", headerShown: false }} />
            <Tabs.Screen name="emergency" options={{ title: "Emergency", headerShown: false }} />
            <Tabs.Screen name="profile" options={{ title: "Profile", headerShown: false }} />
        </Tabs>
    )
}