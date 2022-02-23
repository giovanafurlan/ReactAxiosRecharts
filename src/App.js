import { Box, Button, ChakraProvider, Divider, Heading, Input, Text } from "@chakra-ui/react";
import React from "react";
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

function App() {

  const data = [
    {
      name: 'Brinquedos',
      resultados: 915,
    },
    {
      name: 'Alimentos',
      resultados: 489,
    },
    {
      name: 'Casa',
      resultados: 44
    },
    {
      name: 'Beleza',
      resultados: 37
    },
    {
      name: 'Livros',
      resultados: 37
    },
    {
      name: 'Festas',
      resultados: 5
    },
    {
      name: 'Esportes',
      resultados: 1
    }
  ];
  
  const data2 = [
    {
      category: 'Brinquedos',
      A: 915,
    },
    {
      category: 'Alimentos',
      A: 489,
    },
    {
      category: 'Casa',
      A: 44,
    },
    {
      category: 'Beleza',
      A: 37,
    },
    {
      category: 'Livros',
      A: 37,
    },
    {
      category: 'Festas',
      A: 5,
    },
    {
      category: 'Esportes',
      A: 1,
    },
  ];
  
  const data3 = [
    {
      name: '',
      publicacoes: 4000,
      vendedores: 200,
    },
    {
      name: '',
      publicacoes: 1000,
      vendedores: 300,
    }
  ];

const axios = require('axios');

const token= "APP_USR-8685824602582630-022313-3ae270f8be2bdddb9bdcbca13fed0f7f-398092563";
function send() {

  axios.get('https://api.mercadolibre.com/users/'+ document.getElementById("searchTerm").value, {
    headers: {'Authorization': `Bearer ${token}`},
  })
  .then(function (response) {
    console.log(response.data);
    const nickname= response.data.nickname;
    document.getElementById("nickname_id").textContent= nickname;

    const id= response.data.id;
    document.getElementById("id_id").textContent= id;
  })
  .catch(function (error) {
    console.error(error);
  })
  .then(function () {

  })};
  
  return (
    <ChakraProvider>
      <Box bg="#edf2f7">
        <Heading  m="2vw" isTruncated fontWeight={400}>Mercado Livre</Heading>
        <Box fontSize="xl"  bg="white" m="2vw">
          <Box p="1vw">
            <Text fontSize='md' noOfLines={1} mb="1vw" fontWeight={500}>Seller Nickname</Text>
            <Input id="searchTerm" noOfLines={1} w="20vw" placeholder='Seller Nickname' bg="white" />
            <Button bg='#319795' color="white" mt="1vw" onClick={send}>Submit</Button>  
          </Box>
          <Box m="1vw">
            <Text fontSize='md' mt="1vw">User</Text>
            <Box>                
              <Text as='u' fontSize='md' noOfLines={1} mt="1vw">Nickname:</Text>
              <Text fontSize='md' noOfLines={1} id="nickname_id"></Text>
            </Box>
            <Box>
              <Text as='u' fontSize='md' noOfLines={1} mt="1vw">User ID:</Text>
              <Text fontSize='md' noOfLines={1} id="id"></Text>
            </Box>
            <Box>
              <Text as='u' fontSize='md' noOfLines={1} mt="1vw">Permalink: </Text>
              <Text fontSize='md' noOfLines={1}></Text>
            </Box>
            <Box>
              <Text as='u' fontSize='md' noOfLines={1} mt="1vw">Registration Date: </Text>
              <Text fontSize='md' noOfLines={1}></Text>
            </Box>
            <Box>
              <Text as='u' fontSize='md' noOfLines={1} mt="1vw">Level: </Text>
              <Text fontSize='md' noOfLines={1}></Text>
            </Box>
            <Box>
              <Text as='u' fontSize='md' noOfLines={1} mt="1vw">Power Seller Status: </Text>
              <Text fontSize='md' noOfLines={1}></Text>
            </Box>
            <Box>
              <Text as='u' fontSize='md' noOfLines={1} mt="1vw">Transactions Completed: </Text>
              <Text fontSize='md' noOfLines={1}></Text>
            </Box>
            <Box>
              <Text as='u' fontSize='md' noOfLines={1} mt="1vw">Transactions Canceled: </Text>
              <Text fontSize='md' noOfLines={1}></Text>
            </Box>
            </Box>
            <Divider />
          <Text fontSize='md' noOfLines={1} m="1vw" fontWeight={500}>Categories</Text> 
          <Box h={400} m="2vw" fontSize={17} >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  width={600}
                  height={300}
                  data={data}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                  >
                  <CartesianGrid />
                  <XAxis dataKey="name" fontSize={17} />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="resultados" stackId="a" fill="#8884d8" fillOpacity={0.6} fontSize={16} />
                </BarChart>
              </ResponsiveContainer>
            </Box>
            <Box h={400} fontSize={16}>
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data2}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="category" />
                  <PolarRadiusAxis />
                  <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                </RadarChart>
              </ResponsiveContainer>
            </Box>
            <Box h={400} fontSize={17}>
            <ResponsiveContainer width="50%" height="100%">
              <LineChart
                width={500}
                height={300}
                data={data3}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
                >
                <CartesianGrid />
                <XAxis dataKey="name" />
                <YAxis />
                <Legend />
                <Line type="monotone" dataKey="publicacoes" stroke="#8884d8" />
                <Line type="monotone" dataKey="vendedores" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
            </Box>
      </Box>
    </Box>
  </ChakraProvider>

  );
}

export default App;
