import { useEffect, useState, KeyboardEvent } from 'react';
import { RatingProps } from './Rating.props';
import StarIcon from './star.svg';
import styles from './Rating.module.css';
import cn from 'classnames';
import {identifier} from "@babel/types";

export const Rating = ({isEditable = false, rating, setRating, ...props}: RatingProps): JSX.Element => {
	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

	useEffect(() => {
		constructRating(rating);
	}, [rating]);

	function constructRating(currentRating: number): void {
		const updatedArray = ratingArray.map((elem: JSX.Element, idx: number): JSX.Element => {
			return (
					<span
						key={idx}
						className={cn(styles.star, {
							[styles.filled]: idx < currentRating,
							[styles.isEditable]: isEditable,
						})}
						onMouseEnter={(): void => changeDisplay(idx + 1)}
						onMouseLeave={(): void => changeDisplay(rating)}
						onClick={(): void => ratingHandler(idx + 1)}
						>
						<StarIcon
								tabIndex={isEditable ? 0 : -1}
								onKeyDown={(e: KeyboardEvent<SVGAElement>): boolean | void => isEditable && handleSpace(idx + 1, e)}
						/>

					</span>
			);
		});
		setRatingArray(updatedArray);
	}
	const changeDisplay = (idx: number): void => {
		isEditable && constructRating(idx);
	};
	const ratingHandler = (idx: number): void => {
		isEditable && setRating && setRating(idx);
	};
	const handleSpace = (idx: number, e: KeyboardEvent<SVGAElement>): void => {
		e.code === 'Space' && setRating && setRating(idx);
	};

	return (
			<div
					{...props}
			>
				{ratingArray.map((elem: JSX.Element, idx: number) => <span key={idx}>{elem}</span>)}
			</div>
	);
};
