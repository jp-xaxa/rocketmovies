import { Container } from "./styles"

export function Button({ title, icon: Icon, loading = false, ...rest }) {
  return (
    <Container type="button" disabled={loading} {...rest}>
      {loading
        ? "Carregando..."
        : Icon && (
            <>
              <Icon size={20} /> {title}
            </>
          )}
    </Container>
  )
}
