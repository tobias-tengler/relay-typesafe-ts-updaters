/**
 * @generated SignedSource<<d8f0be7a50b69b7474ce3b3e28696c1a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { UpdatableQuery, ConcreteUpdatableQuery } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AppUpdatableAssignItemQuery$variables = Record<PropertyKey, never>;
export type AppUpdatableAssignItemQuery$data = {
  get me(): {
    get myItem(): Record<PropertyKey, never> | null | undefined;
    set myItem(value: {
      readonly __id: string;
      readonly __isAppAssignableItem: string;
      readonly " $fragmentSpreads": FragmentRefs<"AppAssignableItem">;
    } | null | undefined);
  };
  set me(value: null | undefined);
};
export type AppUpdatableAssignItemQuery = {
  response: AppUpdatableAssignItemQuery$data;
  variables: AppUpdatableAssignItemQuery$variables;
};

const node: ConcreteUpdatableQuery = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppUpdatableAssignItemQuery",
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
            "concreteType": null,
            "kind": "LinkedField",
            "name": "myItem",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "AppAssignableItem"
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

(node as any).hash = "b51ce80c86278fcc6583a343852cbd51";

export default node;
