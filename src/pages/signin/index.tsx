import React from 'react';
import { Container, Content } from './styles';
import { FiMail, FiLock } from 'react-icons/fi'

import Input from '../../components/Input';
import Button from '../../components/Button';

const Signin: React.FC = () => {
    return(
        <Container>
            <Content>
              <form>
                  <h1>Faca seu Login</h1>

                  <Input
                  icon={FiMail}
                  name="email" 
                  placeholder="E-mail" 
                  autoComplete="false" 
                  />

                  <Input
                  icon={FiLock}
                  name="password" 
                  type="password" 
                  placeholder="senha" 
                  />
                  <button type="button">Acessar</button>

                  <a href="forgot">Esqueci minha senha</a>
              </form>
            </Content>
        </Container>
    );
}

export default Signin;