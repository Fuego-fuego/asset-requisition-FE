import { NavLink } from "react-router-dom"
const EmployeeMyAssetsCard = () => {
  return (
        <div className="md:employee-my-asset-card-md sm:employee-my-asset-card-sm | shadow grid bg-neutral-100 dark:bg-neutral-600 dark:text-neutral-200">
            {/* Card Img */}
            <img className="employee-my-asset-card-img"
                src="https://smartbuy.co.ke/wp-content/uploads/2023/08/HP-Spectre-x360-14-ef0024na-front-image.jpg"
                alt="unsplash-radom" />
            {/* Card Details */}
            <div className="employee-my-asset-card-info | flow">
                <p className="capitalize employee-my-asset-card-info-p"><span className="font-semibold">name:</span> HP
                    Spectre x360
                    2-in-1 Laptop 14t-eu000, 14</p>
                <p className="capitalize employee-my-asset-card-info-p"><span className="font-semibold">serial:</span>
                    0000000000</p>
                <p className="capitalize employee-my-asset-card-info-p"><span className="font-semibold">tag no:</span>
                    0000000000</p>
                <p className="capitalize employee-my-asset-card-info-p"><span
                        className="font-semibold">category:</span> electronics</p>
                <p className="capitalize employee-my-asset-card-info-p"><span className="font-semibold">type:</span>
                    laptop</p>
                {/* Card Btn */}
                <div className="sm:employee-my-assets-card-btns-wrapper-sm md:employee-my-assets-card-btns-wrapper-md employee-all-assets-card-btns-wrapper | flex">
                    <NavLink className="btn ghost-btn font-bold uppercase " to="#">details</NavLink>
                </div>
            </div>
        </div>
  )
}

export default EmployeeMyAssetsCard