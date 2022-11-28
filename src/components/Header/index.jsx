import React from 'react';
import logo from '../../assets/logo.png';
import { Button } from '../Button';

import {
    Container,
    MenuRight,
    Row,
    Wrapper

} from './style';

const Header = () => {
  return (
   <Wrapper>
         <Container>
               <Row>
               <img src= {logo} height="30px" width="60px" alt="" />
               </Row>
               <Row>
                  <MenuRight href="#">Home</MenuRight>
                  <Button title="Entrar"/>   
                  <Button title="Cadastrar"/>
               </Row>
         </Container>
   </Wrapper>
  )
}

export { Header }