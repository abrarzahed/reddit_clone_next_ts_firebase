import type { ComponentStyleConfig } from "@chakra-ui/theme";

export const Button: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "600",
    lineHeight: "24px",
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
    smallWhiteBg: {
      padding: "12px 32px",
      color: "primary",
      bg: "white",
    },
    smallPrimaryBg: {
      padding: "12px 32px",
      color: "white",
      bg: "primary",
    },

    serviceCard: {
      borderRadius: "8px",
      maxWidth: "380px",
      minWidth: "260px",
      bg: "layer1",
      padding: "32px",
    },
    postCard: {
      borderRadius: "8px",
      maxWidth: "380px",
      minWidth: "260px",
      bg: "layer1",
      padding: "32px",
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
