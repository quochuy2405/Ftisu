/* eslint-disable @next/next/no-img-element */
import Styles from '@/components/Header/Menu/ResourceMenu/ResourceMenu.module.scss'
import { Link } from 'react-router-dom'
import { FiDatabase, FiFileText, FiCheckCircle } from 'react-icons/fi'
import { BsCodeSlash } from 'react-icons/bs'
import { FaArrowRight } from 'react-icons/fa'

const options = [
  {
    name: 'Tài liệu học thuật',
    icon: <FiDatabase />,
    link: ''
  },
  {
    name: 'Tài liệu nghiên cứu',
    icon: <FiFileText />,
    link: ''
  },
  {
    name: 'Source code',
    icon: <BsCodeSlash />,
    link: ''
  },
  {
    name: 'Bài báo khoa học',
    icon: <FiCheckCircle />,
    link: ''
  }
]

function ResourceMenu() {
  return (
    <div className={Styles.resourceMenu}>
      <div className={Styles.resource}>
        <div className={Styles.resourceTitle}>
          <h1>Tài liệu nghiên cứu</h1>
        </div>

        <div className={Styles.resourceDescription}>
          <p>Những tài liệu nghiên cứu tài liệu học thuật source code, bài báo khóa học,...</p>
        </div>
      </div>
      <div className={Styles.options}>
        {options?.map((item) => (
          <Link key={item?.name} to={item?.link || '#'}>
            <div className={Styles.option}>
              <div className={Styles.optIcon}>{item?.icon}</div>
              <div className={Styles.optName}>
                <p>{item.name}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className={Styles.outstandings}>
        <div className={Styles.outstanding}>
          <div className={Styles.outsTitle}>
            <p>Nội dung nổi bật</p>
          </div>
          <div className={Styles.outsImg}>
            <img
              src="https://www.similarweb.com/scripts/lite-app/4488317b3668a84c55b6.png"
              alt="outstanding"
            />
          </div>
          <div className={Styles.outsDescription}>
            <p>
              Bài báo khoa học của nhóm Ftisu đã được công bố tại UIT hehe =)) Bài báo khoa học của
              nhóm Ftisu đã được công bố tại UIT hehe =))
            </p>
          </div>
          <div className={Styles.outsGetStarted}>
            <p>Bắt đầu</p>
            <FaArrowRight />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResourceMenu
