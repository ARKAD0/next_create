
import {  Stack, Flex, Spacer, Box,  } from '@chakra-ui/react'
import { ButtonContact } from '../components/Button';
import { Cards } from '../components/Card';

import NavBar from '../components/NavBar'



export default function Home() {
  return (
    <><Stack direction='row' align='center'>
      <ButtonContact />
    </Stack><Flex>
        <Cards />
      </Flex></>
  
  );
}
