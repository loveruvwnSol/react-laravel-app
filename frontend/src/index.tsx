import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { Login } from "./components/templates/Login";
import { CreateAccount } from "./components/templates/CreateAccount";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/templates/Home";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ChakraProvider>
    <React.StrictMode>
      <Box h="100vh" display="flex" justifyContent="center" alignItems="center">
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/createAccount" element={<CreateAccount />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </React.StrictMode>
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
