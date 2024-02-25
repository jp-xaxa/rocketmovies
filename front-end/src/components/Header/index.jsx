import { Container, Profile } from "./styles"
import { Link } from "react-router-dom"

import { Input } from "../Input"

export function Header() {
  return (
    <Container>
      <h1>RocketMovies</h1>

      <Input placeholder="Pesquisar pelo título" type="text" />

      <Profile>
        <div>
          <strong>João Pedro</strong>
          <Link to="/register">sair</Link>
        </div>

        <img src="https://github.com/jp-xaxa.png" alt="Foto do usuário" />
      </Profile>
    </Container>
  )
}
