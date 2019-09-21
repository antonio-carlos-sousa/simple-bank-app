import React from 'react'
import styles from './index.module.scss'

export default function Loader ({ style }) {

  return (
    <div className={styles.loader} style={style}/>
  )
}