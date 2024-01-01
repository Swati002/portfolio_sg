import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import yt from '../assets/youtube.png'
import qp from '../assets/quickpark-banner.png'
import todo from '../assets/todo.png'
import perpetual from '../assets/perpetual-pocket.png'
const projectDetails = [
    {
        image: qp,
        heading:'QuickPark',
        description:'The user-friendly smart-parking web application allows pre-booking legit and safe parking slots',
        visitLink:'',
        github:''
    },
    {
        image: yt,
        heading:'Youtube Clone',
        description:'A web application that replicates the core functionalities of the popular video-sharing platform, YouTube',
        visitLink:'',
        github:''
    },
    {
        image: qp,
        heading:'QuickPark',
        description:'The user-friendly smart-parking web application allows pre-booking legit and safe parking slots',
        visitLink:'',
        github:''
    },
    {
        image: todo,
        heading:'Todo App',
        description:'The Todo App allows users to create and manage their tasks in a simple and intuitive manner',
        visitLink:'',
        github:''
    }
]

const Projects = () => {
  return (
    <Box  margin={'8% 10%'}>
    <Heading lineHeight={1.2} fontWeight={600} fontSize={{ base: '3xl', sm: '3xl', lg: '5xl' }} fontFamily={'Agbalumo'} mb={'3%'} >
      <Text as={'span'}  color='#303030'>My Projects</Text>
    </Heading>

    {/* <SimpleGrid spacing={12} templateColumns='repeat(auto-fill, minmax(550px, 1fr))'>
    {projectDetails.map((val, index) => (
    <Card maxW='xl'> */}
    <SimpleGrid spacing={6} templateColumns={{ base: '1fr', sm: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(2, 1fr)' }}>
                {projectDetails.map((val, index) => (
                    <Card key={index} maxW='900px'>
        <CardBody >
            <Image
            src={val.image}
            alt='project-image'
            borderRadius='lg'
            // height={{sm:'200px', md:'300' ,lg: '300'}}
            // width={{sm:'200px', md:'500', lg: '600'}}
            />
        <Stack mt='6' spacing='3'>
            <Heading size='md'>{val.heading}</Heading>
            <Text>
                {val.description}
            </Text>
            <Text fontWeight={600} color='#828181' fontSize='md'>
                TechStack - React.js, Rapid API
            </Text>
        </Stack>
        </CardBody>
    {/* <Divider /> */}
        <CardFooter>
            <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='blue'>
                Visit Link
            </Button>
            <Button variant='ghost' colorScheme='blue'>
                Github
            </Button>
            </ButtonGroup>
        </CardFooter>
    </Card>
    ))}
    

    </SimpleGrid>

    
    </Box>
  )
}

export default Projects
