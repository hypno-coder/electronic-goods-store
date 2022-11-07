import {TagProps} from "./Tag.props";
import cn from 'classnames';
import styles from './Tag.module.css';

export const Tag = ({children, size='m', color='grey', href, ...props}: TagProps): JSX.Element => {
	return (
      <div
          className={cn(styles.tag,{
            [styles.s]: size == 's',
            [styles.m]: size == 'm',
            [styles.grey]: color == 'grey',
            [styles.green]: color == 'green',
            [styles.ghost]: color == 'ghost',
            [styles.red]: color == 'red',
            [styles.primary]: color == 'primary',
          })}
          {...props}
      >
        {
          href ? <a href={href}>{children}</a> : <>{children}</>
        }
      </div>
	);
};