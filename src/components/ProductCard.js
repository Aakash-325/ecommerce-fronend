import React from "react";
import { Box, Text, Image, Flex } from "@chakra-ui/react";

const ProductCard = (props) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={{ base: 2, md: 4 }}
      maxW={{ base: "250px", md: "350px", lg: "450px" }}
      boxShadow="lg"
      transition="transform 0.3s"
      _hover={{ transform: "translateY(-5px)", boxShadow: "xl" }}
      height="100%"
      display="flex"
      flexDirection="column"
    >
      <Image
        src={props.product.img}
        alt={props.product.name}
        objectFit="cover"
        mb={4}
        borderRadius="md"
        width="100%" 
        height="310px"
      />

      <Flex flexDirection="column" flex="1">
        <Text
          fontWeight="bold"
          fontSize={{ base: "md", md: "lg" }}
          mb={2}
          lineHeight="shorter"
          textTransform="capitalize"
        >
          {props.product.name}
        </Text>
        <Text fontSize={{ base: "sm", md: "md" }} mb={2}>
          ₹ {props.product.price}
        </Text>
        <Flex alignItems="center">
          <Box
            as="span"
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            bgColor="green.500"
            color="white"
            rounded="md"
            fontSize="sm"
            px={2}
            py={1}
            mr={2}
          >
            {props.product.ratings}
          </Box>
          <Text fontSize={{ base: "sm", md: "md" }} color="gray.500">
            Rating
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default ProductCard;
