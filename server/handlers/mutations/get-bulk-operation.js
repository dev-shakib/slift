import "isomorphic-fetch";
import { gql } from "apollo-boost";
import { createClient } from "../client";

export function GET_BULK_OPERATION(id) {
  return gql`
  {
    node(id: "${id}") {
      ... on BulkOperation {
        id
        status
        errorCode
        createdAt
        completedAt
        objectCount
        fileSize
        url
        partialDataUrl
      }
    }
  }
  `;
}

export const getBulkOperation = async (shop, accessToken, id) => {
  const client = createClient(shop, accessToken);

  const data = await client
    .query({
      query: GET_BULK_OPERATION(id),
    })
    .then((response) => response.data);

  return data;
};
