import { Container } from "./styles"
import { Link } from "react-router-dom"

export function Button({ title, loading = false, ...rest }) {
  return (
    <Container type="button" disabled={loading} {...rest}>
      {loading ? "Carregando..." : title}
    </Container>
  )
}
