import { DocumentNode } from "graphql";

export const query = <T extends Object>(doc: DocumentNode, variables = {}) => {
  return {
    query: doc.loc?.source.body,
    variables,
  };
};
