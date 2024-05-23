import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './popularjobcard.style'

const PopularJobCard = () => {
  return (
    <TouchableOpacity
      style={styles.container(selectedjob, item)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={styles.logContainer(selectedjob, item)}>
        <Image 
          
        />
      </TouchableOpacity>
    </TouchableOpacity>
  )
}

export default PopularJobCard