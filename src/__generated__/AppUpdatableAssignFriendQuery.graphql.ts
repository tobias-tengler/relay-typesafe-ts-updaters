/**
 * @generated SignedSource<<db2831f2ab3345345b723d414ef0722a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { UpdatableQuery, ConcreteUpdatableQuery } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AppUpdatableAssignFriendQuery$variables = Record<PropertyKey, never>;
export type AppUpdatableAssignFriendQuery$data = {
  get me(): {
    get best_friend(): Record<PropertyKey, never> | null | undefined;
    set best_friend(value: {
      readonly __typename: "User";
      readonly __id: string;
      readonly " $fragmentSpreads": FragmentRefs<"AppAssignableUser">;
    } | null | undefined);
  };
  set me(value: null | undefined);
};
export type AppUpdatableAssignFriendQuery = {
  response: AppUpdatableAssignFriendQuery$data;
  variables: AppUpdatableAssignFriendQuery$variables;
};

const node: ConcreteUpdatableQuery = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppUpdatableAssignFriendQuery",
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

(node as any).hash = "82ac9f6ba630f141abc792921c715cf9";

export default node;
