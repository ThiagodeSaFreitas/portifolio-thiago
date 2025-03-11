import { Link } from 'react-router-dom'
import './Hero.css'
import Button from '../Button/Button'

function Hero () {
    return (
      <div className='hero d-flex al-center'>
            <div className='hero-text'>
                <h1>Olá!!! Sou Thiago</h1>
                <p>Atuo há quase 20 anos na área da saúde, com experiência em docência, vendas, marketing e atendimento ao público. Estou em transição de carreira e trabalho como desenvolvedor freelancer. Atualmente, estou no último semestre de Análise e Desenvolvimento de Sistemas e em formação como Desenvolvedor Web Full Stack pela DNC. Também sou Técnico em Desenvolvimento de Sistemas pelo SENAC. Tenho experiência em JAVA, JavaScript, React, Node.js, SQL, MySQL e Git, além de aplicar metodologias ágeis como Scrum. Sou resiliente e apaixonado por aprendizado, buscando unir minha experiência em atendimento e solução de problemas à tecnologia.</p>
                <Link>
                <Button>Saiba mais</Button>
                </Link>
                
            </div>

      </div>

    )
}

export default Hero