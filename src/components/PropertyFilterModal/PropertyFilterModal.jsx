const PropertyFilterModal = ({ handleFilter, filterActions, className }) => {
    const { handleFilterOptionsChange, applyFilter } = filterActions;
    const areas = [
        {"label": "Filter by Area", "value":""},
        { "label": "Porur", "value": "PORUR" },
        { "label": "Chengalpattu", "value": "CHENGALPATTU" },
        { "label": "Thiruvanmaiyur", "value": "THIRUVANMAIYUR" },
        { "label": "Guindy", "value": "GUINDY" },
        { "label": "Perungudi", "value": "PERUNGUDI" },
        { "label": "Tharamani", "value": "THARAMANI" },
        { "label": "Navalur", "value": "NAVALUR" },
        { "label": "Siruseri", "value": "SIRUSERI" },
        { "label": "Ramapuram", "value": "RAMAPURAM" },
        { "label": "Vadapalani", "value": "VADAPALANI" },
        { "label": "Alandur", "value": "ALANDUR" }
    ]

    const bedrooms = [
        {"label": "Filter by Bedroom", "value":""},
        { "label": "1 BHK", "value": 1 },
        { "label": "2 BHK", "value": 2 },
        { "label": "3 BHK", "value": 3 },
        { "label": "4 BHK", "value": 4 },
        { "label": "5 BHK", "value": 5 },
    ]

    const propertyTypes = [
        { "label": "Filter by Type", "value": "" },
        { "label": "Apartment", "value": "APARTMENT" },
        { "label": "Individual House", "value": "INDIVIDUAL HOUSE" },
        { "label": "Villa", "value": "VILLA" },
        { "label": "Penthouse", "value": "PENTHOUSE" },
        { "label": "Bungalow", "value": "BUNGALOW" },
        { "label": "Duplex", "value": "DUPLEX" },
        { "label": "Row House", "value": "ROW HOUSE" },
        { "label": "Studio", "value": "STUDIO" },
        { "label": "Independent House", "value": "INDEPENDENT HOUSE" }
      ]
      

    return (
        <>
            <div className={`modal fade show ${className}`} id="exampleModal" tabIndex="-1" role="dialog">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Filter Property</h5>
                        </div>
                        <div className="modal-body">
                            <div className={`row`}>
                                <div className="col-md-6">
                                    <select name="location" id="" className='form-control form-select w-100 mb-3' onChange={handleFilterOptionsChange}>
                                        {areas.map((area) => {
                                            return (
                                                <option value={area.value} key={area.value}>{area.label}</option>
                                            )
                                        })}

                                    </select>

                                    <select name="propertyType" id="" className='form-control form-select w-100 mb-3' onChange={handleFilterOptionsChange}>
                                    {
                                            propertyTypes.map((type)=>{
                                                return (
                                                    <option value={type.value} key={type.value}>{type.label}</option>
                                                )
                                            })
                                        }
                                    </select>

                                    <select name="bedroom" id="" className='form-control form-select w-100 mb-3' onChange={handleFilterOptionsChange}>
                                        {
                                            bedrooms.map((bedroom)=>{
                                                return (
                                                    <option value={bedroom.value} key={bedroom.value}>{bedroom.label}</option>
                                                )
                                            })
                                        }
                                    </select>
                                    <select name="bathroom" id="" className='form-control form-select w-100 mb-3' onChange={handleFilterOptionsChange}>
                                        <option value={''}>Bathroom</option>
                                        <option value={1}>1 Bathroom</option>
                                        <option value={2}>2 Bathroom</option>
                                        <option value={3}>3 Bathroom</option>
                                        <option value={4}>4 Bathroom</option>
                                        <option value={5}>5 Bathroom</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-secondary" data-dismiss="modal" onClick={handleFilter}>Close</button>
                            <button className="btn btn-primary bg-teal" onClick={applyFilter}>Apply Filter</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`modal-backdrop fade show ${className}`}></div>
        </>
    )
}
export default PropertyFilterModal