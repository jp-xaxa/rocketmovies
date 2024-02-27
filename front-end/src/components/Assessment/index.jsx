import { Container } from "./styles"
import { FaRegStar, FaStar } from "react-icons/fa"

export function Assessment({ value, ...rest }) {
  const stars = Array.from({ length: 5 }, (_, index) => {
    if (index < value) {
      return <FaStar key={index} />
    } else {
      return <FaRegStar key={index} />
    }
  })

  return <Container {...rest}>{stars}</Container>
}
