import './style.scss';
import properties from '../../mocks/properties.json';
import { useState, lazy, Suspense } from 'react';
import PropertiesMenu from '../../components/PropertiesMenu/PropertiesMenu';

const PropertyFilterModal = lazy(() => import('../../components/PropertyFilterModal/PropertyFilterModal'));
const PropertiesToolBar = lazy(() => import('../../components/PropertiesToolBar/PropertiesToolBar'));
const PropertySearchResults = lazy(() => import('../../components/PropertySearchResults/PropertySearchResults'));

const Properties = () => {
    // const [selectedArea, setSelectedArea] = useState('');
    // const [selectedBedroom, setSelectedBedroom] = useState('');
    // const [selectedBathroom, setSelectedBathroom] = useState('');
    // const [selectedPropertyType, setSelectedPropertyType] = useState('');
    const [searchText, setSearchText] = useState('');
    const [showFilter, setShowFilter] = useState(false);
    const [filteredProperties, setFilteredProperties] = useState(properties);
    const [filterOptions, setFilterOptions] = useState({
        bathroom: "",
        bedroom: "",
        propertyType: "",
        location: ""
    })
    const [isFiltered, setIsFiltered] = useState(false);

    // const handleAreaChange = (e) => setSelectedArea(e.target.value);
    // const handleBedroomChange = (e) => setSelectedBedroom(e.target.value);
    // const handleBathroomChange = (e) => setSelectedBathroom(e.target.value);
    // const handlePropertyTypeChange = (e) => setSelectedPropertyType(e.target.value);

    const handleFilterOptionsChange = (e) => {
        setFilterOptions({ ...filterOptions, [e.target.name]: e.target.value })
    }

    const handleSearch = (e) => {
        setSearchText(e.target.value.toLowerCase());
    };

    const handleFilter = () => {
        setIsFiltered(false);
        setShowFilter((show) => !show);
    };

    // const filteredProperties = properties.filter((property) => {
    //     return property;
    //     // return (
    //     //     (selectedArea === '' || property.area === selectedArea) &&
    //     //     (selectedBedroom === '' || property.bedrooms === Number(selectedBedroom)) &&
    //     //     (selectedBathroom === '' || property.bathrooms === Number(selectedBathroom))
    //     // );
    // });

    const applyFilter = () => {
        const { bathroom, bedroom, propertyType, location } = filterOptions;
        console.log(filterOptions);
        let filtered = properties.filter((property) => {
            console.log(property);
            return (
                (propertyType === "" || property.type.toUpperCase() === propertyType) &&
                (location === "" || property.location.toUpperCase() === location) &&
                (bedroom === "" || property.bedrooms === Number(bedroom)) &&
                (bathroom === "" || property.bathrooms === Number(bathroom))
            );
        })
        setFilteredProperties(filtered)
        setShowFilter(false);
        setIsFiltered(true);
    }

    // const finalFilteredProperties = filterProperties.filter((property) =>
    //     property.title.toLowerCase().includes(searchText)
    // );

    return (
        <div className='property-page'>
            <PropertiesMenu />
            <div className='properties my-5'>
               {filteredProperties.length != 0 && <h3 className='mb-5'>{filteredProperties.length} {filteredProperties.length > 1 ? "Properties" : "Property"} found</h3>}
                <div className='property-search-results'>
                    <Suspense fallback={<div>Loading Properties...</div>}>
                        <PropertySearchResults filteredProperties={filteredProperties} />
                    </Suspense>
                </div>
            </div>

            <div className='properties-tool-bar'>
                <Suspense fallback={<div>Loading Toolbar...</div>}>
                    <PropertiesToolBar handleFilter={handleFilter} />
                </Suspense>
            </div>


            <Suspense fallback={<div>Loading Filter Modal...</div>}>
                <PropertyFilterModal className={`${showFilter ? 'd-block' : 'd-none'}`}
                    handleFilter={handleFilter}
                    filterActions={{ handleFilterOptionsChange, applyFilter }}
                />
            </Suspense>

        </div>
    );
};

export default Properties;
