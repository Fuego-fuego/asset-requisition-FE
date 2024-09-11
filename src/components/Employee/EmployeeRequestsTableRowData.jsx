
const EmployeeRequestsTableRowData = (request) => {
    const {asset,status}= request.request
    // TODO: 
    // console.log(request )
    // console.table(asset)
    let statusColor = ""

    switch(status){
        case "pending":
            statusColor="status-pending"
            break
        case"approved":
            statusColor="status-approved"
            break
        case"denied":
            statusColor="status-denied"
            break
        default:
            statusColor ="status-unknown"
    }
    
  return (            
        <tr className="table-row | text-300 capitalize">
            <td className="table-data" data-cell="name">{asset.name}</td>
            <td className="table-data" data-cell="category">{asset.category}</td>
            <td className="table-data" data-cell="type">{asset.asset_type}</td>
            <td className="table-data" data-cell="serial">{asset.serial_number}</td>
            <td className="table-data | lowercase italic" data-cell="status"><span className={statusColor}>{status}</span></td>
            {/* Action Buttons */}
            <td className="employee-requests-table-actions | flex table-data" data-cell="action-btns">
                <div className="details-icon | stroke-accent-700 actions-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
                        <path fill-rule="evenodd"
                            d="M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z"
                            clip-rule="evenodd" />
                    </svg>
                </div>
                <div className=" delete-icon | actions-icon text-red-800 dark:stroke-red-700 dark:text-neutral-800">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
                        <path fill-rule="evenodd"
                            d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                            clip-rule="evenodd" />
                    </svg>
                </div>
                {/* End of Action Buttons */}
            </td>
        </tr>    
  )
}

export default EmployeeRequestsTableRowData