/**
 * @generated SignedSource<<879b84658502b7cfb15f82edf61f9e3e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { FragmentRefs } from "relay-runtime";

export function validate(value: {
  readonly __typename: string;
  readonly __id: string;
  readonly " $fragmentSpreads": testAssignableUser$fragmentType;
}): false | {
  readonly __typename: "User";
  readonly __id: string;
  readonly " $fragmentSpreads": testAssignableUser$fragmentType;
} {
  return value.__typename === 'User' ? value : false;
}
