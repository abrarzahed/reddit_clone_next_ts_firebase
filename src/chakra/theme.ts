import { extendTheme } from "@chakra-ui/react";
import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/700.css";
import { Button } from "./button";
import { Heading } from "./heading";
import { Text } from "./text";
export const theme = extendTheme({
  config: {
    initialColorMode: "system",
    useSystemColorMode: true,
  },
  layerStyles: {},
  colors: {
    light: {
      primary: "#226CE5",
      complementary: "#D9A02C",
      neutral: {
        white: "#fff",
        background: "#F7FAFF",
        layer1: "#EBF2FF",
        layer2: "#D6E6FF",
        headingColor: "#202C40",
        textColor: "#2D3D59",
        borderColor: "#CED3D9",
      },
      actions: {
        info: "#3091F2",
        success: "#25BF66",
        warning: "#E59C2E",
        error: "#E54545",
      },
    },
    dark: {
      primary: "#397BE5",
      complementary: "#D9A02C",
      neutral: {
        dark: "#030C1A",
        background: "#061126",
        layer1: "#0A1A33",
        layer2: "#10223F",
        headingColor: "#DADEE5",
        textColor: "#CED2D9",
        borderColor: "#3A4559",
      },
      actions: {
        info: "#3091F2",
        success: "#25BF66",
        warning: "#E59C2E",
        error: "#E54545",
      },
    },
    gray: {
      grey1: "#4D4D4D",
      grey2: "#8D8D8D",
      grey3: "#D9D9D9",
      grey4: "#F7F7F7",
    },
  },
  fonts: {
    // body: "system-ui, sans-serif",
    // heading: "Georgia, serif",
    body: "Open Sans, sans-serif",
  },
  sizes: {
    container: "1200px",
  },
  styles: {
    global: () => ({
      body: {
        // bg:  "gray.200"
      },
    }),
  },
  components: {
    Button,
    Heading,
    Text,
  },
});
