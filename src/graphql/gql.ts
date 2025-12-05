/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  query AllCaseSlugs {\n    cases {\n      nodes {\n        slug\n      }\n    }\n  }\n": typeof types.AllCaseSlugsDocument,
    "\n  query Employees {\n    employees {\n      nodes {\n        title\n      }\n    }\n  }\n": typeof types.EmployeesDocument,
    "\n  query Page($slug: ID!) {\n    page(id: $slug, idType: URI) {\n      id\n      title\n      slug\n    }\n  }\n": typeof types.PageDocument,
    "\n  query AllServicesSlugs {\n    serviceCategories {\n      nodes {\n        slug\n        services {\n          nodes {\n            slug\n          }\n        }\n      }\n    }\n  }\n": typeof types.AllServicesSlugsDocument,
};
const documents: Documents = {
    "\n  query AllCaseSlugs {\n    cases {\n      nodes {\n        slug\n      }\n    }\n  }\n": types.AllCaseSlugsDocument,
    "\n  query Employees {\n    employees {\n      nodes {\n        title\n      }\n    }\n  }\n": types.EmployeesDocument,
    "\n  query Page($slug: ID!) {\n    page(id: $slug, idType: URI) {\n      id\n      title\n      slug\n    }\n  }\n": types.PageDocument,
    "\n  query AllServicesSlugs {\n    serviceCategories {\n      nodes {\n        slug\n        services {\n          nodes {\n            slug\n          }\n        }\n      }\n    }\n  }\n": types.AllServicesSlugsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query AllCaseSlugs {\n    cases {\n      nodes {\n        slug\n      }\n    }\n  }\n"): typeof import('./graphql').AllCaseSlugsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Employees {\n    employees {\n      nodes {\n        title\n      }\n    }\n  }\n"): typeof import('./graphql').EmployeesDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Page($slug: ID!) {\n    page(id: $slug, idType: URI) {\n      id\n      title\n      slug\n    }\n  }\n"): typeof import('./graphql').PageDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query AllServicesSlugs {\n    serviceCategories {\n      nodes {\n        slug\n        services {\n          nodes {\n            slug\n          }\n        }\n      }\n    }\n  }\n"): typeof import('./graphql').AllServicesSlugsDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
