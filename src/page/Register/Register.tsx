/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import Styles from '@/styles/page/Register.module.scss'
import Facebook from '/icon/icfacebook.svg'
import Google from '/icon/icgoogle.svg'
import { Icon, Input } from '@/components/HPComponents'
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
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
              <Input
                value={dataForm.lastName}
                type={'text'}
                name={'lastName'}
                handelChange={handleOnChange}
                title="Họ và tên đệm"
                invalid={validate.lastName}
                textInvalid="Hãy nhập họ và tên đệm"
              />
            </div>
            <div className={Styles.firstName}>
              <Input
                value={dataForm.firstName}
                type={'text'}
                name={'firstName'}
                handelChange={handleOnChange}
                title="Tên"
                invalid={validate.firstName}
                textInvalid="Hãy nhập tên"
              />
            </div>
          </div>
          <div className={Styles.email}>
            <Input
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
            <Input
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
