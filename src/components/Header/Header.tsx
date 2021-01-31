import Container from '@components/Container';
import Icon from '@components/Icon';
import SearchBox from '@components/SearchBox';
import styles from './Header.module.scss';

function Header () {
  return (
    <header className={styles.header}>
      <Container className={styles.headerContainer}>
        <div className={styles.logo}>
          <Icon name="food" />
          Business
        </div>
        <SearchBox />
      </Container>
    </header>
  )
}

export default Header
