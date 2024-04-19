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
  Link,
} from "@chakra-ui/react";
import axios from "axios";

export const CreateAccount = () => {
  const [data, setData] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log(data);
  }, [data]);

  const createAccount = async () => {
    await setData({
      name: name,
      email: email,
      password: password,
    });

    await axios
      .post("http://localhost:8000/api/users/create", data)
      .then((res) => {
        // setData("");
        // location.href = "この中に遷移したい先のページのパスを書く";
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Card p={16}>
      <CardBody>
        <FormControl w="500px">
          <Text mb={8} fontSize={36} fontWeight="bold">
            Create your account
          </Text>
          <FormLabel mb={0}>Email address</FormLabel>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="name"
            name="name"
            type="text"
            variant="flushed"
            placeholder="Enter your name"
            mb={4}
          />
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
            placeholder="Enter your password"
            mb={10}
          />
          <Box display="flex" alignItems="center" justifyContent="space-around">
            <Link color="blue" textDecoration="underline">
              Login
            </Link>
            <Button
              onClick={createAccount}
              type="submit"
              colorScheme="messenger"
            >
              create account
            </Button>
          </Box>
        </FormControl>
      </CardBody>
    </Card>
  );
};
