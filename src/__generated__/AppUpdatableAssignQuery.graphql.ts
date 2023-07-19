/**
 * @generated SignedSource<<cf23225a8cd46ce0176e25e7ef5c478d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { UpdatableQuery, ConcreteUpdatableQuery } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AppUpdatableAssignQuery$variables = {};
export type AppUpdatableAssignQuery$data = {
  get me(): {
    get best_friend(): {} | null;
    set best_friend(value: {
      readonly __typename: "User";
      readonly __id: string;
      readonly " $fragmentSpreads": FragmentRefs<"AppAssignableUser">;
    } | null);
  };
  set me(value: null | undefined);
};
export type AppUpdatableAssignQuery = {
  response: AppUpdatableAssignQuery$data;
  variables: AppUpdatableAssignQuery$variables;
};

const node: ConcreteUpdatableQuery = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppUpdatableAssignQuery",
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
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "best_friend",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "AppAssignableUser"
              }
            ],
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

(node as any).hash = "cd353bb97b8354b950635eba98dd7d71";

export default node;
