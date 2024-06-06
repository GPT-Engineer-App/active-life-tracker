import { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Heading, Input, VStack, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ProgressTracking = () => {
  const [progress, setProgress] = useState([]);
  const [date, setDate] = useState("");
  const [weight, setWeight] = useState("");
  const [bodyFat, setBodyFat] = useState("");
  const [muscleMass, setMuscleMass] = useState("");

  const handleAddProgress = () => {
    const newProgress = { date, weight, bodyFat, muscleMass };
    setProgress([...progress, newProgress]);
    setDate("");
    setWeight("");
    setBodyFat("");
    setMuscleMass("");
  };

  const data = {
    labels: progress.map(p => p.date),
    datasets: [
      {
        label: 'Weight',
        data: progress.map(p => p.weight),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
      {
        label: 'Body Fat (%)',
        data: progress.map(p => p.bodyFat),
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
      },
      {
        label: 'Muscle Mass',
        data: progress.map(p => p.muscleMass),
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
      },
    ],
  };

  return (
    <Container maxW="container.md" p={4}>
      <Heading mb={4}>Track Your Progress</Heading>
      <VStack spacing={4} align="stretch">
        <FormControl id="date">
          <FormLabel>Date</FormLabel>
          <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </FormControl>
        <FormControl id="weight">
          <FormLabel>Weight</FormLabel>
          <Input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
        </FormControl>
        <FormControl id="bodyFat">
          <FormLabel>Body Fat (%)</FormLabel>
          <Input type="number" value={bodyFat} onChange={(e) => setBodyFat(e.target.value)} />
        </FormControl>
        <FormControl id="muscleMass">
          <FormLabel>Muscle Mass</FormLabel>
          <Input type="number" value={muscleMass} onChange={(e) => setMuscleMass(e.target.value)} />
        </FormControl>
        <Button colorScheme="blue" onClick={handleAddProgress}>Add Progress</Button>
      </VStack>

      <Heading size="md" mt={8} mb={4}>Progress Over Time</Heading>
      <Box>
        <Line data={data} />
      </Box>

      <Heading size="md" mt={8} mb={4}>Logged Progress</Heading>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Date</Th>
            <Th>Weight</Th>
            <Th>Body Fat (%)</Th>
            <Th>Muscle Mass</Th>
          </Tr>
        </Thead>
        <Tbody>
          {progress.map((entry, index) => (
            <Tr key={index}>
              <Td>{entry.date}</Td>
              <Td>{entry.weight}</Td>
              <Td>{entry.bodyFat}</Td>
              <Td>{entry.muscleMass}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Container>
  );
};

export default ProgressTracking;