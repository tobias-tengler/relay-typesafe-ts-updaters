import {
  Environment,
  Network,
  RecordSource,
  Store,
  FetchFunction,
} from "relay-runtime";

const fetchFn: FetchFunction = async (request, variables) => {
  if(request.name === 'AppQuery') {
    return Promise.resolve({
      data: {
        me: {
          id: "1",
          name: "Tobias",
          best_friend: {
            id: "2",
            name: "Piotr"
          }
        }
      }
    })
  }
  else if(request.name === 'AppAssignableQuery') {
    return Promise.resolve({data: {
      me:{name: "Tobias"},
      otherUser: {name: "Piotr"}
    }})
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
