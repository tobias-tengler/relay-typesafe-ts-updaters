/**
 * @generated SignedSource<<b1f38e12bb03a2aad4c3bd48b2f9e962>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { UpdatableQuery, ConcreteUpdatableQuery } from 'relay-runtime';
export type AppUpdatableQuery$variables = Record<PropertyKey, never>;
export type AppUpdatableQuery$data = {
  get me(): {
    name: string | null | undefined;
  };
  set me(value: null | undefined);
};
export type AppUpdatableQuery = {
  response: AppUpdatableQuery$data;
  variables: AppUpdatableQuery$variables;
};

const node: ConcreteUpdatableQuery = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppUpdatableQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "UpdatableQuery"
};

(node as any).hash = "5608025e019a2cb9708314a05134bb01";

export default node;
