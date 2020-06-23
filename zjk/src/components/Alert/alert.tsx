import React from 'react'
import classNames from 'classnames'
export enum AlertType {
  success = 'success',
  defalut = 'defalut',
  danger = 'danger',
  warning = 'warning'
}

interface BaseAlertProps {
  className ?: string,
  alertType ?: AlertType,
  message ?: string,
  description ?: string
}

const Alert: React.FC<BaseAlertProps> = (props) => {
  const {
    className,
    alertType,
    message,
    description
  } = props
  const classes = classNames('alert', className, {
    [`alert-${alertType}`]: alertType
  })
  return (
    <div className={classes}>
      <div className='close'>关闭</div>
      <div className='message'>{message}</div>
      <div className='description'>{description}</div>
    </div>
  )
}
Alert.defaultProps = {
  alertType: AlertType.defalut
}
export default Alert