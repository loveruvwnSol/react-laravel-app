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

export const Login = () => {
  const [data, setData] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log(data);
  }, [data]);

  const Test = () => {
    setData({
      email: email,
      password: password,
    });
    console.log(data);
    // setEmail("");
    // setPassword("");
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
            placeholder="Enter your password"
            mb={10}
          />
          <Box display="flex" alignItems="center" justifyContent="space-around">
            <Link color="blue" textDecoration="underline">
              Create Account
            </Link>
            <Button onClick={Test} type="submit" colorScheme="messenger">
              Login
            </Button>
          </Box>
        </FormControl>
      </CardBody>
    </Card>
  );
};
