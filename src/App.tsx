import {
  Box,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import Login from './components/EmailTemplate/Login';
import VerificationCode from './components/EmailTemplate/VerificationCode';

function App() {
  return (
    <Box w='100%' minH={'100vh'} p={'4'} bg={'#F1F6F9'}>
      <Tabs position='relative' variant='unstyled'>
        <TabList>
          <Tab>New login</Tab>
          <Tab>Confirm verification code</Tab>
        </TabList>
        <TabIndicator
          mt='-1.5px'
          height='2px'
          bg='blue.500'
          borderRadius='1px'
        />
        <TabPanels>
          <TabPanel px={0}>
            <Login />
          </TabPanel>
          <TabPanel px={0}>
            <VerificationCode />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default App;
