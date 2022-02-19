import "isomorphic-fetch";
import { gql } from "apollo-boost";
import { createClient } from "../client";
import { getBulkOperation } from "./get-bulk-operation";

export function BULK_PRODUCT() {
  return gql`
    mutation {
      bulkOperationRunQuery(
        query: """
        {
          products {
            edges {
              node {
                id
                title
              }
            }
          }
        }
        """
      ) {
        bulkOperation {
          id
          status
        }
        userErrors {
          field
          message
        }
      }
    }
  `;
}

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export const getBulkProduct = async (shop, accessToken) => {
  const client = createClient(shop, accessToken);
  const data = await client
    .mutate({
      mutation: BULK_PRODUCT(),
    })
    .then((response) => response.data);

  const id = data.bulkOperationRunQuery.bulkOperation.id;

  await delay(1500);

  const response = await getBulkOperation(shop, accessToken, id);

  return response;
};
