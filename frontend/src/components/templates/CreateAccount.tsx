import { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
} from "@chakra-ui/react";
import axios from "axios";
import { Link } from "react-router-dom";
import { RegisterBtn } from "../atoms/RegisterBtn";

export const CreateAccount = () => {
  const [data, setData] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log(data);
  }, [data]);

  const createAccount = async () => {
    if (!name.match(/\S/g)) {
      alert("please enter your name");
    } else if (!email.match(/\S/g)) {
      alert("please enter your email");
    } else if (!password.match(/\S/g)) {
      alert("please enter your password");
    } else {
      await setData({
        name: name,
        email: email,
        password: password,
      });

      await axios
        .post("http://localhost:8000/api/users/create", data)
        .then((res) => {
          // window.location.href = "/login";
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <Card p={16}>
      <CardBody>
        <FormControl w="500px">
          <Text mb={8} fontSize={36} fontWeight="bold">
            Create your account
          </Text>
          <FormLabel mb={0}>Name</FormLabel>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="name"
            name="name"
            type="text"
            variant="flushed"
            placeholder="name"
            mb={4}
          />
          <FormLabel mb={0}>Email address</FormLabel>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            name="email"
            type="email"
            variant="flushed"
            placeholder="example@email.com"
            mb={4}
          />
          <FormLabel mb={0}>password</FormLabel>
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            name="password"
            type="password"
            variant="flushed"
            placeholder="password"
            mb={10}
          />
          <Box display="flex" alignItems="center" justifyContent="space-around">
          <Link to="/login">
              <Text color="blue" textDecoration="underline">
                Login
              </Text>
            </Link>
            <RegisterBtn onClick={createAccount} text={"Create Account"}/>
          </Box>
        </FormControl>
      </CardBody>
    </Card>
  );
};
