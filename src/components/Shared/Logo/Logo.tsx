import { Image } from '@chakra-ui/react';
import logo from '../../../assets/mybuildingfile.png';

export default function Logo() {
  return (
    <Image
      src={logo}
      w={'140px'}
      height={'50px'}
      objectFit={'contain'}
      alt='mybuildingfile logo'
    />
  );
}
