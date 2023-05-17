import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer,
  Box,
  Td,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

const getUserData = async (token) => {
  let res = await axios.get(
    "https://skygoalapi-production.up.railway.app/user/all",
    { headers: { token: token } }
  );
  return res.data;
};

const Dashboard = () => {
  const [data, setData] = useState([]);
  const token = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
    getUserData(token).then((res) => setData(res.data));
  }, []);

  return (
    <Box w="80%" m="auto" mt={5}>
      <TableContainer>
        <Table variant="striped" colorScheme="">
          <Thead bg={"gray.400"} height={"60px"}>
            <Tr>
              <Th>S.no</Th>
              <Th>Name</Th>
              <Th>email</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.map((el, i) => (
              <Tr key={el._id}>
                <Td>{i + 1}</Td>
                <Td>{el.name}</Td>
                <Td>{el.email}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Dashboard;
