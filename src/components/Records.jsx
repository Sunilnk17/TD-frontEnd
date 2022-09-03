import React from "react";

const Records = ({ data }) => {
  return (
    <div>
      <h1 className="text-centre"> Consignment list</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tracking Number</th>
            <th>Cannote Number</th>
            <th>Order Company</th>
            <th>Order Shipping Fee</th>
            <th>Order Postcode From</th>
            <th>Order Region From</th>
            <th>Order Postcode To</th>
            <th>Order Region To</th>
            <th>Order Cbm</th>
            <th>Order Weight</th>
            <th>Order Value</th>
            <th>Order Distance</th>
            <th>Order Type</th>
            <th>Order Time</th>
            <th>Create Time</th>
            <th>IsDeleted</th>
            <th>IsSuccess</th>
            <th>Ship Status</th>
            <th>ShipStatus UpdateTime</th>
            <th>Invoice Id</th>
            <th>Store Id</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id} </td>
              <td>
                {item.trackingNumber === null ? "-" : item.trackingNumber}{" "}
              </td>
              <td>{item.cannoteNumber === null ? "-" : item.cannoteNumber} </td>
              <td>{item.orderCompany === null ? "-" : item.orderCompany} </td>
              <td>
                {item.orderShippingFee === null ? "-" : item.orderShippingFee}{" "}
              </td>
              <td>
                {item.orderPostcodeFrom === null ? "-" : item.orderPostcodeFrom}{" "}
              </td>
              <td>
                {item.orderRegionFrom === null ? "-" : item.orderRegionFrom}{" "}
              </td>
              <td>
                {item.orderPostcodeTo === null ? "-" : item.orderPostcodeTo}{" "}
              </td>
              <td>{item.orderRegionTo === null ? "-" : item.orderRegionTo} </td>
              <td>{item.orderCbm === null ? "-" : item.orderCbm} </td>
              <td>{item.orderWeight === null ? "-" : item.orderWeight} </td>
              <td>{item.orderValue === null ? "-" : item.orderValue} </td>
              <td>{item.orderDistance === null ? "-" : item.orderDistance} </td>
              <td>{item.orderType === null ? "-" : item.orderType} </td>
              <td>{item.orderTime === null ? "-" : item.orderTime} </td>
              <td>{item.createTime === null ? "-" : item.createTime} </td>
              <td>{item.isDeleted === null ? "-" : item.isDeleted} </td>
              <td>{item.isSuccess === null ? "-" : item.isSuccess} </td>
              <td>{item.shipStatus === null ? "-" : item.shipStatus} </td>
              <td>
                {item.shipStatusUpdateTime === null
                  ? "-"
                  : item.shipStatusUpdateTime}{" "}
              </td>
              <td>{item.invoiceid === null ? "-" : item.invoiceid} </td>
              <td>{item.storeid === null ? "-" : item.storeid} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Records;
