import React from "react";
import { Box, Flex, Heading } from "@chakra-ui/layout";
import { Link, Button } from "@chakra-ui/react";

export default function Header() {
  return (
    <Flex
      bg="#ef233c"
      justify="space-around"
      h="8vh"
      align="center"
      color="white"
    >
      <Heading>Sora</Heading>
      <Box>
        <Button mx="5px" color="#2b2d42" fontWeight="bold">
          Home
        </Button>
        <Button mx="5px" color="#2b2d42" fontWeight="bold">
          About
        </Button>
        <Button mx="5px" color="#2b2d42" fontWeight="bold">
          Contact
        </Button>
      </Box>
    </Flex>
  );
}
