import { Link, useLocation } from "react-router-dom"
import PropertyCard from "../PropertyCard/PropertyCard"
import './style.scss';
import { useEffect, useState } from "react";
import PropertyDetails from "../../pages/PropertyDetails/PropertyDetails";

const PropertySearchResults = ({ filteredProperties }) => {

    const [propertyDetails, setPropertyDetails] = useState(null);

    const showDetails = (details) => {
        document.body.style.overflowY = "hidden";
        setPropertyDetails(details);
    }


    const closePropertyModal = () => {
        document.body.style.overflowY = "scroll";
        setPropertyDetails(null);
    }

    return (

        <div className="row">
            {filteredProperties.length > 0 ? filteredProperties.map((property, index) => (
                <div className="col-lg-4 col-md-6 col-xs-12 mb-5" key={index} onClick={() => showDetails(property)}>
                    <PropertyCard key={index} property={property} />
                </div>
            ))
                :
                (
                    <div className="col-12">
                        <p className="text-center mt-5">No results found</p>
                    </div>
                )}

            {propertyDetails && <div className={`modal fade ${propertyDetails ? 'show d-block' : ''}  p-0`} data-bs-backdrop="static" tabIndex="-1" role="dialog" style={{ backgroundColor: propertyDetails ? 'rgba(0, 0, 0, 0.5)' : 'transparent' }}>
                <div className="modal-dialog modal-fullscreen modal-dialog-centered modal-dialog-scrollable" role="document">
                    <div className="modal-content">
                        <div className="modal-header justify-content-between">
                            <h5 className="modal-title">Property Details</h5>
                            <button type="button" className="text-white btn rounded" onClick={closePropertyModal} aria-label="Close">
                                <i className="fa fa-close" aria-hidden="true"></i>
                            </button>
                        </div>
                        <div className="modal-body">
                            <PropertyDetails property={propertyDetails} />
                        </div>
                    </div>
                </div>
            </div>
            }
        </div>

    )
}
export default PropertySearchResults


{/* <div className={`modal fade ${isPropertyModalOpen ? 'show d-block' : ''}`} tabIndex="-1" role="dialog" style={{ backgroundColor: isPropertyModalOpen ? 'rgba(0, 0, 0, 0.5)' : 'transparent' }}>
                    <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header justify-content-between">
                                <h5 className="modal-title">Full Image View</h5>
                                <button type="button" className="text-white btn rounded" onClick={closePropertyModal} aria-label="Close">
                                    <i className="fa fa-close" aria-hidden="true"></i>
                                </button>
                            </div>
                            <div className="modal-body">

                            </div>
                        </div>
                    </div>
                </div> */}