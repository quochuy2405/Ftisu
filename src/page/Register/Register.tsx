/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import Styles from '@/styles/page/Register.module.scss'
import Facebook from '/icon/icfacebook.svg'
import Google from '/icon/icgoogle.svg'
import { Icon } from '@/components/HPComponents'
function Register() {
  const [validate, setValidate] = useState({
    lastName: false,
    firstName: false,
    email: false,
    password: false
  })
  const [dataForm, setDataForm] = useState({
    lastName: '',
    firstName: '',
    email: '',
    password: ''
  })
  const handelOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value })
    setValidate({ ...validate, [e.target.name]: !e.target.value })
  }
  return (
    <div className={Styles.register}>
      <div className={Styles.registerForm}>
        <div className={Styles.title}>
          <p>Tạo tài khoản</p>
        </div>
        <div className={Styles.inputGroup}>
          <div className={Styles.name}>
            <div className={Styles.lastName}>
              <fieldset className={Styles.inputField}>
                <legend>Họ và tên đệm</legend>
                <input type="text" name="lastName" onChange={(e) => handelOnChange(e)} />
              </fieldset>
              {validate.lastName && <p className={Styles.invalid}>Hãy nhập họ và tên đệm</p>}
            </div>
            <div className={Styles.firstName}>
              <fieldset className={Styles.inputField}>
                <legend>Tên</legend>
                <input type="text" name="firstName" onChange={(e) => handelOnChange(e)} />
              </fieldset>
              {validate.firstName && <p className={Styles.invalid}>Hãy nhập tên</p>}
            </div>
          </div>
          <div className={Styles.email}>
            <fieldset className={Styles.inputField}>
              <legend>Email</legend>
              <input type="text" name="email" onChange={(e) => handelOnChange(e)} />
            </fieldset>
            {validate.email && <p className={Styles.invalid}>Hãy nhập email</p>}
          </div>
          <div className={Styles.password}>
            <fieldset className={Styles.inputField}>
              <legend>Mật khẩu</legend>
              <input type="text" name="password" onChange={(e) => handelOnChange(e)} />
            </fieldset>
            {validate.password && <p className={Styles.invalid}>Hãy nhập mật khẩu</p>}
          </div>
        </div>
        <div className={Styles.buttonRegister}>Đăng ký</div>
        <p className={Styles.textContent}>Hoặc đăng ký với email sử dụng</p>
        <div className={Styles.registerBySocialMedia}>
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

export default Register
