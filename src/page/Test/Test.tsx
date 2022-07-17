import { Dialog } from '@/components/HPComponents'
import Styles from '@/page/Test/Test.module.scss'
import { setUser } from '@/redux/features/UserSlice'
import { useAppSelector } from '@/redux/Store'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

function Test(): JSX.Element {
  const user = useAppSelector((state) => state.userState.user)
  const dispath = useDispatch()

  const setUserAccount = () => {
    const user = {
      usename: 'juu',
      password: 'aasas'
    }
    dispath(setUser(user))
  }
  useEffect(() => {
    console.log(user)
  }, [user])

  return (
    <div className={Styles.testType}>
      <button onClick={() => setUserAccount()}> set user</button>
      {/* <Dialog /> */}
    </div>
  )
}

export default Test
