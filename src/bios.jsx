import React from 'react';
import {
    Box,
    Text,
    Flex,
    Container,
    Heading,
    Link,
    SimpleGrid,
    Image,
} from '@chakra-ui/react';
import './index.css';

const BioGrid = () => {
    return (
        <Container maxW="container.xl" p={4} mt={8}>
            <Heading 
                as="h2" 
                size="xl" 
                mb={8} 
                textAlign="left" 
                fontWeight="medium"
                textTransform="uppercase"
                color="var(--primary-color-1)"
            >
                Notable People
            </Heading>
            <SimpleGrid 
                className='bio-grid' 
                direction={{ base: 'column', md: 'row' }}  
                columns={2} 
                gap={10}
                p={20}
                textColor='var(--primary-color-1)'
            >
                
                <Box className='bio-content'>
                    <Image src='/images/danielle.png' alt='/' maxW={150} m={5} />
                    <Box m={5}>
                        <Heading size='md'>
                            Bio 1
                        </Heading>
                        <Text>
                            Description
                        </Text>
                    </Box>
                </Box>
                <Box className='bio-content'>
                    <Image src='/images/bliss.jpg' alt='/' maxW={150} m={5} />
                    <Box m={5}>
                        <Heading size='md'>
                            Bio 2
                        </Heading>
                        <Text>
                            Description
                        </Text>
                    </Box>
                </Box>
                <Box className='bio-content'>
                    <Image src='/images/rian.jpg' alt='/' maxW={150} m={5} />
                    <Box m={5}>
                        <Heading size='md'>
                            Bio 3
                        </Heading>
                        <Text>
                            Description
                        </Text>
                    </Box>
                </Box>
            </SimpleGrid>
        </Container>
    );
};

export default BioGrid;