import { useState } from "react";
import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, Input, VStack, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

const WorkoutLog = () => {
  const [workouts, setWorkouts] = useState([]);
  const [exercise, setExercise] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");

  const handleAddWorkout = () => {
    const newWorkout = { exercise, sets, reps, weight };
    setWorkouts([...workouts, newWorkout]);
    setExercise("");
    setSets("");
    setReps("");
    setWeight("");
  };

  return (
    <Container maxW="container.md" p={4}>
      <Heading mb={4}>Log Your Workout</Heading>
      <VStack spacing={4} align="stretch">
        <FormControl id="exercise">
          <FormLabel>Exercise</FormLabel>
          <Input value={exercise} onChange={(e) => setExercise(e.target.value)} />
        </FormControl>
        <FormControl id="sets">
          <FormLabel>Sets</FormLabel>
          <Input value={sets} onChange={(e) => setSets(e.target.value)} />
        </FormControl>
        <FormControl id="reps">
          <FormLabel>Reps</FormLabel>
          <Input value={reps} onChange={(e) => setReps(e.target.value)} />
        </FormControl>
        <FormControl id="weight">
          <FormLabel>Weight</FormLabel>
          <Input value={weight} onChange={(e) => setWeight(e.target.value)} />
        </FormControl>
        <Button colorScheme="blue" onClick={handleAddWorkout}>Add Workout</Button>
      </VStack>

      <Heading size="md" mt={8} mb={4}>Logged Workouts</Heading>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Exercise</Th>
            <Th>Sets</Th>
            <Th>Reps</Th>
            <Th>Weight</Th>
          </Tr>
        </Thead>
        <Tbody>
          {workouts.map((workout, index) => (
            <Tr key={index}>
              <Td>{workout.exercise}</Td>
              <Td>{workout.sets}</Td>
              <Td>{workout.reps}</Td>
              <Td>{workout.weight}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Container>
  );
};

export default WorkoutLog;