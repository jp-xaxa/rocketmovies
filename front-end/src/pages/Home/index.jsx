import { Container, Subheader, Section, Button } from "./styles"
import { FiPlus } from "react-icons/fi"

import { Link } from "react-router-dom"

import { Header } from "../../components/Header"
import { Note } from "../../components/Note"

export function Home() {
  return (
    <Container>
      <Header />

      <Subheader>
        <h1>Meus filmes</h1>

        <Button>
          <FiPlus />
          Adicionar filme
        </Button>
      </Subheader>

      <Section>
        <Note
          data={{
            title: "Interestellar",
            description: `Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fan...`,
            tags: [
              { id: "1", name: "Ficção Científica" },
              { id: "2", name: "Drama" },
              { id: "3", name: "Família" },
            ],
          }}
        />

        <Note
          data={{
            title: "Interestellar",
            description: `Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fan...`,
            tags: [
              { id: "1", name: "Ficção Científica" },
              { id: "2", name: "Drama" },
              { id: "3", name: "Família" },
            ],
          }}
        />

        <Note
          data={{
            title: "Interestellar",
            description: `Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fan...`,
            tags: [
              { id: "1", name: "Ficção Científica" },
              { id: "2", name: "Drama" },
              { id: "3", name: "Família" },
            ],
          }}
        />
      </Section>
    </Container>
  )
}
