/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Styles from '@/styles/page/Register.module.scss'
import Facebook from '/icon/icfacebook.svg'
import Google from '/icon/icgoogle.svg'
import { Icon } from '@/components/HPComponents'
function Register() {
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
                <input type="text" />
              </fieldset>
            </div>
            <div className={Styles.firstName}>
              <fieldset className={Styles.inputField}>
                <legend>Tên</legend>
                <input type="text" />
              </fieldset>
            </div>
          </div>
          <div className={Styles.email}>
            <fieldset className={Styles.inputField}>
              <legend>Email</legend>
              <input type="text" />
            </fieldset>
          </div>
          <div className={Styles.password}>
            <fieldset className={Styles.inputField}>
              <legend>Mật khẩu</legend>
              <input type="text" />
            </fieldset>
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
