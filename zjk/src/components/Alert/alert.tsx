import React, {useState} from 'react'
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
  description ?: string,
  canClose ?: boolean,
  show? : boolean,
  onClose? :() => void;
}

export type AlertProps = BaseAlertProps & React.HtmlHTMLAttributes<HTMLElement>

const Alert: React.FC<AlertProps> = (props) => {
  const {
    className,
    alertType,
    message,
    description,
    canClose,
    show,
    onClose,
    ...restProps
  } = props
  const classes = classNames('alert', className, {
    [`alert-${alertType}`]: alertType
  })
  const [curshow, setCurshow] = useState(show) 
  const closeAlert = () => {
    if (onClose) {
      onClose()
    }
    setCurshow(false)
  }
  return (
    curshow ?
    <div className={classes} {...restProps}>
      {
        canClose  && <div className='close' onClick={closeAlert}>关闭</div>
      }
      
      <div className='message'>{message}</div>
      <div className='description'>{description}</div>
    </div>: <></>
  )
}
Alert.defaultProps = {
  alertType: AlertType.defalut,
  canClose: true,
  show: true
}
export default Alert