import { FiMail, FiLock, FiUser, FiArrowLeft, FiCamera } from "react-icons/fi"
import { Link } from "react-router-dom"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { Container, Form, Avatar } from "./styles"

export function Profile() {
  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft /> Voltar
        </Link>
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/jp-xaxa.png" alt="Foto do usuário" />

          <label htmlFor="avatar">
            <FiCamera />

            <input id="avatar" type="file" />
          </label>
        </Avatar>

        <Input value="João Pedro" type="text" icon={FiUser} />

        <Input value="jp.reisconde@gmail.com" type="text" icon={FiMail} />

        <Input placeholder="Senha antiga" type="password" icon={FiLock} />

        <Input placeholder="Senha nova" type="password" icon={FiLock} />

        <Button title="Salvar" />
      </Form>
    </Container>
  )
}
