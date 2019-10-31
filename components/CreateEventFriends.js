import React, { useState } from 'react';
import { Text, StyleSheet } from 'react-native';
import { ListItem, Icon, Button } from 'react-native-elements';
import InviteFriends from './InviteFriends';
import EmptyList from './EmptyList';
import useList from '../hooks/useList';

export default function CreateEventFriends({ changeFriendSlot }) {
  const { list: friendInviteList, onSelectFriend: onSelect } = useList(friendsArray);

  const filterSelectedFriends = () => {
    return friendInviteList.filter((friend) => friend['invited'])
  };
  const eventFriendList = filterSelectedFriends();

  const getEventFriendList = (eventFriendListID) => {
    changeFriendSlot(eventFriendListID)
  };

  const deleteEventFriend = (friendID) => {
    const friendList = onSelect(friendID)
      .filter(friend => friend['invited'])
      .map(friend => friend['friend_id']);

    changeFriendSlot(friendList)
  }

  return (
    <>
      <InviteFriends
        getEventFriendList={getEventFriendList}
        friendInviteList={friendInviteList}
        onSelect={onSelect}
      />
      {
        eventFriendList.length === 0 ?
        <EmptyList title={'Click to Invite Friends to Event'}/>
        :
        eventFriendList.map((friend, index) => (
          <ListItem
            key={index}
            leftAvatar={{ source: { uri: friend['friend_avatar'] } }}
            title={friend['friend_name']}
            bottomDivider
            rightElement={
              <Button
                icon={
                  <Icon
                    name='account-remove'
                    type='material-community'
                    color='white'
                  />
                }
                buttonStyle={styles.deleteButton}
                onPress={() => deleteEventFriend(friend['friend_id'])}
              />
            }
          />
        ))
      }
    </>
  );
}

const styles = StyleSheet.create({
  SectionHeader: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'grey'
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 10,
    marginRight: 5
  }
})


const friendsArray = [
  {
    "friend_id": 1,
    "friend_name": "Max Wong",
    "friend_avatar": "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=921623601546635&height=350&width=350&ext=1574626882&hash=AeSZ-ILZTTrn2hrH",
    "invited": false
  },
  {
    "friend_id": 2,
    "friend_name": "Zongxi Li",
    "friend_avatar": "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2184479695188878&height=350&width=350&ext=1574626952&hash=AeS_rrrvqq3FXxd6",
    "invited": false
  },
  {
    "friend_id": 4,
    "friend_name": "Jaleel Will",
    "friend_avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/abelcabans/128.jpg",
    "invited": false
  },
  {
    "friend_id": 5,
    "friend_name": "Allen Olson",
    "friend_avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/BenouarradeM/128.jpg",
    "invited": false
  },
  {
    "friend_id": 6,
    "friend_name": "Mr. Clay Nolan",
    "friend_avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/josemarques/128.jpg",
    "invited": false
  },
  {
    "friend_id": 7,
    "friend_name": "Anibal Maggio",
    "friend_avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/vivekprvr/128.jpg",
    "invited": false
  },
  {
    "friend_id": 8,
    "friend_name": "Hermann Baumbach",
    "friend_avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/danro/128.jpg",
    "invited": false
  },
  {
    "friend_id": 9,
    "friend_name": "Alvena Bins",
    "friend_avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/karsh/128.jpg",
    "invited": false
  },
  {
    "friend_id": 10,
    "friend_name": "Angela Mitchell",
    "friend_avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/plasticine/128.jpg",
    "invited": false
  },
  {
    "friend_id": 11,
    "friend_name": "Khalid Pagac",
    "friend_avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/michaelkoper/128.jpg",
    "invited": false
  },
  {
    "friend_id": 12,
    "friend_name": "Ellis Kozey",
    "friend_avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/iamgarth/128.jpg",
    "invited": false
  },
  {
    "friend_id": 13,
    "friend_name": "Newton Ziemann",
    "friend_avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/logorado/128.jpg",
    "invited": false
  },
  {
    "friend_id": 14,
    "friend_name": "Jaida Goyette",
    "friend_avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/orkuncaylar/128.jpg",
    "invited": false
  },
  {
    "friend_id": 15,
    "friend_name": "Reilly Klein",
    "friend_avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/stefanotirloni/128.jpg",
    "invited": false
  },
  {
    "friend_id": 16,
    "friend_name": "Orin Littel",
    "friend_avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/weglov/128.jpg",
    "invited": false
  },
  {
    "friend_id": 17,
    "friend_name": "Dakota Ullrich",
    "friend_avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/randomlies/128.jpg",
    "invited": false
  },
  {
    "friend_id": 18,
    "friend_name": "Bryce Wintheiser",
    "friend_avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/byrnecore/128.jpg",
    "invited": false
  },
  {
    "friend_id": 19,
    "friend_name": "Sister Harber",
    "friend_avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/oskamaya/128.jpg",
    "invited": false
  },
  {
    "friend_id": 20,
    "friend_name": "Bill Langosh",
    "friend_avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/bungiwan/128.jpg",
    "invited": false
  },
  {
    "friend_id": 21,
    "friend_name": "Dangelo Jacobson",
    "friend_avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/arthurholcombe1/128.jpg",
    "invited": false
  },
  {
    "friend_id": 22,
    "friend_name": "Trenton Doyle",
    "friend_avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/hermanobrother/128.jpg",
    "invited": false
  },
  {
    "friend_id": 23,
    "friend_name": "Dr. Hilton Waelchi",
    "friend_avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/dnirmal/128.jpg",
    "invited": false
  },
  {
    "friend_id": 24,
    "friend_name": "Verona Fisher",
    "friend_avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/yassiryahya/128.jpg",
    "invited": false
  },
  {
    "friend_id": 25,
    "friend_name": "Darius Maggio",
    "friend_avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/cboller1/128.jpg",
    "invited": false
  },
  {
    "friend_id": 26,
    "friend_name": "Miss Casimer Blick",
    "friend_avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/HenryHoffman/128.jpg",
    "invited": false
  },
  {
    "friend_id": 27,
    "friend_name": "Erika Bode",
    "friend_avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/salimianoff/128.jpg",
    "invited": false
  },
  {
    "friend_id": 28,
    "friend_name": "Brisa Cruickshank Sr.",
    "friend_avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/ManikRathee/128.jpg",
    "invited": false
  },
  {
    "friend_id": 29,
    "friend_name": "Jasper Purdy I",
    "friend_avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/ntfblog/128.jpg",
    "invited": false
  },
  {
    "friend_id": 30,
    "friend_name": "Mason Kohler",
    "friend_avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/poormini/128.jpg",
    "invited": false
  }
]