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

export const Login = () => {
  const [data, setData] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log(data);
  }, [data]);

  const Login = async () => {
    if (!email.match(/\S/g)) {
      alert("please enter your email");
    } else if (!password.match(/\S/g)) {
      alert("please enter your password");
    } else {
      await setData({
        email: email,
        password: password,
      });
      console.log(data);

      await axios
        .post("http://localhost:8000/api/users/login", data)
        .then((res) => {
          window.location.href = "/home";
        })
        .catch((error) => {
          console.log(error);
        });

      try {
        const res = await axios.get("http://localhost:8000/api/users/self");
        console.log(res);
        return;
      } catch (e) {
        return e;
      }
    }
  };

  return (
    <Card p={16}>
      <CardBody>
        <FormControl w="500px">
          <Text mb={8} fontSize={36} fontWeight="bold">
            Login
          </Text>
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
            <Link to="/createAccount">
              <Text color="blue" textDecoration="underline">
                Create Account
              </Text>
            </Link>
            <RegisterBtn onClick={Login} text={"Login"}/>
          </Box>
        </FormControl>
      </CardBody>
    </Card>
  );
};
