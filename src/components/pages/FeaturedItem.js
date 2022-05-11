import React from 'react';

const FeaturedItem = ({ ...item }) => {
	return (
		<>
			<div className='card item-featured shadow stretched-link'>
				<div className='img-container'>
					<img src={item.img} className='card-img-top' />
				</div>
				<div className='card-body'>
					<div className='card-text'>
						<h5>{item.title}</h5>
						<span>
							<i className='fa-solid fa-dollar-sign'>{item.priceStr}</i>
						</span>
					</div>
					<button className='btn btn-sm btn-color mt-2'>Learn more</button>
				</div>
			</div>
		</>
	);
};

export default FeaturedItem;
