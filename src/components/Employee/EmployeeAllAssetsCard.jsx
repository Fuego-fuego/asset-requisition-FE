import { Link } from "react-router-dom"
import PropTypes from 'prop-types';  


const EmployeeAllAssetsCard = ({asset}) => {
    const {id,name,category,serial_number,tag,asset_type} = asset

    const handleRequest = () => {        
    }
        return (
        <div className="md:employee-all-asset-card-md sm:employee-all-asset-card-sm | shadow grid bg-neutral-100 dark:bg-neutral-600 dark:text-neutral-200">
            {/* Card Img */}
            <img className="employee-all-asset-card-img md:md:employee-all-assets-card-img-md"
                src="https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08988608.png?impolicy=Png_Res"
                alt="unsplash-radom" />
            {/* Card Details */}
            <div className="employee-all-asset-card-info | flow">
                <p className="capitalize employee-all-asset-card-info-p"><span className="font-semibold">name: </span>{name}</p>
                <p className="capitalize employee-all-asset-card-info-p"><span className="font-semibold">serial: </span>{serial_number}</p>
                <p className="capitalize employee-all-asset-card-info-p"><span className="font-semibold">tag no: </span>{tag}</p>
                <p className="capitalize employee-all-asset-card-info-p"><span className="font-semibold">category: </span>{category}</p>
                <p className="capitalize employee-all-asset-card-info-p"><span className="font-semibold">type: </span>{asset_type}</p>
                {/* Card Btn */}
                <div className="sm:employee-all-assets-card-btns-wrapper-sm md:employee-all-assets-card-btns-wrapper-md employee-all-assets-card-btns-wrapper | flex">
                    <button className="btn primary-btn uppercase text-300 font-bold">request</button>
                    <Link className="link capitalize" to={`asset/${id}`}>details</Link>
                </div>
            </div>
        </div>
)
}
export default EmployeeAllAssetsCard





EmployeeAllAssetsCard.propTypes = {
    asset:PropTypes.object
}