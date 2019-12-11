import { useState, useEffect } from 'react'
import { Accuracy, requestPermissionsAsync, watchPositionAsync } from 'expo-location'

export default (shouldTrack, callback) => {

  const [error, setError] = useState(null)
  const [subscriber, setSubscriber] = useState(null)

  const startWatching = async () => {
    try {
      await requestPermissionsAsync()
      const sub = await watchPositionAsync({
        accuracy: Accuracy.BestForNavigation,
        timeInterval: 1000,
        distanceInterval: 10,
      }, callback
      )
      setSubscriber(sub)
    } catch (err) {
      setError(err)
    }
  }

  useEffect(() => {
    if (shouldTrack) {
      startWatching()
    } else {
      subscriber.remove()
      setSubscriber(null)
    }
  }, [shouldTrack])

  return [error]
}