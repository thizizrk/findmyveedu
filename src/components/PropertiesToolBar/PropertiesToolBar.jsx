import './style.scss';

const PropertiesToolBar = ({ handleFilter }) => {
    return (
        <div className="row d-flex justify-content-center align-items-center text-center tool-bar">
            <div className="col-4" onClick={handleFilter}>
                <i className="fa fa-filter me-3" aria-hidden="true"></i>
                <span>Filter</span>
            </div>
            <div className="col-4">
                <i className="fa fa-user me-3" aria-hidden="true"></i>
                <span>Account</span>
            </div>
            <div className="col-4">
                <i className="fa fa-bookmark me-3" aria-hidden="true"></i>
                <span>Saved</span>
            </div>
        </div>
    )
}
export default PropertiesToolBar