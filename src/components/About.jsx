import { Box, Heading, Text } from '@chakra-ui/react'
import { color } from 'framer-motion';
import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    const email = 'swatigoel37@gmail.com';
  return (
    <Box  margin={'8% 10%'}>
    <Heading lineHeight={1.2} fontWeight={600} fontSize={{ base: '3xl', sm: '3xl', lg: '5xl' }} fontFamily={'Agbalumo'} mb={'3%'} >
      <Text as={'span'}  color='#303030'>About Me</Text>
    </Heading>
    <Text fontSize={{ base: 'sm', sm: 'md', lg: 'lg' }} color={'#18181A'} fontFamily={'Nunito Sans'}>I am a passionate and dedicated computer science engineering student currently pursuing my B.tech degree. With a specialization in software development, I have developed a strong foundation in web development.

    Throughout my academic journey, I have acquired extensive knowledge and practical experience in various front-end technologies and frameworks. I have hands-on experience in developing responsive and user-friendly web applications. I strongly believe in the power of teamwork and collaboration. I enjoy connecting with like-minded professionals and exploring new opportunities to learn and grow in the field of software development.

    As an enthusiastic learner, I am always seeking ways to expand my skill set and stay updated with the latest industry trends. I am open to challenging projects and collaborations that allow me to apply my knowledge and contribute to innovative solutions.

    Let's connect and explore new opportunities together! Feel free to reach out to me on <span style={{ color: '#463AD0' }}><a href={`mailto:${email}`}>email</a></span> to discuss potential collaborations, projects, or any other professional opportunities.</Text>
    </Box>
  )
}

export default About
