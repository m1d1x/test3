import cl from './Product.module.scss'

export const Product = ({ name, Icon }: { name: string; Icon: string }) => {
  return (
    <div className={cl.root}>
      <img className={cl.root__icon} src={Icon} />
      <div className={cl.root__name}>{name}</div>
    </div>
  )
}
