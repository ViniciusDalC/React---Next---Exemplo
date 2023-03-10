import style from './Titulo.module.css'

function Titulo (props) {
  return (
      <h1 className={style.titulo}>{props.children}</h1>
  )
}

export default Titulo