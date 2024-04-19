import { Button } from "@chakra-ui/react";

type RegisterBtnProps = {
  onClick: () => void;
  text: String;
};

export const RegisterBtn: React.FC<RegisterBtnProps> = ({ onClick, text }) => {
  return (
    <Button onClick={onClick} type="submit" colorScheme="messenger">
      {text}
    </Button>
  );
};
