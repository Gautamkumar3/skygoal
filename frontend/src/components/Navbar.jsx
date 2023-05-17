import { Box, Button, Flex, HStack, Text, useToast } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const token = JSON.parse(localStorage.getItem("token"));

  const navigate = useNavigate();

   function handleLogout() {
    localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <Flex
      justify={"space-around"}
      align="center"
      height={"70px"}
      fontSize="20px"
      color={"white"}
      bg="blue.500"
      position={"sticky"}
      zIndex={"500"}
      top="0px"
    >
      <Link to="/">Dashboard</Link>

      {!token ? (
        <>
          {" "}
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </>
      ) : (
        <Button colorScheme={"red"} onClick={handleLogout}>
          Logout
        </Button>
      )}
    </Flex>
  );
};

export default Navbar;
