import { Center, Box, Flex, Link } from "@chakra-ui/react";
import React from "react";

export default function Footer() {
  return (
    <Center bg="#d90429" h="20vh" color="white">
      <Flex gap="200px">
        <Box w="50%">
          <address style={{ color: "white" }}>
            USA Aurora, 2821 S Parker Rd #163, CO 80014
          </address>
        </Box>
        <Box>
          <Box>
            <Link href="https://www.facebook.com" target="_blank">Facebook</Link>
          </Box>
          <Box>
            <Link href="https://www.instagram.com" target="_blank">Instagram</Link>
          </Box>
          <Box>
            <Link href="https://www.twitter.com" target="_blank">Twitter</Link>
          </Box>
          <Box>
            <Link href="https://www.youtube.com" target="_blank">Youtube</Link>
          </Box>
        </Box>
      </Flex>
    </Center>
  );
}
