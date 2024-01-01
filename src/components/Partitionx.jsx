import { Box, Flex, Grid, GridItem, Image } from '@chakra-ui/react'
import React from 'react'

import java from '../assets/java.svg'
import js from '../assets/icons8-javascript.svg'
import reacticon from '../assets/react.png'
import html from '../assets/icons8-html.svg'
const Partitionx = () => {
  const iconUrls = [
    java,
    js,
    reacticon,
    html
  ]; // Replace with actual URLs for your icons

  return (
    <Box  display="flex" justifyContent="center"   alignItems="center" w='100%' h={{base:'80px', md:'120px'}}  gap={{base:'4', sm:'6', md:'16'}} color='white' backgroundColor={'#121C37'}>

    </Box>

  )
}

export default Partitionx






