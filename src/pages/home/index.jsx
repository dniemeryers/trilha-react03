

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";



import { 

    Container,
    TextContent,
    Title,
    TitleHighlight,
    Login,
    Input,
    Conta,
    Flogin

} from './style'

const Home = () => {
    return (<>
   <Header />
   <Container>
    <div>
       
        <TextContent>
        A plataforma para você aprender com experts, dominar as principais 
        tecnologias e entrar mais rápido nas empresas mais desejadas.
        </TextContent>
       
                

    </div>
    <div>
        <Login>
    <Title>
            <TitleHighlight>
               Começe agora grátis
                <br/>
            </TitleHighlight>
            Crie sua conta e make the change._

            <Input placeholder='Nome Completo' />
            <Input placeholder='Email'/>
            <Input placeholder='Password'/>
           
           
        </Title>
        <Button title="Criar minha conta" variant="secondary" onClick={() => null}/>
        Ao clicar em "criar minha conta grátis", declaro
         que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
         <div>
         <Conta>Já tenho conta.</Conta><Flogin>Fazer login</Flogin>
         </div>
      
        </Login>
    </div>
   </Container>
   
    </>)
}

export { Home }