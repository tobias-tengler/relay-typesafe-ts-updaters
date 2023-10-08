/**
 * @generated SignedSource<<df5fb38a4764c71c2d464e73e849ce0f>>
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
  readonly " $fragmentSpreads": AppAssignableUser$fragmentType;
}): false | {
  readonly __typename: "User";
  readonly __id: string;
  readonly " $fragmentSpreads": AppAssignableUser$fragmentType;
} {
  return value.__typename === 'User' ? value : false;
}
