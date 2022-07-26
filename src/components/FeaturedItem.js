import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



const FeaturedItem = ({ ...item }) => {

	const { img, title, priceStr, id } = item;

	return (
		<>
			<div className='card item-featured shadow'>
				<div className='img-container zoom-img'>
					<img src={img} className='card-img-top' alt={title} />
				</div>
				<div className='card-body'>
					<div className='card-text'>
						<h5>{title}</h5>
						<span>
							<i className='fa-solid fa-dollar-sign'>{priceStr}</i>
						</span>
					</div>
					<Link to={`${id}`} className='btn btn-more btn-sm btn-color mt-2'>
						Learn more
					</Link>
				</div>
			</div>
		</>
	);
};

export default FeaturedItem;;
