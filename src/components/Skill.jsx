import { Box, Flex, Grid, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import java from '../assets/java.svg'
import js from '../assets/icons8-javascript.svg'
import reacticon from '../assets/react.png'
import html from '../assets/icons8-html.svg'
import css from '../assets/icons8-css.svg'
import materialui from '../assets/icons8-material-ui.svg'
  
const Skill = () => {
    const iconUrls = [
        java,
        reacticon,
        js,
        html,
        css,
        materialui,
      ]; 
      
  return (
    <Box  margin={'8% 10%'}>
    <Heading lineHeight={1.2} fontWeight={600} fontSize={{ base: '2xl', sm: '2xl', lg: '3xl' }} fontFamily={'Playfair Display'} mb={'3%'} >
      <Text as={'span'}  color='#303030'>My Skills</Text>
    </Heading>


    <Grid templateColumns={['1fr', '1fr', 'repeat(6, 1fr)']} gap={8}>
            {iconUrls.map((iconUrl, index) => (
              <Flex
            key={index}
            alignItems="center"
            flexDirection="column" 
            textAlign="center"
            // color="#efefef"
          >
            <Image src={iconUrl} boxSize={{sm:'24px', md:'36px', xl:"78px"}} mb={2} /> {/* Image above */}
            <Box fontWeight={400} fontSize={{sm:'14px', md:'15px', xl:'20px'}}>{['Java', 'React.js', 'JavaScript', 'HTML', 'CSS', 'Material UI'][index]}</Box> {/* Text below */}
          </Flex>
        ))}
      </Grid>



    </Box>
  )
}

export default Skill
