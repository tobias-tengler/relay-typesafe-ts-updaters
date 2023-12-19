import { Environment, Network, RecordSource, Store, FetchFunction } from "relay-runtime";

const fetchFn: FetchFunction = async (request, variables) => {
  if (request.name === "AppQuery") {
    return Promise.resolve({
      data: {
        me: {
          id: "user:1",
          name: "Tobias",
          best_friend: {
            id: "user:2",
            name: "Piotr",
          },
          myItem: {
            __typename: "MyItem",
            id: "item:1",
            name: "Item of me",
          },
        },
      },
    });
  } else if (request.name === "AppAssignableQuery") {
    return Promise.resolve({
      data: {
        me: {
          id: "user:1",
          name: "Tobias",
          best_friend: null,
          myItem: {
            __typename: "MyItem",
            id: "item:1",
            name: "Item of me",
          },
        },
        otherUser: { __typename: "User", id: "user:2", name: "Piotr" },
        item: {
          id: "item:2",
          __isItem: "FriendsItem",
          __typename: "FriendsItem",
          name: "Item of friend",
          boughtAt: "2020-01-01",
        },
      },
    });
  }

  throw new Error("not implemented");
};

function createRelayEnvironment() {
  return new Environment({
    network: Network.create(fetchFn),
    store: new Store(new RecordSource()),
  });
}

export const RelayEnvironment = createRelayEnvironment();
