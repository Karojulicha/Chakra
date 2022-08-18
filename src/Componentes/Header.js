import React from "react";
import { Box, Heading, Button, Flex, Stack} from '@chakra-ui/react';
//import bgImage from '../Resurces/Pacman.jpg';
import negro from '../Resurces/negro.jpg';
function Superior (){

    return (
        <Box 
        h='48vh'
        bg='gray'
        bgImage= {`url(${negro})`}
        bgRepeat='no-repeat'
        bgSize='cover'
        >
         <Flex
         direction= 'column'
         alignItems= 'center'
         justify ='center'
         h= '100%'
         bg='0 0 0 / 50%'
         > 

        <Heading
        color= 'white'
        textAling='center'
        textTrandform='uppercase'
        fontWeight='light'
        letterSpacing='5px' 
        padding='15px'

        
        > APRENDIENDO CHAKRA UI
        </Heading> 
        <Stack direction={{ base: 'column ', md: 'row' }}
        spacing= '40px'
        mt='30px'
        w= {['100%', null, 'auto']}
        > 

        <Button
        variant='outline'
        textTransform='uppercase'
        fontWeight='light'
        borderRadius='0'
        color= 'white'
        letterSpacing ='1px'
        _hover={{color:'black', bg:'white' }}
        > Mas detalles

        </Button>
        <Button
        variant= 'outline'
        textTransform='uppercase'
        fontWeight='light'
        borderRadius='0'
        color= 'white'
        letterSpacing ='2px'
        _hover={{color:'black', bg:'white' }}
        > Ver video

        </Button>
        </Stack>
        </Flex>
        </Box>



    );
}

export default Superior;

