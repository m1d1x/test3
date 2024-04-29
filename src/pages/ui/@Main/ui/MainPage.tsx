import { useState } from 'react'
import { Container, Popup } from '../../../../shared'
import { Header } from '../../../../widgets/Header'
import { Product } from '../../../../widgets/Product'
import cl from './MainPage.module.scss'

export const MainPage = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handlePopupOpen = () => {
    setIsOpen(true)
  }

  return (
    <Container isMain>
      <Popup setIsOpen={setIsOpen} isOpen={isOpen}>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor hic
          libero totam earum quasi optio perspiciatis minus officiis tenetur vel
          enim sint, mollitia soluta, consectetur, molestias cupiditate
          reiciendis dolorem accusamus?
        </span>
      </Popup>
      <div className={cl.root}>
        <Header title="NIGHTMESS" />
        <div className={cl.root__products}>
          <div className={cl.root__products__items}>
            <Product name="BLACK T-SHIRT" Icon="/PRODUCT1.png" />
            <Product name="BLACK T-SHIRT" Icon="/PRODUCT1.png" />
            <Product name="BLACK T-SHIRT" Icon="/PRODUCT1.png" />
            <Product name="BLACK T-SHIRT" Icon="/PRODUCT1.png" />
            <Product name="BLACK T-SHIRT" Icon="/PRODUCT1.png" />
            <Product name="BLACK T-SHIRT" Icon="/PRODUCT1.png" />
          </div>
        </div>
        <div className={cl.root__footer}>
          <button onClick={handlePopupOpen} className={cl.root__footer_btn}>
            <span className={cl.root__footer_btn_link}>INFO</span>
          </button>
        </div>
      </div>
    </Container>
  )
}
