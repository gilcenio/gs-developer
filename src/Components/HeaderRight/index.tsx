import React, { useState } from "react";
import { HSTACKAPP, TEXTAPP } from "../_Styles";
import { useNavigation } from "@react-navigation/native";
import theme from "../../Global/Styles/theme";
import { useController } from "../../Hooks/controller";

export default function HeaderRight() {
  const {route, setRoute} = useController()
  const navigation = useNavigation<any>();

  function handlerRoute(route: string) {
    setRoute(route);
    navigation.navigate(route);
  }

  return (
    <HSTACKAPP space={2} marginRight={1}>
      <TEXTAPP
        borderBottomWidth={route === "Home" ? 2 : undefined}
        borderColor={route === 'On' ? theme.text.text_2 : theme.base.base_4}
        onPress={() => handlerRoute("Home")}
        label={"Home"}
        fontSize={1}
        color={route === 'On' ? theme.text.text_2 : theme.base.base_4}
        fontFamily="Ubuntu_300Light"
      />
      <TEXTAPP
        borderBottomWidth={route === "TapFast" ? 2 : undefined}
        borderColor={route === 'On' ? theme.text.text_2 : theme.base.base_4}
        onPress={() => handlerRoute("TapFast")}
        label={"Tap Fast"}
        fontSize={1}
        color={route === 'On' ? theme.text.text_2 : theme.base.base_4}
        fontFamily="Ubuntu_300Light"
      />
      <TEXTAPP
        borderBottomWidth={route === "On" ? 2 : undefined}
        borderColor={route === 'On' ? theme.text.text_2 : theme.base.base_4}
        onPress={() => handlerRoute("On")}
        label={"Sobre"}
        fontSize={1}
        color={route === 'On' ? theme.text.text_2 : theme.base.base_4}
        fontFamily="Ubuntu_300Light"
      />
    </HSTACKAPP>
  );
}
