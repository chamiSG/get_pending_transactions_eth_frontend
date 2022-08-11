import * as React from "react"
import { Link as ReactLink } from "react-router-dom"
import {
  Flex,
  Link,
  Heading
} from "@chakra-ui/react"
import LogoImage from "../assets/logo.svg"

export const Logo = (() => {

  return (
    <>
      <Link
        display="flex"
        _hover={{
          textDecoration: "none"
        }}
        rounded={'md'}
        as={ReactLink} 
        to='/'>
        <Flex fontSize={30} fontWeight={700} letterSpacing={0.1}>
          <Heading as='h3' size='lg'>Pending Transactions on Ethereum</Heading>
        </Flex>
      </Link>
    </>
  )
})
