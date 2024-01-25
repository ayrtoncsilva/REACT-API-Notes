import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from "./style"

export function Header(){
    return(
        <Container>
            <Profile>
                <img src="https://github.com/ayrtoncsilva.png" alt="imagem do usuario" />

                <div>
                    <span>Bem vindo</span>
                    <strong>Ayrton Cardoso</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine /> 
            </Logout>
        </Container>
    )
}