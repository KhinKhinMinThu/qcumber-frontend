import React, { Component } from "react";
import { Table } from "antd";
import { QueueTitleText } from "../shared-styles/page-layout";
import { css } from "emotion";

export class QueueTable extends Component {
  render() {
    const { clientsList, title } = this.props;

    const columns = [
      {
        title: "No",
        dataIndex: "no",
        key: "no",
        width: "4%",
        render: (text, record, index) => (
          <span className="header-row">{`${index + 1}`}</span>
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
          font-family: psrFont;
          padding: 0;
          thead[class*="ant-table-thead"] th {
            background-color: #355667 !important;
            font-weight: bold;
            color: white;
          }
        `}
        columns={columns}
        dataSource={clientsList}
        size="small"
        bordered={true}
        // pagination={{ pageSize: 10, hideOnSinglePage: true }}
        pagination={false}
      />
    );
  }
}
