import Icon from '@components/Icon';
import styles from './BusinessItem.module.scss';

function BusinessItem({ data }) {
  const { name, photos, phone, location, rating, review_count } = data;

  const starts = Number(rating) || 1;
  const hasHalf = starts % 1 !== 0;
  const startsCount = hasHalf ? Math.ceil(starts) - 1 : starts

  return (
    <div className={styles.businessItem}>
      <div
        className={styles.image}
        style={{
          backgroundImage: `url(${photos})`
        }}
      />
      <div className="flex flex-1 items-center justify-between pr-4">
        <div className={styles.info}>
          <span className={styles.name}>{name}</span>
          <span className={styles.location}>
            {location?.address1}{' - '}
            {location?.city}
          </span>
          <span className={styles.phone}>
            <Icon name="phone" />
            {phone}
          </span>
        </div>
        <div className="flex flex-col items-end">
          <div className={styles.rating}>
            {Array.from({ length: startsCount }).map((_e, index) => (
              <Icon name="star" key={`star-${index}`} />
            ))}
            {hasHalf && (
              <Icon name="star-half" />
            )}
            {' '}({rating})
          </div>
          <span className={styles.reviews}>
            Based on {review_count} reviews
          </span>
        </div>
      </div>
    </div>
  )
}

export default BusinessItem
