import {
  Box,
  Button,
  HStack,
  Heading,
  Text,
  Wrap,
  useColorMode,
} from "@chakra-ui/react";
import Head from "next/head";

export default function Home() {
  const { colorMode } = useColorMode();
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Box
          bg={`layer2`}
          border={`1px solid`}
          borderColor={`border`}
          p={`2rem`}
        >
          <Heading as={`h1`} variant={{ base: "heading3", lg: "heading1" }}>
            Stand Out in the Digital Crowd with Creative Solutions
          </Heading>
          <Text>
            We are a leading creative agency. Bringing your ideas to life and
            help your brand thrive in the digital world.
          </Text>
          <Wrap mt={3}>
            <Button bg={`complementary`}>Click</Button>
            <Button bg={`primary`}>Click</Button>
            <Button bg={`info`}>Click</Button>
            <Button bg={`warning`}>Click</Button>
            <Button bg={`success`}>Click</Button>
            <Button bg={`error`}>Click</Button>
            <Button
              variant={
                colorMode === "light" ? `smallWhiteBg` : "smallPrimaryBg"
              }
            >
              Click
            </Button>
          </Wrap>
          <Box mt={3}>
            <Button variant={"serviceCard"}>This is a simple card</Button>
          </Box>
        </Box>
      </body>
    </>
  );
}
