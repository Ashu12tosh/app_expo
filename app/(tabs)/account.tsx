import DownloadPicture from "@/components/BottomSheet";
import { useState } from "react";
import { Button, Text, View } from "react-native";

export default function account() {
  const [pictureOpen, setPictureOpen] = useState(false);
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Text>Account Page</Text>
        <Button
          title="Open Bottom sheet "
          onPress={() => {
            setPictureOpen(true);
          }}
        ></Button>
        {pictureOpen && (
          <DownloadPicture onClose={() => setPictureOpen(false)} />
        )}
      </View>
    </View>
  );
}
//
