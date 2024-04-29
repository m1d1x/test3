import { Container } from '../../../../shared'
import { Swiper } from '../../../../widgets/Swiper'
import cl from './GamePage.module.scss'

export const GamePage = () => {
  return (
    <Container isProfile>
      <div className={cl.root}>
        <Swiper />
      </div>
    </Container>
  )
}
