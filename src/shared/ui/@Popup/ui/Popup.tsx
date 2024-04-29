import { CloseButton } from '../../../../features'
import { PopupCover } from './@PopupCover'
import cl from './Popup.module.scss'
import React from 'react'

export const Popup = ({
  setIsOpen,
  isOpen,
  children,
}: {
  setIsOpen: (value: boolean) => void
  isOpen: boolean
  children: React.ReactNode
}) => {
  return (
    <div
      className={`${cl.root}
      ${isOpen ? cl.root__open : ''}
    `}
      onClick={() => setIsOpen(false)}
    >
      <div
        className={`${cl.root__content} ${
          isOpen ? cl.root__content__open : ''
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <PopupCover />
        <div
          className={cl.root__content__closeBtn}
          onClick={() => setIsOpen(false)}
        >
          <CloseButton />
        </div>
        <span className={cl.root__content__title}>POPUP</span>
        <div className={cl.root__content__children}>{children}</div>
      </div>
    </div>
  )
}
