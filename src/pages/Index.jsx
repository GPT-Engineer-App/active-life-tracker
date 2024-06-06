import { Box, Container, Flex, Heading, Text, VStack, HStack, IconButton } from "@chakra-ui/react";
import { FaDumbbell, FaAppleAlt, FaChartLine } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="blue.600" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="lg">Fitness Tracker</Heading>
        <HStack spacing={4}>
          <Text>Workouts</Text>
          <Text>Diet</Text>
          <Text>Progress</Text>
        </HStack>
      </Flex>

      <VStack spacing={8} mt={8}>
        <Box w="full" p={4} bg="gray.100" borderRadius="md" boxShadow="md">
          <HStack spacing={4}>
            <IconButton aria-label="Workouts" icon={<FaDumbbell />} size="lg" isRound />
            <VStack align="start">
              <Heading size="md">Track Your Workouts</Heading>
              <Text>Log your exercises and monitor your progress over time.</Text>
            </VStack>
          </HStack>
        </Box>

        <Box w="full" p={4} bg="gray.100" borderRadius="md" boxShadow="md">
          <HStack spacing={4}>
            <IconButton aria-label="Diet" icon={<FaAppleAlt />} size="lg" isRound />
            <VStack align="start">
              <Heading size="md">Monitor Your Diet</Heading>
              <Text>Keep track of your meals and nutritional intake.</Text>
            </VStack>
          </HStack>
        </Box>

        <Box w="full" p={4} bg="gray.100" borderRadius="md" boxShadow="md">
          <HStack spacing={4}>
            <IconButton aria-label="Progress" icon={<FaChartLine />} size="lg" isRound />
            <VStack align="start">
              <Heading size="md">Check Your Progress</Heading>
              <Text>View your fitness journey and milestones achieved.</Text>
            </VStack>
          </HStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;