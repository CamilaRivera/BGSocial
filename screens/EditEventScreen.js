import React, { useState } from 'react';
import { ScrollView, StyleSheet, View, ActivityIndicator } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import MapView, { Marker } from 'react-native-maps';
import EventDates from '../components/CreateEventDate';
import EventGames from '../components/CreateEventGames';
import EventFriends from '../components/CreateEventFriends';
import EventTitle from '../components/CreateEventTitle';
import { useNavigationParam } from 'react-navigation-hooks';
import useTimeSlot from '../hooks/useTimeSlot';
import useGameSlot from '../hooks/useGameSlot';
import useFriendSlot from '../hooks/useFriendSlot';
import { id } from '../utils/makeNewID';
import useLocation from '../hooks/useLocation';
import { getUserInfo } from '../hooks/sessionContext';
import { api } from '../api';

export default function EditEventScreen() {
  const event = useNavigationParam('event');
  const userGames = useNavigationParam('userGames');
  const userFriends = useNavigationParam('userFriends');
  const refreshEventScreen = useNavigationParam('refreshEventScreen')
  const { id: eventID, title, spots, is_open, event_dates, event_attendants, event_games } = event;
  const { location: presetLocation } = event_dates[0];
  const [eventTitle, setEventTitle] = useState(title);
  const { userData } = getUserInfo();

  const timeArray = event_dates.map((date) => {
    return {
      id: id(),
      date: date.date
    }
  });

  //states
  const { gameSlots, changeGameSlot } = useGameSlot(event_games);
  const { friendSlots, changeFriendSlot } = useFriendSlot(event_attendants);
  const { timeSlots, addTimeSlot, changeTimeSlot, deleteTimeSlot } = useTimeSlot(timeArray);
  const { location, latitude, longitude, setLatitude, setLongitude } = useLocation(presetLocation);

  const editEventAction = () => {

    const eventDates = timeSlots.map(time => {
      return {
        
      }
    })

    // const editEvent = {
    //   id: eventID,
    //   title: title,
    //   spots: spots,
    //   is_open,
    //   "owner_id": userData.id,
    //   eventDates: event_dates,
    //   eventAttendants: event_attendants,
    //   eventGames: event_games
    // }

    // console.log(editEvent);

    // api.post(`/events/${id}`, editEvent).then((res) => {
    //   refreshEventScreen();
    //   navigate('Events');
    // })
  }
  return (
    <>
      <View style={styles.mapContainer}>
        {
          latitude && longitude ?
            <>
              <MapView
                style={styles.map}
                initialRegion={{
                  latitude: latitude,
                  longitude: longitude,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}
                onPress={({ nativeEvent }) => {
                  setLatitude(nativeEvent.coordinate.latitude);
                  setLongitude(nativeEvent.coordinate.longitude);
                }}
                children={
                  <Marker draggable coordinate={{ latitude, longitude }} />
                }
              />
              <EventTitle
                onChangeText={setEventTitle}
                value={eventTitle}
              />
            </>
            :
            <ActivityIndicator size='large' color="#0000ff" />
        }

      </View>
      <ScrollView>
        <EventDates
          timeSlots={timeSlots}
          addTimeSlot={addTimeSlot}
          changeTimeSlot={changeTimeSlot}
          deleteTimeSlot={deleteTimeSlot}
          buttonText={'Edit Date'}
        />
        <EventGames
          userGames={userGames}
          changeGameSlot={changeGameSlot}
          eventGameList={event_games.map(game => {
            return {
              ...game['game'],
              selected: true
            }
          })}
          buttonText={'Edit Games'}
        />
        <EventFriends
          userFriends={userFriends}
          changeFriendSlot={changeFriendSlot}
          eventFriendList={event_attendants.map(friend => {
            return {
              ...friend,
              invited: true
            }
          })}
          buttonText={'Edit Attendance'}
        />
      </ScrollView>
      <Button
        title='Edit Event!'
        icon={
          <Icon
            name='check-circle'
            type='font-awesome'
            color='white'
          />
        }
        onPress={editEventAction}
      />
    </>
  )
}

const styles = StyleSheet.create({
  mapContainer: {
    // ...StyleSheet.absoluteFillObject,
    height: 150,
    width: 400,
    justifyContent: 'center',
    alignItems: 'center',

  },
  map: {
    ...StyleSheet.absoluteFillObject,
  }
});