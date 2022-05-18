import { Center, Container, Box, Flex } from "@chakra-ui/react";
import React from "react";
import Login from "./Login.component";

export default function Home() {
  return (
    <Center h="78vh">
      <Container>
          <Flex justify="center">
              <Login />
          </Flex>
      </Container>
    </Center>
  );
}
