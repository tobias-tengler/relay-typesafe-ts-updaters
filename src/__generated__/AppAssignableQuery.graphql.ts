/**
 * @generated SignedSource<<9b0e6e5b16148bd344f49636d1dd8184>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AppAssignableQuery$variables = Record<PropertyKey, never>;
export type AppAssignableQuery$data = {
  readonly item: {
    readonly __id: string;
    readonly __isAppAssignableItem: string;
    readonly boughtAt?: string | null | undefined;
    readonly giftedBy?: {
      readonly name: string | null | undefined;
    } | null | undefined;
    readonly name: string | null | undefined;
    readonly " $fragmentSpreads": FragmentRefs<"AppAssignableItem">;
  } | null | undefined;
  readonly me: {
    readonly best_friend: {
      readonly name: string | null | undefined;
    } | null | undefined;
    readonly myItem: {
      readonly name: string | null | undefined;
    } | null | undefined;
    readonly name: string | null | undefined;
  };
  readonly otherUser: {
    readonly __typename: "User";
    readonly __id: string;
    readonly name: string | null | undefined;
    readonly " $fragmentSpreads": FragmentRefs<"AppAssignableUser">;
  };
};
export type AppAssignableQuery = {
  response: AppAssignableQuery$data;
  variables: AppAssignableQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v1 = [
  (v0/*: any*/)
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__id",
  "storageKey": null
},
v4 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "boughtAt",
      "storageKey": null
    }
  ],
  "type": "FriendsItem",
  "abstractKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v6 = [
  (v0/*: any*/),
  (v5/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppAssignableQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "best_friend",
            "plural": false,
            "selections": (v1/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "myItem",
            "plural": false,
            "selections": (v1/*: any*/),
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "otherUser",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "AppAssignableUser"
          },
          (v2/*: any*/),
          (v3/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": null,
        "kind": "LinkedField",
        "name": "item",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "AppAssignableItem"
          },
          {
            "alias": "__isAppAssignableItem",
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          (v3/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "User",
                "kind": "LinkedField",
                "name": "giftedBy",
                "plural": false,
                "selections": (v1/*: any*/),
                "storageKey": null
              }
            ],
            "type": "MyItem",
            "abstractKey": null
          },
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppAssignableQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "best_friend",
            "plural": false,
            "selections": (v6/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "myItem",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v0/*: any*/),
              (v5/*: any*/)
            ],
            "storageKey": null
          },
          (v5/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "otherUser",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v2/*: any*/),
          (v5/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": null,
        "kind": "LinkedField",
        "name": "item",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v0/*: any*/),
          {
            "kind": "TypeDiscriminator",
            "abstractKey": "__isItem"
          },
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "User",
                "kind": "LinkedField",
                "name": "giftedBy",
                "plural": false,
                "selections": (v6/*: any*/),
                "storageKey": null
              }
            ],
            "type": "MyItem",
            "abstractKey": null
          },
          (v4/*: any*/),
          (v5/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "a12bf51242c584d761f7a132a1827bd5",
    "id": null,
    "metadata": {},
    "name": "AppAssignableQuery",
    "operationKind": "query",
    "text": "query AppAssignableQuery {\n  me {\n    name\n    best_friend {\n      name\n      id\n    }\n    myItem {\n      __typename\n      name\n      id\n    }\n    id\n  }\n  otherUser {\n    name\n    ...AppAssignableUser\n    id\n  }\n  item {\n    __typename\n    name\n    ...AppAssignableItem\n    ... on MyItem {\n      giftedBy {\n        name\n        id\n      }\n    }\n    ... on FriendsItem {\n      boughtAt\n    }\n    id\n  }\n}\n\nfragment AppAssignableItem on Item {\n  __isItem: __typename\n  __typename\n}\n\nfragment AppAssignableUser on User {\n  __typename\n}\n"
  }
};
})();

(node as any).hash = "d1221c611e54ba31e41a8613098629cf";

export default node;
