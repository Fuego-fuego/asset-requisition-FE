import {Link} from 'react-router-dom'
import {useParams} from "react-router-dom"
import PropTypes from 'prop-types'

const EmployeeSingleAssetPage = ({allAssets}) => {
    
    const {assetId} = useParams()
    const asset = allAssets.find((asset)=> asset.id === parseInt(assetId))
    
    




  return (
    <div className="employee-single-product-page | shadow bg-neutral-100 dark:bg-neutral-600 dark:text-neutral-200">
      <Link to="/employee/all-assets" className="employee-single-product-page-close-btn | font-semibold lowercase text-600">x</Link>
      <div className="employee-single-product-page-body md:employee-single-product-page-body-md employee-single-product-page-body-sm | flex">
        {/* Asset Image  */}
        <div className="employee-single-product-page-image">
          <img className="employee-all-asset-card-img"
                  src="https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08988608.png?impolicy=Png_Res"
                  alt="unsplash-radom" />
        </div>
        {/* Asset Text */}
        <div className="employee-single-product-page-text employee-single-product-page-text-sm md:employee-single-product-page-text-md | flex flex-col ">
          <p className='font-semibold md:text-550'>{asset.name}</p>
          {/* Type and Category*/}
          <div className="employee-single-product-page-type-category-wrapper md:employee-single-product-page-type-category-wrapper-md  | capitalize text-gray-600 dark:text-gray-300 capitalize flow">
            <p>type: {asset.asset_type}</p>
            <p>category: {asset.category}</p>
          </div>
          {/* Description */}
          <div className="employee-single-product-page-description-wrapper md:employee-single-product-page-description-wrapper-md | flow">
          <p className='capitalize font-semibold'>description:</p>
          <p>{asset.description}</p>
          </div>
          {/* Serial Number and Tag Number*/}
          <div className="employee-single-product-page-serial-tag-wrapper md:employee-single-product-page-serial-tag-wrapper-md | text-gray-600 dark:text-gray-300 capitalize flow">
            <p>serial: {asset.asset_type}</p>
            <p>tag number: {asset.serial_number}</p>
          </div>          
              <button className="employee-single-product-page-btn |  btn primary-btn uppercase text-300 font-bold">request</button>          
        </div>
      </div>
    </div>
  )
}

export default EmployeeSingleAssetPage


EmployeeSingleAssetPage.propTypes = {
  allAssets:PropTypes.array
}
