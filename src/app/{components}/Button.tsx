import React from 'react'

interface IButtonProps {
  label: string, 
  clickHandler?: () => void;
}

const Button = ({label, clickHandler}: IButtonProps) => {
  return (
    <button className={`rounded-lg bg-btnFill py-3 px-6 text-secondary font-medium`} onClick={clickHandler}>{label}</button>
  )
}

export default Button