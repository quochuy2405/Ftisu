/* eslint-disable @next/next/no-img-element */
import Facebook from '@/assets/icon/icfacebook.svg'
import Google from '@/assets/icon/icgoogle.svg'
import { Icon } from '@/components/HPComponents'
import { InputAbove, InputInLine } from '@/components/HPComponents/Input'
import Styles from '@/styles/page/Login.module.scss'
import React, { useState } from 'react'

function Login(): JSX.Element {
  const [validate, setValidate] = useState({
    email: false,
    password: false
  })

  const [dataForm, setDataForm] = useState({
    email: '',
    password: ''
  })

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value })
    setValidate({ ...validate, [e.target.name]: !e.target.value })
  }

  return (
    <div className={Styles.login}>
      <div className={Styles.loginForm}>
        <div className={Styles.title}>
          <p>Tạo tài khoản</p>
        </div>
        <div className={Styles.inputGroup}>
          <div className={Styles.email}>
            <InputAbove
              value={dataForm.email}
              type={'text'}
              name={'email'}
              handelChange={handleOnChange}
              title="Email"
              invalid={validate.email}
              textInvalid="Hãy nhập Email"
            />
          </div>
          <div className={Styles.password}>
            <InputAbove
              value={dataForm.password}
              type={'password'}
              name={'password'}
              handelChange={handleOnChange}
              title="Mật khẩu"
              invalid={validate.password}
              textInvalid="Hãy nhập mật khẩu"
            />
          </div>
        </div>
        <div className={Styles.buttonlogin}>Đăng nhập</div>
        <p className={Styles.textContent}>Hoặc đăng nhập với email sử dụng</p>
        <div className={Styles.loginBySocialMedia}>
          <div className={Styles.facebook}>
            <Icon image={Facebook} size={35} />
            <p>Đăng nhập với Facebook</p>
          </div>
          <div className={Styles.google}>
            <Icon image={Google} size={35} />
            <p>Đăng nhập với Google</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
