import React, { Component, useState } from "react";
import {
  Input,
  Center,
  Container,
  FormControl,
  FormLabel,
  Button,
  useToast,
} from "@chakra-ui/react";
import TodoList from "./TodoList.component";

export default function TodoForm(props) {
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([]);

  function handleChange(event) {
    setTodo(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (todo !== "") {
      const data = {
        id: Math.random(),
        info: todo,
      };
      list.push(data);
      setTodo("");
    }
  }

  const toast = useToast();

  return (
    <Center py="31.42vh">
      <Container bg="#ffcdb2" borderRadius="10px">
        <FormControl as="form" p="5" onSubmit={handleSubmit}>
          <FormLabel as="legend" htmlFor="todo">
            What do you want to do?
          </FormLabel>
          <Input id="todo" type="text" value={todo} onChange={handleChange} />
          <Button
            type="submit"
            my="4"
            color="white"
            bg="#ef233c"
            onClick={() =>
              toast({
                title: "Added!",
                description: "We've added to your list.",
                status: "success",
                duration: 1000,
                isClosable: true,
              })
            }
          >
            Add
          </Button>
        </FormControl>
        {/* {this.state.list.map((item) => {
          return <div key={item.id}>{item.info}</div>;
        })} */}
      </Container>
      <TodoList list={list} />
    </Center>
  );
}
