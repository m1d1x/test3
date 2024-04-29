import cl from './GameButton.module.scss'
import { GameButtonFrame } from './@GameButtonFrame'
import React from 'react'
export const GameButton = ({
  text,
  SvgComponent,
  onCLick,
}: {
  text: string
  SvgComponent: React.ComponentType<React.SVGProps<SVGSVGElement>>
  onCLick?: () => void
}) => (
  <>
    <button className={cl.root} onClick={onCLick}>
      <GameButtonFrame />
      <div className={cl.root__link}>
        <div className={cl.root__link_text}>{text}</div>
        <div className={cl.root__link_icon}>
          <SvgComponent />
        </div>
      </div>
    </button>
  </>
)
