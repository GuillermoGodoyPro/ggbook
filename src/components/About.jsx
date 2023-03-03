import React from 'react'
/* countup */
import CountUp from 'react-countup'
/* Interaction observer hook */
import { useInView } from 'react-intersection-observer'
// motion
import {motion} from 'framer-motion'
// variant 
import { fadeIn } from '../variants'


export const About = () => {
  
  const [ ref, inView] = useInView({
    threshold: 0.5,

  })
  
  return (
    <section className='section mb-80' id='about' ref={ref}>
      <div className="container mx-auto bg-about bg-no-repeat mix-blend-lighten bg-top">
        <motion.div 
          variants={fadeIn('up', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3}}
          className='flex gap-y-10 lg:gap-x-10 lg:gap-y-0 h-screen lg:flex-row lg:items-center'>
          {/* img */}
          {/*   <div className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top blur'>
          </div> */}
          {/* text */}

          <div className='flex-1'>
            <h2 className='h2 text-accent'>About me</h2>
            <h3 className='h3 mb-4'> I'm a Freelance Developer with over 5 years of experience</h3>
            <p className='mb-8'>
              Mi nombre es Guillermo Godoy. Nací en un pueblo llamado Ituzaingó, en la provincia de Corrientes, en el seno de una familia de clase media, con padres sumamente emprendedores. A los 12 años, tuve que mudarme a Buenos Aires y, a los 15, empecé a trabajar en el comercio "El Sol", mientras finalizaba mis estudios secundarios. Después de terminar el colegio en el Instituto San Diego de Avellaneda, conseguí un trabajo en un seguro de salud, el cual sigo hasta el día de hoy, con más de 10 años en el sector administrativo. Al mismo tiempo, después de terminar el colegio, decidí estudiar Ingeniería Ambiental en las Universidades de la Marina Mercante y la Universidad de Tres de Febrero, hasta que se presentó la posibilidad de estudiar en la Escuela Nacional de Náutica para ser Comisario Naval. Esto fue un punto muy importante en mi vida, ya que dicha escuela pertenece a la Armada y tuve que adaptarme a un mundo muy exigente en cuanto a cadena de mando (conducción de grupos), buena presentación y disciplina. Sin embargo, terminé mi carrera pocos meses antes del inicio de la pandemia, lo que hizo que la mayoría de los buques suspendieran actividades y frustraran mis intenciones de navegar. Después de eso, y gracias a mi actitud emprendedora y mis incansables ganas de aprender, decidí seguir mis estudios en sistemas por medio de distintos cursos, hasta que en 2022 encontré la carrera ideal para mí, que es la tecnicatura en Analista en Sistemas. Desde entonces, estoy seguro de que quiero dedicar toda mi vida a esto.
            </p>
            {/* stats */}
            <div className='flex justify-center gap-x-6 lg:gap-x-10 mb-12 ' >
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {
                    inView ?
                    <CountUp start={0} end={5} duration={3}/> :
                    null
                  }
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Years of <br/>
                  Experience
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {
                    inView ?
                    <CountUp start={0} end={50} duration={3}/> :
                    null
                  }
                  +
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Projectes <br/>
                  Completed
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {
                    inView ?
                    <CountUp start={0} end={2} duration={3}/> :
                    null
                  }
                  +
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Years of <br/>
                  React Experience
                </div>
              </div>    

               <div className='flex gap-x-8 justify-center items-center'>
              <button className='btn btn-lg'>Contact me</button>
                <a href="https://github.com/GuillermoGodoyPro" className='text-gradient btn-link'>
                 GitHub
                </a>
              </div>            

            </div>

           

          </div>

        </motion.div>
      </div>
    </section>
  )
}
