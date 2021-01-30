import cx from 'classnames';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

function Container({ children, className }: ContainerProps) {
  return (
    <div className={cx('container mx-auto px-4', className)}>{children}</div>
  )
}

export default Container
