/**
 * @generated SignedSource<<7348647f20d345e6456274b7b9f2624d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { FragmentRefs } from "relay-runtime";

const node: any = {};

(node as any).hash = "a1488fcf5af224c81a9df5a6d12e1b14";

export default node;

export function validate(value: {
  readonly __typename: string;
  readonly __id: string;
  readonly " $fragmentSpreads": FragmentRefs<"AppAssignableUser">;
}): false | {
  readonly __typename: "User";
  readonly __id: string;
  readonly " $fragmentSpreads": FragmentRefs<"AppAssignableUser">;
} {
  return value.__typename === 'User' ? value : false;
}
