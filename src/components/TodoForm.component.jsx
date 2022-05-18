import React, { Component } from "react";
import {
  Input,
  Center,
  Container,
  FormControl,
  FormLabel,
  Button,
} from "@chakra-ui/react";
import TodoList from "./TodoList.component";

export default class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: "",
      list: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ todo: event.target.value });
  }

  handleSubmit(event) {
    console.log("hi");
    event.preventDefault();
    if (this.state.todo !== "") {
      const list = [...this.state.list];
      const data = {
        id: Math.random(),
        info: this.state.todo,
      };
      list.push(data);
      this.setState({ list, todo: "" });
    }
  }

  render() {
    return (
      <Center py="31.42vh">
        <Container bg="#ffcdb2" borderRadius="10px">
          <FormControl as="form" p="5" onSubmit={this.handleSubmit}>
            <FormLabel as="legend" htmlFor="todo">
              What do you want to do?
            </FormLabel>
            <Input
              id="todo"
              type="text"
              value={this.state.todo}
              onChange={this.handleChange}
            />
            <Button type="submit" my="4" color="white" bg="#ef233c">
              Add
            </Button>
          </FormControl>
          {this.state.list.map((item) => {
            return <div key={item.id}>{item.info}</div>;
          })}
        </Container>
        <TodoList todo={this.state.list} />
      </Center>
    );
  }
}
