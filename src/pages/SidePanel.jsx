import { Container, Text, VStack } from "@chakra-ui/react";

const SidePanel = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Welcome to the Side Panel</Text>
        <Text>This is your Chrome extension side panel.</Text>
      </VStack>
    </Container>
  );
};

export default SidePanel;