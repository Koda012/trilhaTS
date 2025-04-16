import './button.css'

type ButtonProps = {
  label: string
  onClick: () => void
}

export function Button({ label, onClick }: ButtonProps) {
  return (
    <button className="styled-button" onClick={onClick}>
      {label}
    </button>
  )
}