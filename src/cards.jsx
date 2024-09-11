import React from 'react';
import {
    Box,
    Grid,
    Heading,
    Image,
    Stack,
    Text,
    Card,
    CardBody,
} from '@chakra-ui/react';

const CardGroup = () => {
    return (
        <Box p={0}>
            <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} 
                gap={6}
                justifyContent="center" 
            >
                <Card maxW="md" mx="auto" bgColor='none' boxShadow='none'>
                    <CardBody>
                        <Image src='/images/GOY.png' alt='GOY' borderRadius='md' />
                        <Stack mt={4} spacing={3} textColor='var(--primary-color-1)'>
                            <Heading size='md'>Link 1</Heading>
                            <Text>description</Text>
                        </Stack>
                    </CardBody>
                </Card>
                <Card maxW="md" mx="auto" bgColor='none'  boxShadow='none'>
                    <CardBody>
                        <Image src='/images/ssense.png' alt='ssense' borderRadius='md' />
                        <Stack mt={4} spacing={3} textColor='var(--primary-color-1)'>
                            <Heading size='md'>Link 2</Heading>
                            <Text>description</Text>
                        </Stack>
                    </CardBody>
                </Card>
                <Card maxW="md" mx="auto" bgColor='none'  boxShadow='none'>
                    <CardBody>
                        <Image src='/images/TRR.png' alt='TRR' borderRadius='md' />
                        <Stack mt={4} spacing={3} textColor='var(--primary-color-1)'>
                            <Heading size='md'>Link 3</Heading>
                            <Text>description</Text>
                        </Stack>
                    </CardBody>
                </Card>
            </Grid>
        </Box>
    );
};

export default CardGroup;
