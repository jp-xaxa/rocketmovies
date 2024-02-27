import { Container, Nav, Content, Form, Section, ButtonDelete } from "./styles"

import { FiArrowLeft } from "react-icons/fi"
import { Link } from "react-router-dom"

import { Header } from "../../components/Header"
import { Title } from "../../components/Title"
import { Input } from "../../components/Input"
import { Textarea } from "../../components/Textarea"
import { NoteItem } from "../../components/NoteItem"
import { Button } from "../../components/Button"

export function NewMovie() {
  return (
    <Container>
      <Header />

      <Nav>
        <Link to="/">
          <FiArrowLeft /> Voltar
        </Link>
      </Nav>

      <Content>
        <Title title="Novo Filme" />

        <Form>
          <div>
            <Input placeholder="Título" type="text" />

            <Input placeholder="Sua nota (de 0 a 5)" type="number" />
          </div>

          <Textarea placeholder="Observações" />

          <Section>
            <h1>Marcadores</h1>

            <div className="tags">
              <NoteItem value="React" />
              <NoteItem isNew placeholder="Novo marcador" />
            </div>
          </Section>

          <div>
            <ButtonDelete>Excluir</ButtonDelete>
            <Button title="Salvar" />
          </div>
        </Form>
      </Content>
    </Container>
  )
}
