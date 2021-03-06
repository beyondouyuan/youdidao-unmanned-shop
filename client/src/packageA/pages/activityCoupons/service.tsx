import client from "../../../utils/client";
import gql from "graphql-tag";

// 领取优惠券
export const drawCard = code =>
  client.mutate({
    mutation: gql`
      mutation($code: Int) {
        drawCard(code: $code) 
      }
    `,
    variables: { code }
  });
