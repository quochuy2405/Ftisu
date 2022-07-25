import React from 'react'
import Styles from '@/components/Header/Menu/ProjectResearchMenu/ProjectResearchMenu.module.scss'

const solutions = [
  {
    id: 'solu1',
    name: 'Ứng dụng công nghệ dự báo'
  },
  {
    id: 'solu2',
    name: 'Smart CV'
  },
  {
    id: 'solu3',
    name: 'Dự án nghiên cứu'
  }
]

function ProjectResearchMenu() {
  return (
    <div className={Styles.projectResearchMenu}>
      <div className={Styles.seeSolution}>
        <div className={Styles.solutions}>
          <p className={Styles.seeSolutionTitle}>See solutions by</p>
          {solutions?.map((item) => (
            <div
              className={`${Styles.solution} ${item.id === 'solu1' && Styles.active}`}
              key={item.name}
            >
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={Styles.listSolution}>
        <div className={Styles.itemSolution}>
          <p className={Styles.itemSolutionTitle}>Digital Research Intelligence</p>
          <ul className={Styles.listContent}>
            <li>
              <p>Benchmarking Market</p>
            </li>
            <li>
              <p>Research Company</p>
            </li>
            <li>
              <p>Research Audience</p>
            </li>
            <li>
              <p>Analysis Consumer</p>
            </li>
            <li>
              <p>Journey App</p>
            </li>
            <li>
              <p>Intelligence</p>
            </li>
          </ul>
        </div>
        <div className={Styles.itemSolution}></div>
        <div className={Styles.itemSolution}></div>
        <div className={Styles.itemSolution}></div>
      </div>
    </div>
  )
}

export default ProjectResearchMenu
