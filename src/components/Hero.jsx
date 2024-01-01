'use client'

import {
  Stack,
  Flex,
  Heading,
  Text,
  Button,
  Image,
  Box,
} from '@chakra-ui/react'
import banner from '../assets/profile.png'
export default function Hero() {
  
  return (
    <Box h={{sm:'100vh', md:'80vh'}} >
    <Flex mx={'10%'}  spacing={{ base: 8, md: 14 }} py={{ base: 20, md: 20 }} direction={{ base: 'column', md: 'row' }} justifyContent={'space-between'}>
      {/* <Stack > */}
        <Stack flex={1} spacing={{ base: 5, md: 4 }} paddingBottom={{base:10}} my={'4%'}>
          <Heading lineHeight={1.2} fontWeight={600} fontSize={{ base: '4xl', sm: '4xl', lg: '6xl' }} fontFamily={'Agbalumo'}>
            <Text as={'span'}>Hello, </Text>
            <br />
            <Text as={'span'}>I am Swati Goel</Text>
          </Heading>
          <Text color={'#18181A'} fontSize={{ base: 'sm', sm: 'md', lg: 'xl' }}  maxW={'xl'} fontFamily= {'Open Sans'}>
            Through pixels and code, I translate imagination into reality, making the virtual landscape a more exciting place to explore.
          </Text>
          <Text  fontSize={{ base: 'sm', sm: 'md', lg: 'md' }}  maxW={'xl'} fontFamily= {'Open Sans'} color={'#463AD0'}>
            <Text as={'span'} color={'#463AD0'} fontWeight={500}>#</Text>WebDeveloper &nbsp;<Text as={'span'} color={'#463AD0'} fontWeight={500}>#</Text>OpenSourceEnthusiast
          </Text>
          <Stack spacing={{ base: 3, sm: 4 }} py={6} direction={{ base: 'column', sm: 'row' }} >
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              colorScheme={'3efefef'}
              bg={'#463AD0'}
              _hover={{ bg: '#3c2bfc' }}>
              Contact Me
            </Button>
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              >
              Download CV
            </Button>
          </Stack>
        </Stack>
        
    <Stack px={10} my='-8%'>
      <Image
        alt={'Hero Image'}
        // rounded={'2xl'}
        // boxShadow={'2xl'}
        src={banner}
        height={{base:'300',md:'400', lg:'550'}}
      />
    </Stack>
      {/* </Stack> */}
    </Flex>
    </Box> 
  )
}



