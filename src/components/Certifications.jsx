import { Box, Card, CardBody, CardHeader, Flex, Heading, Image, SimpleGrid, Stack, StackDivider, Text } from '@chakra-ui/react'
import React from 'react'
import certificate from '../assets/certification.jpg'
import { ExternalLinkIcon } from '@chakra-ui/icons'
const Certifications = () => {
  return (


        <Box margin={'8% 10%'}>
      <Heading
        lineHeight={1.2}
        fontWeight={600}
        fontSize={{ base: '3xl', sm: '3xl', lg: '5xl' }} fontFamily={'Agbalumo'}
        mb={'3%'}
      >
        <Text as={'span'} color='#303030'>
          My Certifications
        </Text>
      </Heading>

      <Flex
        justifyContent={{ base: 'center', md: 'space-between' }}
        alignItems='center'
        flexDirection={{ base: 'column', sm: 'column', md: 'column', lg: 'column', xl:'row' }}
        gap={4}
      >
        <Image
          src={certificate}
          alt='certifications'
          alignSelf='center' // Center vertically
          maxW={{ base: '200px', sm: '200px', md: '300px', lg: '500px' }}
        />
        <Card width={{ md: 600, lg: 700 }}>
          <CardBody>
            <Stack divider={<StackDivider />} spacing='4'>
            <Box>
                <Heading size='xs' textTransform='uppercase'>
                  Google Cloud <ExternalLinkIcon/>
                </Heading>
                <Text pt='2' fontSize='sm'>
                 Completed Cloud Engineering Track in 30 days of Google Cloud Program. It involved extensive learning, hands-on practice, and a deep understanding of Google Cloud's services and tools.
                </Text>
              </Box>
              <Box>
                <Heading size='xs' textTransform='uppercase'>
                  Live The Code Hackathon
                </Heading>
                <Text pt='2' fontSize='sm'>
                  Secured 4th rank with team of four out of 150 teams. We created a smart-parking web application allows pre-booking legit and safe parking slots.
                </Text>
              </Box>
              <Box>
                <Heading size='xs' textTransform='uppercase'>
                  Hacktoberfest'22
                </Heading>
                <Text pt='2' fontSize='sm'>
                  Contributed to Open-Source and merged four Pull Requests. I gained lot of experience and learned from the feedback and interactions with other contributors and maintainers. 
                </Text>
              </Box>
              <Box>
                <Heading size='xs' textTransform='uppercase'>
                  Script Winter of Code'22
                </Heading>
                <Text pt='2' fontSize='sm'>
                 I actively contributed to open-source projects, providing comprehensive and detailed contributions that were valuable for fellow developers and the open-source community as a whole.
                </Text>
              </Box>
              <Box>
                <Heading size='xs' textTransform='uppercase'>
                  SkillValley
                </Heading>
                <Text pt='2' fontSize='sm'>
                Being a part of community webinars helped me stay updated with the latest trends and innovations in the field of web development. This journey involved not only technical skills but also soft skills like teamwork, communication, and a commitment to continuous learning.
                </Text>
              </Box>
              <Box>
                <Heading size='xs' textTransform='uppercase'>
                  Pepcoding
                </Heading>
                <Text pt='2' fontSize='sm'>
                 I gained extensive knowledge during my learning journey, which encompassed mastering new frameworks, exploring various user interfaces, and successfully tackling data structure and algorithm challenges on the Pepcoding platform.
                </Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>
      </Flex>
    </Box>
  )
}

export default Certifications
