import {
  Flex,
  Stack,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Link,
  Badge
} from "@chakra-ui/react"
import { connect } from "react-redux";
import { fetchTransactions } from "redux/actions/actions"
import { ITransaction } from "types";
import { useEffect } from "react";

function Transactions(props: any) {

  const error = props.ui.errors?.error;

  useEffect(() => {
    const interval = setInterval(() => {
      props.fetchTransactions()
      console.log('This will be called every 1 seconds');
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  console.log(props.transactions)

  return (
    <Flex py={8} h="100%" gap={10}>
      <Stack w="100%">
        <TableContainer>
          <Table size='sm'>
            <Thead>
              <Tr>
                <Th>Status</Th>
                <Th>TxHash</Th>
                <Th>From</Th>
                <Th>to</Th>
              </Tr>
            </Thead>
            <Tbody>
              {!error && !props.transactions?.loading &&
                props.transactions?.results.map((transaction: ITransaction, index: any) => (
                  <Tr key={index}>
                    <Td>
                      <Badge rounded="full" px="2" fontSize="xs" textTransform="capitalize" colorScheme={'yellow'}>
                        {transaction.status}
                      </Badge>
                    </Td>
                    <Td> <Link href={"https://etherscan.io/tx/" + transaction.txHash} target="_blank">{transaction.txHash}</Link></Td>
                    <Td>{transaction.from}</Td>
                    <Td>{transaction.to}</Td>
                  </Tr>
                ))
              }
            </Tbody>
          </Table>
        </TableContainer>

        {error &&
          <Flex justifyContent={'center'} color="grey.600">
            <Text>{error}</Text>
          </Flex>
        }
      </Stack>

    </Flex>
  )
}

//this map the states to our props in this functional component
const mapStateToProps = (state: any) => ({
  ui: state.ui,
  transactions: state.transactions,
});

//this map actions to our props in this functional component
const mapActionsToProps = {
  fetchTransactions
};

export default connect(mapStateToProps, mapActionsToProps)(Transactions)
