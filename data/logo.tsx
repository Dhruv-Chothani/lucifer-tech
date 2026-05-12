import { chakra, HTMLChakraProps } from '@chakra-ui/react'

export const Logo: React.FC<HTMLChakraProps<'div'>> = (props) => {
  return (
    <chakra.div
      fontSize="2xl"
      fontWeight="bold"
      color="#8952e0"
      {...props}
    >
      Lucifer Tech
    </chakra.div>
  )
}
