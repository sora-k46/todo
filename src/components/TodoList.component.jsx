import React from "react";
import { Container, Heading, Box } from "@chakra-ui/react";

export default function Todo(props) {
  return (
    <Container border="#ef233c 2px solid" borderRadius="20px" p="10">
      <Heading mb="3">To do(s) List</Heading>
      {props.list.map((item, index) => {
        return (
          <Box key={item.id}>
            {index + 1}. {item.info}
          </Box>
        );
      })}
    </Container>
  );
}
