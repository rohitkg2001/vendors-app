import React, { memo } from "react";
import { View, TextInput } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { SCREEN_WIDTH, ICON_SMALL, styles } from "../../styles";
import { useTranslation } from "react-i18next";

export default function SearchBar({ value, onChangeText, style }) {
  const { t } = useTranslation();

  return (
    <View
      style={[
        styles.row,
        styles.border,
        styles.round,
        styles.ph5,
        styles.mv2,
        styles.bgPrimaryTransParent,
        {
          alignItems: "center",
          justifyContent: "flex-start",
          height: 48,
          width: SCREEN_WIDTH - 8,
          borderRadius: 12,
        },
        style,
      ]}
    >
      <Ionicons
        name="search-outline"
        size={ICON_SMALL}
        color="#333"
        style={{ marginLeft: 4 }}
      />
      <TextInput
        placeholder={t("placeholder")}
        value={value}
        onChangeText={onChangeText}
        autoFocus={true}
        style={[
          { marginHorizontal: 4, height: 48, paddingLeft: 12, fontSize: 18 },
          style,
        ]}
      />
    </View>
  );
}
