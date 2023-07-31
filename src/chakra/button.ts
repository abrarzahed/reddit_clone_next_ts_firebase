import type { ComponentStyleConfig } from "@chakra-ui/theme";

export const Button: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "600",
    lineHeight: "24px",
    _focus: {
      boxShadow: "none",
    },
  },

  variants: {
    base: {
      padding: "16px 40px",
      color: "#fff",
    },
    large: {
      padding: "16px 40px",
    },
    small: {
      padding: "12px 32px",
    },
    solid: {
      color: "white",
      bg: "blue.500",
      _hover: {
        bg: "blue.400",
      },
    },
    outline: {
      padding: "16px 40px",
      color: "blue.500",
      border: "1px solid",
      borderColor: "blue.500",
    },
    oauth: {
      height: "34px",
      border: "1px solid",
      borderColor: "gray.300",
      _hover: {
        bg: "blue.500",
      },
    },
    disabled: {
      height: "34px",
      border: "1px solid",
      borderColor: "gray.200",
      color: "gray.400",
      _hover: {
        cursor: "none",
      },
    },
  },
  defaultProps: {
    variant: "base",
  },
};
