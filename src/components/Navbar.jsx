import { Box, Button, Text } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {
  return (
    <Box mx={'10%'} mt={'2%'} display={'flex'} justifyContent={'space-between'}>
        <Text fontSize={40}  fontFamily= 'Sacramento'>swatigoel</Text>
        <Button>Lets Talk</Button>
    </Box>
  )
}

export default Navbar
