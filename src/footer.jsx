import React from 'react';
import {
    Box,
    Flex,
    Text,
    Link,
    IconButton,
} from '@chakra-ui/react';
import { FaTwitter, FaLinkedin } from 'react-icons/fa';
import { VscGlobe } from "react-icons/vsc";

const Footer = () => {
    return (
        <Box as="footer" bg="none" color="var(--primary-color-2)" fontWeight="regular" textTransform="uppercase">
            <Flex
                maxW="1600px"
                height="10px"
                mx="auto"
                justify="space-between"
                align="center"
                px={4}
                direction={{ base: "column", md: "row" }}
            >
                <Text>
                    Capstone Project 2024
                </Text>
                
                <Flex align="center">
                    <Link href="#" isExternal>
                        <IconButton
                            icon={<FaTwitter />}
                            aria-label="Twitter"
                            variant="link"
                            colorScheme="black"
                            mr={5}
                        />
                    </Link>
                    <Link href="#" isExternal>
                        <IconButton
                            icon={<FaLinkedin />}
                            aria-label="LinkedIn"
                            variant="link"
                            colorScheme="black"
                            mr={5}
                        />
                    </Link>
                    <Link href="#" isExternal>
                        <IconButton
                            icon={<VscGlobe />}
                            aria-label="MainSite"
                            variant="link"
                            colorScheme="black"
                        />
                    </Link>
                </Flex>
            </Flex>
        </Box>
    );
};

export default Footer;