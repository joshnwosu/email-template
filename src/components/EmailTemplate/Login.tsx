import { Box, Button, Text } from '@chakra-ui/react';
export default function Login() {
  return (
    <div>
      <Box bg='#ffffff' p={6} w={500}>
        <Text>New Login to Mybuildingfile</Text>
        <Text>Hi Angela,</Text>
        <Text>
          We noticed you logged in from a new device. If this was you, there's
          nothing for you to do right now.
        </Text>

        <Box>
          <Text>Location:</Text>
          <Text>Time:</Text>
        </Box>

        <Text>Not you?</Text>
        <Button>Secure account</Button>
      </Box>
    </div>
  );
}
