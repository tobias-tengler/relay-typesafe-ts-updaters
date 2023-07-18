import { Suspense } from 'react'
import './App.css'
import { useLazyLoadQuery,graphql, useRelayEnvironment, commitLocalUpdate } from 'react-relay'
import { AppQuery } from './__generated__/AppQuery.graphql'
import { AppUpdatableQuery } from './__generated__/AppUpdatableQuery.graphql'
import { AppAssignableQuery } from './__generated__/AppAssignableQuery.graphql'
import {AppUpdatableAssignQuery} from './__generated__/AppUpdatableAssignQuery.graphql'
import { validate } from './__generated__/AppAssignableUser.graphql'

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



function Assignable() {
  const queryData = useLazyLoadQuery<AppAssignableQuery>(graphql`query AppAssignableQuery {
    me {
      name
      best_friend {
        name
      }
    }
    otherUser {
      name
      ...testAssignableUser
    }
  }`, {})

  const environment = useRelayEnvironment();

  const handleAssignFriend = () => {
    commitLocalUpdate(environment, store => {
      const {updatableData} = store.readUpdatableQuery<AppUpdatableAssignQuery>(graphql`query AppUpdatableAssignQuery @updatable {
        me {
          best_friend {
           ...testAssignableUser
          }
        }
      }`, {})

      if(updatableData.me != null) {
        const validUser = validate(queryData.otherUser)

        if(validUser) {
          updatableData.me.best_friend = validUser;
        }
      }
    })
  }

  return <div>
    <div>My friend's name: {queryData.me.best_friend?.name ?? "Unknown"}</div>

    <button onClick={handleAssignFriend}>Assign friend</button>
  </div>
}
