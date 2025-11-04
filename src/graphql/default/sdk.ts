// THIS FILE IS GENERATED, DO NOT EDIT!
/* eslint-disable eslint-comments/no-unlimited-disable */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */
import type * as Types from '#graphql/client';

import type { ExecutionResult } from 'graphql';

export const TestDocument = /*#__PURE__*/ `
    query test {
  getUser(id: "1") {
    id
    name
    email
  }
}
    `;
export type Requester<C = {}, E = unknown> = <R, V>(doc: string, vars?: V, options?: C) => Promise<ExecutionResult<R, E>> | AsyncIterable<ExecutionResult<R, E>>
export function getSdk<C, E>(requester: Requester<C, E>) {
  return {
    test(variables?: Types.TestQueryVariables, options?: C): Promise<ExecutionResult<Types.TestQuery, E>> {
      return requester<Types.TestQuery, Types.TestQueryVariables>(TestDocument, variables, options) as Promise<ExecutionResult<Types.TestQuery, E>>;
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;