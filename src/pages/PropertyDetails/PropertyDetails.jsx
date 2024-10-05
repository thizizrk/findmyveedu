import { useState, useCallback } from 'react';
import './style.scss';
import PropertyRequestForm from '../../components/PropertyRequestForm/PropertyRequestForm';
import { Link } from 'react-router-dom';
import ImageLoader from '../../components/Image/ImageLoader';

const PropertyDetails = ({property}) => {
    const propertyImages = [
        'https://www.arvindsmartspaces.com/wp-content/uploads/2022/01/Artboard-1.jpg',
        'https://cdn.pixabay.com/photo/2021/02/02/18/46/city-5974876_640.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRls5UXoQHJObJDPNbgpBxyvw1kO7heKd_Kw&s'
    ];

    const [index, setIndex] = useState(0);
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");

    const openModal = () => {
        setSelectedImage(propertyImages[index]);
        setModalOpen(true);
    };

    // Hide Modal
    const closeModal = () => {
        setSelectedImage("");
        setModalOpen(false);
    };


    const next = useCallback(() => {
        setIndex((prevIndex) => (prevIndex + 1) % propertyImages.length);
    }, [propertyImages.length]);

    const prev = useCallback(() => {
        setIndex((prevIndex) => (prevIndex - 1 + propertyImages.length) % propertyImages.length);
    }, [propertyImages.length]);

    return (
        <>
            <div className="property-details container">
                <div className="row align-items-center">
                    <div className="col-12">
                        <h3 className='mb-5'>{property.title}</h3>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <div className="property-slider mb-5">
                            <div className="slide" onClick={openModal}>
                                <ImageLoader src={propertyImages[index]} alt={`slider-${index}`} />
                            </div>
                            <div className="slider-buttons d-flex justify-content-between align-items-center">
                                <button onClick={prev}>
                                    <i className="fa fa-chevron-left"></i>
                                </button>
                                {/* <div className="dots py-5">
                                {propertyImages.map((_, i) => (
                                    <span key={i} className={index === i ? 'active' : ''}>
                                        <i className="fa fa-circle mx-1"></i>
                                    </span>
                                ))}
                            </div> */}
                                {/* <div className="dots">
                                {propertyImages.map((_, i) => (
                                    <span
                                        key={i}
                                        className={`dot ${index === i ? 'active' : ''}`}
                                        onClick={() => setIndex(i)}
                                        aria-label={`Slide ${i + 1}`}
                                        role="button"
                                    >
                                        <i className="fa fa-circle mx-1"></i>
                                    </span>
                                ))}
                            </div> */}
                                <div className="slide-indicator">
                                    {index + 1} / {propertyImages.length}
                                </div>
                                <button onClick={next}>
                                    <i className="fa fa-chevron-right"></i>
                                </button>
                            </div>

                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <div className="meta mb-5">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td className="title">
                                            <i className="fa fa-building me-2" aria-hidden="true"></i> Type
                                        </td>
                                        <td>{property.type}</td>
                                    </tr>
                                    <tr>
                                        <td className="title">
                                            <i className="fa fa-bath me-2" aria-hidden="true"></i> Bathroom
                                        </td>
                                        <td>{property.bathrooms}</td>
                                    </tr>
                                    <tr>
                                        <td className="title">
                                            <i className="fa fa-bed me-2" aria-hidden="true"></i> Bedroom
                                        </td>
                                        <td>{property.bedrooms}</td>
                                    </tr>
                                    <tr>
                                        <td className="title">
                                            <i className="fa fa-parking me-2" aria-hidden="true"></i> Parking
                                        </td>
                                        <td>{property.parking ? "Yes" : "No"}</td>
                                    </tr>
                                    <tr>
                                        <td className="title">
                                            <i className="fa fa-map-marker-alt me-2" aria-hidden="true"></i> Location
                                        </td>
                                        <td>{property.location}</td>
                                    </tr>
                                    <tr>
                                        <td className="title">
                                            <i className="fa fa-inr me-2" aria-hidden="true"></i> Price
                                        </td>
                                        <td>
                                            <i className="fa fa-inr me-2" aria-hidden="true"></i> {property.price}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className={`modal fade ${isModalOpen ? 'show d-block' : ''}`} tabIndex="-1" role="dialog" style={{ backgroundColor: isModalOpen ? 'rgba(0, 0, 0, 0.5)' : 'transparent' }}>
                    <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header justify-content-between">
                                <h5 className="modal-title">Full Image View</h5>
                                <button type="button" className="text-white btn rounded" onClick={closeModal} aria-label="Close">
                                    <i className="fa fa-close" aria-hidden="true"></i>
                                </button>
                            </div>
                            {/* <div className="modal-body">
                            <img src={selectedImage} alt="Full view" className="img-fluid" />
                        </div> */}
                            <div className="modal-body">
                                {/* Same Image Slider inside Modal */}
                                <div className="property-slider">
                                    <div className="slide">

                                    <ImageLoader src={propertyImages[index]}
                                            alt={`slider-${index}`}
                                            className="img-fluid"
                                            style={{ maxHeight: '500px', objectFit: 'cover' }} />

                                        {/* <img
                                            src={propertyImages[index]}
                                            alt={`slider-${index}`}
                                            className="img-fluid"
                                            style={{ maxHeight: '500px', objectFit: 'cover' }}
                                        /> */}
                                    </div>

                                    {/* Slider Navigation and Slide Indicator in Modal */}
                                    <div className="slider-controls d-flex justify-content-between align-items-center mt-3">
                                        <button className="prev-btn btn btn-outline-secondary" onClick={prev}>
                                            <i className="fa fa-chevron-left"></i>
                                        </button>

                                        {/* Slide Indicator: "1/3" format */}
                                        <div className="slide-indicator">
                                            {index + 1} / {propertyImages.length}
                                        </div>

                                        <button className="next-btn btn btn-outline-secondary" onClick={next}>
                                            <i className="fa fa-chevron-right"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="request-form mb-5">
                            <div className="request-title">
                                <h3>Request Details</h3>
                            </div>
                            <div className="form-body">
                                <PropertyRequestForm />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>

    );
};

export default PropertyDetails;
