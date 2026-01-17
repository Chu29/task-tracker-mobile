import { Tabs } from "expo-router";
import React from "react";
import { CheckSquare2, Trash2, ClipboardList } from "lucide-react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#50c3ca",
        tabBarInactiveTintColor: "#9CA3AF",
        tabBarStyle: {
          backgroundColor: "#ffffff",
          borderTopWidth: 1,
          borderTopColor: "#E5E7EB",
          paddingTop: 8,
          height: 60,
        },
      }}
    >
      <Tabs.Screen
        name="TaskScreen"
        options={{
          title: "Tasks",
          tabBarIcon: ({ color, size }) => (
            <ClipboardList color={color} size={size || 24} />
          ),
        }}
      />
      <Tabs.Screen
        name="CompletedScreen"
        options={{
          title: "Completed",
          tabBarIcon: ({ color, size }) => (
            <CheckSquare2 color={color} size={size || 24} />
          ),
        }}
      />
      <Tabs.Screen
        name="DeletedScreen"
        options={{
          title: "Deleted",
          tabBarIcon: ({ color, size }) => (
            <Trash2 color={color} size={size || 24} />
          ),
        }}
      />
    </Tabs>
  );
}
