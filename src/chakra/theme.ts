import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/700.css";
import { Button } from "./button";
import { Heading } from "./heading";
import { Text } from "./text";
export const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: true,
  },

  semanticTokens: {
    colors: {
      base: {
        default: "#fff",
        _dark: "#030C1A",
      },
      primary: {
        default: "#226CE5",
        _dark: "#3091F2",
      },
      complementary: {
        default: "#D9A02C",
        _dark: "#D9A02C",
      },
      background: {
        default: "#F7FAFF",
        _dark: "#061126",
      },
      layer1: {
        default: "#EBF2FF",
        _dark: "#0A1A33",
      },
      layer2: {
        default: "#D6E6FF",
        _dark: "#10223F",
      },
      heading: {
        default: "#202C40",
        _dark: "#DADEE5",
      },
      text: {
        default: "#2D3D59",
        _dark: "#CED2D9",
      },
      border: {
        default: "#CED3D9",
        _dark: "#3A4559",
      },
      info: {
        default: "#3091F2",
        _dark: "#3091F2",
      },
      success: {
        default: "#25BF66",
        _dark: "#25BF66",
      },
      warning: {
        default: "#E59C2E",
        _dark: "#E59C2E",
      },
      error: {
        default: "#E54545",
        _dark: "#E54545",
      },
      gray1: {
        default: "#4D4D4D",
        _dark: "#4D4D4D",
      },
      gray2: {
        default: "#8D8D8D",
        _dark: "#8D8D8D",
      },
      gray3: {
        default: "#D9D9D9",
        _dark: "#D9D9D9",
      },
      gray4: {
        default: "#F7F7F7",
        _dark: "#F7F7F7",
      },
    },
  },

  fonts: {
    heading: "Poppins, sans-serif",
    body: "Poppins, sans-serif",
  },
  sizes: {
    container: "1200px",
  },
  styles: {
    global: (props: Record<string, any>) => ({
      "*": {
        borderColor: mode("#CED3D9", "#3A4559")(props),
      },
      "h1, h2, h3, h4, h5, h6": {
        color: mode("#202C40", "#DADEE5")(props),
      },
      "p, span, a": {
        color: mode("#2D3D59", "#CED2D9")(props),
      },
    }),
  },
  components: {
    Button,
    Heading,
    Text,
  },
});
