import { Avatar, Box, Button, ChakraProvider, Divider, Heading, Input, Link, Text } from "@chakra-ui/react";
import React from "react";
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import dateFormat from "dateformat";


function App() {

  const data = [];
  
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

const token= "APP_USR-8685824602582630-022319-237cc772e3cbaee636f2827cf5ee9f1a-398092563";
function Send() {

  axios.get('https://api.mercadolibre.com/sites/MLB/search?nickname='+ document.getElementById("searchTerm").value, {
    headers: {'Authorization': `Bearer ${token}`},
  })
  .then(function (response) {
    console.log(response.data);

    var logo= response.data.seller.eshop.eshop_logo_url;
    // document.getElementById("logo_id").textContent= logo;
    
    const newEle = (<Avatar size='2xl' mt="1vw" mb="1vw" name='User Logo' src= {logo}>Logo</Avatar>)
    document.getElementById("logo_id").append(logo);
    console.log(newEle);

    const nickname= response.data.seller.nickname;
    document.getElementById("nickname_id").textContent= nickname;

    const id= response.data.seller.id;
    document.getElementById("id_id").textContent= id;

    const permalink= response.data.seller.permalink;
    document.getElementById("permalink_id").textContent= permalink;

    const date= response.data.seller.registration_date;
    document.getElementById("rdate_id").textContent= dateFormat(date);

    const power= response.data.seller.seller_reputation.power_seller_status;

    const level= response.data.seller.seller_reputation.level_id;
    if (level === "5_green" && power === "platinum"){
      document.getElementById("level_id1").textContent= "MercadoLíder Platinum";
    }
    if (level === "5_green" && power === "gold"){
      document.getElementById("level_id1").textContent= "MercadoLíder Gold";
    }
  
    const completed= response.data.seller.seller_reputation.transactions.completed;
    document.getElementById("tcompleted_id").textContent= completed;

    const canceled= response.data.seller.seller_reputation.transactions.canceled;
    document.getElementById("tcanceled_id").textContent= canceled;

    for (var i = 0; i < response.data.available_filters.values.length; i++) {
      const linhaData = response.data.available_filters.values.results[i];
      data.push({
        name: linhaData.name,
        resultados: linhaData.results
      })
    }
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
            <Button bg='#319795' color="white" mt="1vw" onClick={Send}>Submit</Button>  
          </Box>
          <Box m="1vw">
            <Text fontSize='md' mt="1vw" fontWeight={500}>User</Text>
            <Box id="logo_id">                
              {/* <Avatar size='2xl' mt="1vw" mb="1vw" name='User Logo' src='' /> */}
            </Box>
            <Box>
            <Box>                
              <Text as='u' fontSize='md'fontWeight={500} noOfLines={1} mt="1vw">Nickname:</Text>
              <Text fontSize='3xl' noOfLines={1} id="nickname_id"></Text>
            </Box>
            <Box>
              <Text as='u' fontSize='md'fontWeight={500} noOfLines={1} mt="1vw">User ID:</Text>
              <Text fontSize='md'noOfLines={1} id="id_id"></Text>
            </Box>
            <Box>
              <Text as='u' fontSize='md'fontWeight={500} noOfLines={1} mt="1vw">Permalink: </Text>
              <Link fontSize='md' noOfLines={1} id="permalink_id" href='' isExternal></Link>
            </Box>
            <Box>
              <Text as='u' fontSize='md'fontWeight={500} noOfLines={1} mt="1vw">Registration Date: </Text>
              <Text fontSize='md' noOfLines={1} id="rdate_id"></Text>
            </Box>
            <Box>
              <Text as='u' fontSize='md'fontWeight={500} noOfLines={1} mt="1vw">Level: </Text>
              <Text fontSize='md' noOfLines={1}fontWeight={500} id="level_id1" color='green'></Text>
              <Text fontSize='md' noOfLines={1}fontWeight={500} id="level_id2" color='red'></Text>
            </Box>
            <Box>
              <Text as='u' fontSize='md'fontWeight={500} noOfLines={1} mt="1vw">Transactions Completed: </Text>
              <Text fontSize='md' noOfLines={1} id="tcompleted_id"></Text>
            </Box>
            <Box>
              <Text as='u' fontSize='md'fontWeight={500} noOfLines={1} mt="1vw">Transactions Canceled: </Text>
              <Text fontSize='md' noOfLines={1} id="tcanceled_id"></Text>
            </Box>
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
