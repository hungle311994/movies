import React from "react";

const TableDetail = ({ detail }) => {
  return (
    <div className="item-content-detail-table">
      <h3 className="item-content-detail-heading">Details</h3>
      <table className="item-content-detail-table">
        <tbody className="item-content-detail-tbody">
          <tr className="item-content-detail-tr">
            <th className="item-content-detail-th">Genres</th>
            <td className="item-content-detail-td">
              {detail.genres &&
                detail.genres.map((item, idx) => (
                  <span className="item-content-detail-name" key={idx}>
                    {item.name}
                  </span>
                ))}
            </td>
          </tr>
          <tr className="item-content-detail-tr">
            <th className="item-content-detail-th">Runtime</th>
            <td className="item-content-detail-td">{detail.runtime} min</td>
          </tr>
          <tr className="item-content-detail-tr">
            <th className="item-content-detail-th">Release Date</th>
            <td className="item-content-detail-td">
              {detail.release_date} ( {detail.status} )
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableDetail;
