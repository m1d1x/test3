import { useState } from 'react'
import SvgComponent from '../../../../assets/Icon'
import { HomeButton, SettingsButton, CartButton } from '../../../../features'
import { Input, GameButton, Popup } from '../../../../shared'
import { Showcase } from '../../../../widgets/Showcase'
import { Topbar } from '../../../../widgets/Topbar'
import { Container } from '../../../../shared'
import cl from './ProfilePage.module.scss'

export const ProfilePage = () => {
  const [profile, setProfile] = useState(true)
  const [game, setGame] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const handlePopupOpen = () => {
    setIsOpen(true)
  }

  const handleProfile = () => {
    setGame(false)
    setProfile(true)
  }

  const handleGame = () => {
    setProfile(false)
    setGame(true)
  }
  return (
    <Container isProfile>
      <div className={cl.root}>
        <Topbar
          profile={profile}
          game={game}
          handleProfile={handleProfile}
          handleGame={handleGame}
        />

        <div className={cl.root__content}>
          <HomeButton />

          <SettingsButton />
          <Popup setIsOpen={setIsOpen} isOpen={isOpen}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            provident eum, porro pariatur ad qui vero exercitationem delectus
            obcaecati dolores eos praesentium! Exercitationem doloribus ad
            veniam numquam! A, animi aliquam?
          </Popup>
          <CartButton />

          <Input />

          <div className={cl.root__content__buttons} onClick={handlePopupOpen}>
            <GameButton text={'привязать'} SvgComponent={SvgComponent} />
            <GameButton text={'привязать'} SvgComponent={SvgComponent} />
            <GameButton text={'привязать'} SvgComponent={SvgComponent} />
            <GameButton text={'привязать'} SvgComponent={SvgComponent} />
          </div>

          <Showcase />
        </div>
      </div>
    </Container>
  )
}
