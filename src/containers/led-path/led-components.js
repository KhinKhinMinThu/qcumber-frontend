import React, { Component } from "react";
import { Table } from "antd";
import { QueueTitleText } from "../shared-styles/led-page";
import { css } from "emotion";

export class QueueTable extends Component {
  render() {
    const { clientsList, title } = this.props;
    console.log(clientsList);
    const pagination = clientsList.length > 8 ? { pageSize: 8 } : false;

    const columns = [
      {
        title: "No",
        dataIndex: "key",
        key: "key",
        width: "4%",
        render: (text, record, index) => (
          <span className="header-row">{`${record.key + 1}`}</span>
        )
      },
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
        width: "65%"
      },
      {
        title: "Estimated Waiting Time",
        dataIndex: "waitingtime",
        key: "waitingtime"
      }
    ];
    return (
      <Table
        title={() => <QueueTitleText>{title}</QueueTitleText>}
        className={css`
          padding: 0;
          thead[class*="ant-table-thead"] th {
            background-color: #355667 !important;
            font-weight: bold;
            color: white;
          }
        `}
        columns={columns}
        rowClassName={css`
          background-color: #f0f0f0 !important;
        `}
        dataSource={clientsList}
        size="small"
        bordered={true}
        pagination={pagination}
      />
    );
  }
}
