/**
 * @generated SignedSource<<77d8e6fd3eb697b961ff39200077a4b1>>
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
  readonly " $fragmentSpreads": AppAssignableUser$fragmentType;
}): false | {
  readonly __typename: "User";
  readonly __id: string;
  readonly " $fragmentSpreads": AppAssignableUser$fragmentType;
} {
  return value.__typename === 'User' ? value : false;
}
