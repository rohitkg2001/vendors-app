import { View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { styles } from "../../styles/components.styles";
import { P } from "../text";
import { useTranslation } from "react-i18next";
import { typography } from "../../styles";

export default function MyPickerInput({
  title,
  value,
  onChange,
  // option,
  options = [],
  style = {},
  placeholder = "Select an option", // Default placeholder
}) {
  const { t } = useTranslation();

  return (
    <View style={[styles.textInput, style]}>
      <P style={typography.fontLato}>{title}</P>
      <View
        style={{
          borderRadius: 10,
          borderWidth: 1,
          borderColor: "#ccc",
          overflow: "hidden",
        }}
      >
        <Picker
          selectedValue={value}
          style={[
            styles.textInputField,
            {
              height: 50,
            },
          ]}
          mode="dropdown"
          onValueChange={(val) => onChange(val)}
          prompt={t("option_title")}
        >
          {/* Placeholder item */}
          <Picker.Item label={placeholder} value="" enabled={false} />
          {options.map((option, index) => (
            <Picker.Item
              enabled={option.enabled}
              label={option.label}
              value={option.value}
              key={index}
              style={{ color: option.isSurveyed ? "red" : "black" }}
            />
          ))}
        </Picker>
      </View>
    </View>
  );
}
