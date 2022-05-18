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
            <Link>Facebook</Link>
          </Box>
          <Box>
            <Link>Instagram</Link>
          </Box>
          <Box>
            <Link>Twitter</Link>
          </Box>
          <Box>
            <Link>Youtube</Link>
          </Box>
        </Box>
      </Flex>
    </Center>
  );
}
