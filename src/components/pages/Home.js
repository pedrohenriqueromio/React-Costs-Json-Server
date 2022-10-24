import styles from './Home.module.css'
import cartoonVector from '../../img/cartoon-vector.jpg'

import LinkButton from '../layout/LinkButton'

function Home() {
  return (
    <section className={styles.home_container}>
      <h1>
        Bem-vindo ao Gerenciador de Custos
      </h1>
      <p>Comece a gerenciar os seus projetos agora mesmo!</p>
      <LinkButton to="/newproject" text="Criar projeto" />
      <img src={cartoonVector} alt="cartoonVector" />
    </section>
  )
}

export default Home
