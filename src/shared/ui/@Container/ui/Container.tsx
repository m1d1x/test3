import React from 'react'
import cl from './Container.module.scss'
import { BG } from '../../../../assets/Bg'

export const Container = ({
  children,
  isProfile,
  isMain,
}: {
  children: React.ReactNode
  isProfile?: boolean
  isMain?: boolean
}) => {
  return (
    <div className={`${cl.root} ${isMain ? cl.root__main : ''}`}>
      {isProfile && <BG />}
      {children}
    </div>
  )
}
