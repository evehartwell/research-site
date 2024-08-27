import React from 'react';
import {
    Box,
    Text,
    Flex,
    Container,
    Heading,
} from '@chakra-ui/react';
import './index.css';

const Navigation = () => {
    return (
        <Box>
            <Flex className="nav" align="center">
                <Flex className="nav-links" justify="space-between">
                    <Link to="/" className="nav-item">
                        <Button variant="ghost" className="nav-button">Home</Button>
                    </Link>
                    <Link to="/" className="nav-item">
                        <Button variant="ghost" className="nav-button">About</Button>
                    </Link>
                    <Link to="/" className="nav-item">
                        <Button variant="ghost" className="nav-button">Resources</Button>
                    </Link>
                    <Link to="/" className="nav-item">
                        <Button variant="ghost" className="nav-button">Related Works</Button>
                    </Link>
                </Flex>
            </Flex>
        </Box>
        
    )
};

export default Navigation;