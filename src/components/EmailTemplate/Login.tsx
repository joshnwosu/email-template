import { Box, Button, Flex, Image, Link, Stack, Text } from '@chakra-ui/react';
import Logo from '../Shared/Logo/Logo';

export default function Login() {
  return (
    <Box w={460}>
      <Box bg='#ffffff' p={6}>
        <Stack gap={4}>
          <Logo />
          <Text fontSize={'xl'} fontWeight={'semibold'}>
            New Login to Mybuildingfile
          </Text>
          <Text fontSize={'sm'}>Hi Angela,</Text>
          <Text fontSize={'sm'}>
            We noticed you logged in from a new device. If this was you, there's
            nothing for you to do right now.
          </Text>

          <Box>
            <Flex gap={2} alignItems={'center'}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                viewBox='0 0 24 24'
              >
                <path
                  d='M12 0c-4.198 0-8 3.403-8 7.602 0 6.243 6.377 6.903 8 16.398 1.623-9.495 8-10.155 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.342-3 3-3 3 1.343 3 3-1.343 3-3 3z'
                  fill='#94A3BD'
                />
              </svg>
              <Text fontSize={'sm'}>Location:</Text>
              <Text fontWeight={500} fontSize={'sm'}>
                [Location]
              </Text>
            </Flex>
            <Flex gap={2} alignItems={'center'}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='14'
                height='14'
                viewBox='0 0 24 24'
              >
                <path
                  d='M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 14h-7v-8h2v6h5v2z'
                  fill='#94A3BD'
                />
              </svg>
              <Text fontSize={'sm'}>Time:</Text>{' '}
              <Text fontWeight={500} fontSize={'sm'}>
                November 07, 2023 at 12:38 AM
              </Text>
            </Flex>
          </Box>

          <Image
            boxSize={'100%'}
            objectFit={'cover'}
            height={150}
            src='https://1.bp.blogspot.com/-4BNREC0Jojo/VGo7ahW35wI/AAAAAAAABAc/9thZl94F6fY/s1600/GMS%2B-%2BRelease%2BBlog%2BNacho%2B-%2BMap%2BToolbar.png'
            alt='Map'
          />

          <Box>
            <Text fontSize={'xl'} fontWeight={'semibold'} mb={2}>
              Not you?
            </Text>
            <Text fontSize={'sm'}>
              Take a few minutes to secure your account.
            </Text>
          </Box>
          <div>
            <Button bg='#2B4CF3' color='#ffffff' fontSize={'sm'}>
              Secure Account
            </Button>
          </div>
        </Stack>
      </Box>

      <Box py={6} px={2} pr={8}>
        <Stack gap={4}>
          <Text fontSize={'sm'}>
            This email was sent to{' '}
            <Link href='/' color={'#2B4CF3'}>
              angel@mybuildingfile.com
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
