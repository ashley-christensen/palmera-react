import React from 'react';

const FeaturedItem = ({ ...item }) => {
	const { img, title, priceStr } = item;
	return (
		<>
			<div className='card item-featured shadow stretched-link'>
				<div className='img-container'>
					<img src={img} className='card-img-top' alt={title} />
				</div>
				<div className='card-body'>
					<div className='card-text'>
						<h5>{title}</h5>
						<span>
							<i className='fa-solid fa-dollar-sign'>{priceStr}</i>
						</span>
					</div>
					<button className='btn btn-more btn-sm btn-color mt-2'>
						Learn more
					</button>
				</div>
			</div>
		</>
	);
};

export default FeaturedItem;
