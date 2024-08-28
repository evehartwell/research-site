import React from 'react';
import { Box, Flex, Button, Link } from '@chakra-ui/react';

const Navigation = () => {
    return (
        <Box className="nav" width="100%" py={4} position="fixed" zIndex={1000}>
            <Flex justify="center" align="center" maxW="container.xl" mx="auto" px={6}>
                <Flex gap={20}>
                    <Link href="/">
                        <Button variant="ghost">Home</Button>
                    </Link>
                    <Link href="/about">
                        <Button variant="ghost">About</Button>
                    </Link>
                    <Link href="/resources">
                        <Button variant="ghost">Resources</Button>
                    </Link>
                    <Link href="/works">
                        <Button variant="ghost">Related Works</Button>
                    </Link>
                </Flex>
            </Flex>
        </Box>
    );
};

export default Navigation;
