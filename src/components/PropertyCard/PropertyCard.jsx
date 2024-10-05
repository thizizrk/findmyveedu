import ImageLoader from "../Image/ImageLoader";

const PropertyCard = ({ property }) => {
    return (
        <div className="property-card">
            <div className="property-image">
                <ImageLoader className='img-fluid' height="250" src={property.imageUrl} alt={property.title} />
                {/* <img className='img-fluid' src={property.imageUrl} alt={property.title} /> */}
            </div>
            <div className="property-content p-3">
                <div className="d-flex justify-content-between">
                    <div className="property-title">
                        <p className='mb-0'>{property.title}</p>
                    </div>
                    <div className="property-location">
                    <i className="fa fa-map-marker-alt me-2" aria-hidden="true"></i>
                    <span>{property.location}</span>
                    </div>
                </div>

            </div>
            <hr className='m-0' />
            <div className="property-meta d-flex align-items-center justify-content-between">
                <div className="details d-flex align-items-center">
                    <div className="bathroom d-flex align-items-center me-3">
                        <i className="fa fa-bath me-2" aria-hidden="true"></i>
                        <span>{property.bathrooms}</span>
                    </div>
                    <div className="bedroom d-flex align-items-center me-3">
                        <i className="fa fa-bed me-2" aria-hidden="true"></i>
                        <span>{property.bedrooms}</span>
                    </div>
                    <div className="parking d-flex align-items-center">
                        <i className="fa fa-parking me-2" aria-hidden="true"></i>
                        <span>{property.parking ? 'Yes' : 'No'}</span>
                    </div>
                </div>
                <div className="price d-flex align-items-center">
                    <i className="fa fa-inr me-2" aria-hidden="true"></i>
                    <span>{property.price}</span>
                </div>
            </div>
        </div>
    );
};

export default PropertyCard;
