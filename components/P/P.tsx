import {PProps} from "./P.props";
import cn from "classnames";
import styles from './P.module.css';

export const P = ({children, size='m', ...props}: PProps): JSX.Element => {
	return <p className={cn({
		[styles.s]: size == "s",
		[styles.m]: size == "m",
		[styles.l]: size == "l",
	})} {...props}
	>{children}</p>;

};
