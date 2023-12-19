import { Suspense } from 'react'
import './App.css'
import { useLazyLoadQuery,graphql, useRelayEnvironment, commitLocalUpdate } from 'react-relay'
import { AppQuery } from './__generated__/AppQuery.graphql'
import { AppUpdatableQuery } from './__generated__/AppUpdatableQuery.graphql'
import { AppAssignableQuery } from './__generated__/AppAssignableQuery.graphql'
import { validate as validateUser } from './__generated__/AppAssignableUser.graphql'
import { validate as validateItem } from './__generated__/AppAssignableItem.graphql'
import { AppUpdatableAssignFriendQuery } from './__generated__/AppUpdatableAssignFriendQuery.graphql'
import { AppUpdatableAssignItemQuery } from './__generated__/AppUpdatableAssignItemQuery.graphql'

export default function App() {
  return <Suspense fallback={<div>Loading...</div>}>
    <UpdatableQuery />
    <Assignable />
  </Suspense>
}


function UpdatableQuery() {
  const queryData = useLazyLoadQuery<AppQuery>(graphql`query AppQuery {
    me {
      id
      name
    }
  }`, {})

  const environment = useRelayEnvironment();

  const handleUpdateMyName = () => {
    commitLocalUpdate(environment, store => {
      const {updatableData} = store.readUpdatableQuery<AppUpdatableQuery>(graphql`query AppUpdatableQuery @updatable {
        me {
          name
        }
      }`, {})

      updatableData.me.name = "Tobias Tengler"
    })
  }

  return <div>
    <div>My name (from query): {queryData.me.name}</div>

    <button onClick={handleUpdateMyName}>Update my name</button>
  </div>
}

graphql`fragment AppAssignableUser on User @assignable {
  __typename
}`

graphql`fragment AppAssignableItem on Item @assignable {
  __typename
}`

function Assignable() {
  const queryData = useLazyLoadQuery<AppAssignableQuery>(graphql`query AppAssignableQuery {
    me {
      name
      best_friend {
        name
      }
      myItem {
        name
      }
    }
    otherUser {
      name
      ...AppAssignableUser
    }
    item {
      name
      ...AppAssignableItem
      ... on MyItem {
        giftedBy {
          name
        }
      }
      ... on FriendsItem {
        boughtAt
      }
    }
  }`, {})

  const environment = useRelayEnvironment();

  const handleAssignFriend = () => {
    commitLocalUpdate(environment, store => {
      const {updatableData} = store.readUpdatableQuery<AppUpdatableAssignFriendQuery>(graphql`query AppUpdatableAssignFriendQuery @updatable {
        me {
          best_friend {
           ...AppAssignableUser
          }
        }
      }`, {})

      if(updatableData.me != null) {
        const validUser = validateUser(queryData.otherUser)

        if(validUser) {
          updatableData.me.best_friend = validUser;
        }
      }
    })
  }

  const handleAssignItem = () => {
    commitLocalUpdate(environment, store => {
      const {updatableData} = store.readUpdatableQuery<AppUpdatableAssignItemQuery>(graphql`query AppUpdatableAssignItemQuery @updatable {
        me {
          myItem {
           ...AppAssignableItem
          }
        }
      }`, {})

      if(updatableData.me != null && queryData.item != null) {
        const validItem = validateItem(queryData.item)

        console.log({updatableData, validItem, newItem: queryData.item})

        if(validItem) {
          updatableData.me.myItem = validItem;
        }
      }
    })
  }

  return <div>
    <div>My friend's name: {queryData.me.best_friend?.name ?? "Unknown"}</div>
    <div>My Item's name: {queryData.me.myItem?.name ?? "Unknown"}</div>

    <button onClick={handleAssignFriend}>Assign friend</button>
    <button onClick={handleAssignItem}>Assign item</button>
  </div>
}
