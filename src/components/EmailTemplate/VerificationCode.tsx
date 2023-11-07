import { Box, Button, Flex, Link, Stack, Text } from '@chakra-ui/react';
import Logo from '../Shared/Logo/Logo';
export default function VerificationCode() {
  return (
    <Box w={480}>
      <Box bg='#ffffff' p={6}>
        <Stack gap={4}>
          <Logo />
          <Text fontSize={'xl'} fontWeight={'semibold'}>
            Confirm verification code
          </Text>
          <Text fontSize={'sm'}>Hi Ian,</Text>
          <Text fontSize={'sm'}>This is your verification code:</Text>

          <Flex gap={2}>
            {[4, 4, 8, 6].map((item, index) => (
              <Box
                key={index}
                w={'50px'}
                h={'50px'}
                rounded={'md'}
                border={'1px'}
                borderColor={'#2B4CF3'}
                bg={'#F1F6F9'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
              >
                <Text fontSize={'3xl'} fontWeight={800}>
                  {item}
                </Text>
              </Box>
            ))}
          </Flex>

          <Box>
            <Text fontSize={'sm'}>
              Whether you're here for your brand, for a cause, or just for fun -
              welcome!
            </Text>
            <Text fontSize={'sm'}>
              This code will only be valid for the next 5 minutes. If the code
              does not work, you can use this verification link:
            </Text>
          </Box>
          <div>
            <Button bg='#2B4CF3' color='#ffffff' fontSize={'sm'}>
              Verify Email Address
            </Button>
          </div>

          <Box>
            <Text fontSize={'sm'}>Thanks,</Text>
            <Text fontSize={'sm'}>Mybuilding Team,</Text>
          </Box>
        </Stack>
      </Box>

      <Box py={6} px={2} pr={8}>
        <Stack gap={4}>
          <Text fontSize={'sm'}>
            Questions or faq?{' '}
            <Link href='/' color={'#2B4CF3'}>
              faq@mybuildingfile.com
            </Link>
            . If you'd rather not receive this kind of email, don't want any
            more emails from Mybuildingfile?{' '}
            <Link href='/' color={'#2B4CF3'}>
              Unsubscribe
            </Link>
            .
          </Text>

          <Box>
            <Text fontSize={'sm'}>32 Christen Avenue, Surulere, Lagos</Text>
            <Text fontSize={'sm'}>&copy; 2023 Mybuildingfile</Text>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
