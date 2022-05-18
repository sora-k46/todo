import React from "react";
import "./css/App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header.component";
import Footer from "./components/Footer.component";
import TodoForm from "./components/TodoForm.component";

export default function App() {
  return (
    <ChakraProvider>
      <Header />
      <main>
          <TodoForm />
      </main>
      <Footer />
    </ChakraProvider>
  );
}
