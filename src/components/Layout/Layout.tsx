import Head from 'next/head';
import cx from 'classnames';
import Header from '@components/Header';
import styles from './Layout.module.scss';

type LayoutProps = {
  className?: string;
  children: React.ReactNode;
};

function Layout({ children, className }: LayoutProps) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={cx(styles.main, className)}>
        {children}
      </main>
    </div>
  )
}

export default Layout
