import { Container } from "./styles"

export function Textarea({ valeu, ...rest }) {
  return <Container {...rest}>{valeu}</Container>
}
