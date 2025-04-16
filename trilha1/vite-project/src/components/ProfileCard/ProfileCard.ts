import styles from './ProfileCard.module.css'

type ProfileCardProps = {
  image: string
  name: string
  description: string
}

export function ProfileCard({ image, name, description }: ProfileCardProps) {
  return (
    <div className={styles.card}>
      <img src={image} alt={name} className={styles.image} />
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  )
}