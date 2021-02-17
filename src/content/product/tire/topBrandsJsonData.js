import React from "react";
import accounting from "accounting";
// 20210215235733
// https://admin.brandirectory.com/api/league-table/526
export const tire2020 = {
  title: "Tyres 10 2020",
  ranking_id: 526,
  year: 2020,
  previous_year: 2019,
  hero_image_id: 249,
  related_reports: [],
  sector: "Tyres",
  primary_link_report_id: null,
  secondary_links_report_id: [401],
  columns: [
    {
      title: "2020",
      dataIndex: "position",
      key: "position",
      render: (field, record) => {
        return (
          <span className="gx-font-weight-bold">
            {record.position}{" "}
            {record.position === record.previous_position && (
              <span className="gx-ml-2 gx-text-primary">=</span>
            )}
            {record.position < record.previous_position && (
              <span className="gx-ml-2 gx-text-success">↑</span>
            )}
            {record.position > record.previous_position && (
              <span className="gx-ml-2 gx-text-warning">↓</span>
            )}
          </span>
        );
      },
    },
    {
      title: "2019",
      dataIndex: "previous_position",
      key: "previous_position",
    },
    {
      title: "Нэр",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Улс",
      dataIndex: "country",
      key: "country",
      render: (field, record) => {
        return <span className="gx-fs-sm">{field.country}</span>;
      },
    },
    {
      title: "2020",
      dataIndex: "value",
      key: "value",
      render: (field, record) => {
        return (
          <span className="gx-fs-sm">
            {accounting.formatMoney(field, "$ ", 0, "'")} сая
          </span>
        );
      },
    },
    {
      title: "2019",
      dataIndex: "previous_value",
      key: "previous_value",
      render: (field, record) => {
        return (
          <span className="gx-fs-sm">
            {accounting.formatMoney(field, "$ ", 0, "'")} сая
          </span>
        );
      },
    },
    {
      title: "2020",
      dataIndex: "rating",
      key: "rating",
    },
    {
      title: "2019",
      dataIndex: "previous_rating",
      key: "previous_rating",
    },
  ],
  data: [
    {
      ticker: "MICN001",
      name: "Michelin",
      slug: "michelin",
      country: {
        country: "France",
        display_country: null,
      },
      sector: {
        industry_group: "Tires",
        display_sector: "Tyres",
      },
      position: 1,
      previous_position: 1,
      value: "7161.38",
      rating: "AAA",
      previous_value: "7231.78",
      previous_rating: "AAA",
    },
    {
      ticker: "BRIE007",
      name: "Bridgestone",
      slug: "bridgestone",
      country: {
        country: "Japan",
        display_country: null,
      },
      sector: {
        industry_group: "Tires",
        display_sector: "Tyres",
      },
      position: 2,
      previous_position: 2,
      value: "7023.88",
      rating: "AA+",
      previous_value: "6955.16",
      previous_rating: "AA+",
    },
    {
      ticker: "CONL006",
      name: "Continental",
      slug: "continental-2",
      country: {
        country: "Germany",
        display_country: null,
      },
      sector: {
        industry_group: "Tires",
        display_sector: "Tyres",
      },
      position: 3,
      previous_position: 3,
      value: "3320.23",
      rating: "AA+",
      previous_value: "3408.00",
      previous_rating: "AA+",
    },
    {
      ticker: "DUNP002",
      name: "Dunlop",
      slug: "dunlop-2",
      country: {
        country: "United States",
        display_country: null,
      },
      sector: {
        industry_group: "Conglomerates - Tires",
        display_sector: "Tyres",
      },
      position: 4,
      previous_position: 4,
      value: "2126.00",
      rating: "AA",
      previous_value: "2011.19",
      previous_rating: "AA",
    },
    {
      ticker: "GOOR005",
      name: "Goodyear",
      slug: "goodyear-2",
      country: {
        country: "United States",
        display_country: null,
      },
      sector: {
        industry_group: "Tires",
        display_sector: "Tyres",
      },
      position: 5,
      previous_position: 5,
      value: "2083.11",
      rating: "AA+",
      previous_value: "1948.24",
      previous_rating: "AA+",
    },
    {
      ticker: "PIRI001",
      name: "Pirelli",
      slug: "pirelli",
      country: {
        country: "Italy",
        display_country: null,
      },
      sector: {
        industry_group: "Tires",
        display_sector: "Tyres",
      },
      position: 6,
      previous_position: 6,
      value: "1480.13",
      rating: "AA+",
      previous_value: "1620.33",
      previous_rating: "AA+",
    },
    {
      ticker: "HANK001",
      name: "Hankook",
      slug: "hankook",
      country: {
        country: "South Korea",
        display_country: null,
      },
      sector: {
        industry_group: "Tires NR",
        display_sector: "Tyres",
      },
      position: 7,
      previous_position: 7,
      value: "1319.11",
      rating: "AA",
      previous_value: "1461.85",
      previous_rating: "AA",
    },
    {
      ticker: "YOKA001",
      name: "Yokohama",
      slug: "yokohama",
      country: {
        country: "Japan",
        display_country: null,
      },
      sector: {
        industry_group: "Tires NR",
        display_sector: "Tyres",
      },
      position: 8,
      previous_position: 9,
      value: "872.74",
      rating: "AA-",
      previous_value: "822.99",
      previous_rating: "AA-",
    },
    {
      ticker: "SHAD014",
      name: "Linglong Tire",
      slug: "linglong-tire-2",
      country: {
        country: "China",
        display_country: null,
      },
      sector: {
        industry_group: "Tires NR",
        display_sector: "Tyres",
      },
      position: 9,
      previous_position: null,
      value: "760.28",
      rating: "AA-",
      previous_value: null,
      previous_rating: null,
    },
    {
      ticker: "SUMS004",
      name: "Sumitomo Rubber Industries",
      slug: "sumitomo-rubber-industries",
      country: {
        country: "Japan",
        display_country: null,
      },
      sector: {
        industry_group: "Tires",
        display_sector: "Tyres",
      },
      position: 10,
      previous_position: 10,
      value: "756.47",
      rating: "A+",
      previous_value: "800.71",
      previous_rating: "AA-",
    },
  ],
};

//   #####    ###     #    #####
//  #     #  #   #   ##   #     #
//        # #     # # #   #     #
//   #####  #     #   #    ######
//  #       #     #   #         #
//  #        #   #    #   #     #
//  #######   ###   #####  #####
// 20210216002425
// https://admin.brandirectory.com/api/league-table/403
export const tire2019 = {
  title: "Tyres 10 2019",
  ranking_id: 403,
  year: 2019,
  previous_year: 2018,
  hero_image_id: 249,
  related_reports: [205],
  sector: "Tyres",
  primary_link_report_id: null,
  secondary_links_report_id: [205],
  columns: [
    {
      title: "2019",
      dataIndex: "position",
      key: "position",
      render: (field, record) => {
        return (
          <span className="gx-font-weight-bold">
            {record.position}{" "}
            {record.position === record.previous_position && (
              <span className="gx-ml-2 gx-text-primary">=</span>
            )}
            {record.position < record.previous_position && (
              <span className="gx-ml-2 gx-text-success">↑</span>
            )}
            {record.position > record.previous_position && (
              <span className="gx-ml-2 gx-text-warning">↓</span>
            )}
          </span>
        );
      },
    },
    {
      title: "2018",
      dataIndex: "previous_position",
      key: "previous_position",
    },
    {
      title: "Нэр",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Улс",
      dataIndex: "country",
      key: "country",
      render: (field, record) => {
        return <span className="gx-fs-sm">{field.country}</span>;
      },
    },
    {
      title: "2019",
      dataIndex: "value",
      key: "value",
      render: (field, record) => {
        return (
          <span className="gx-fs-sm">
            {accounting.formatMoney(field, "$ ", 0, "'")} сая
          </span>
        );
      },
    },
    {
      title: "2018",
      dataIndex: "previous_value",
      key: "previous_value",
      render: (field, record) => {
        return (
          <span className="gx-fs-sm">
            {accounting.formatMoney(field, "$ ", 0, "'")} сая
          </span>
        );
      },
    },
    {
      title: "2019",
      dataIndex: "rating",
      key: "rating",
    },
    {
      title: "2018",
      dataIndex: "previous_rating",
      key: "previous_rating",
    },
  ],
  data: [
    {
      ticker: "MICN001",
      name: "Michelin",
      slug: "michelin",
      country: {
        country: "France",
        display_country: null,
      },
      sector: {
        industry_group: "Tires",
        display_sector: "Tyres",
      },
      position: 1,
      previous_position: 1,
      value: "7231.78",
      rating: "AAA",
      previous_value: "7929.97",
      previous_rating: "AAA",
    },
    {
      ticker: "BRIE007",
      name: "Bridgestone",
      slug: "bridgestone",
      country: {
        country: "Japan",
        display_country: null,
      },
      sector: {
        industry_group: "Tires",
        display_sector: "Tyres",
      },
      position: 2,
      previous_position: 2,
      value: "6955.16",
      rating: "AA+",
      previous_value: "6992.39",
      previous_rating: "AAA-",
    },
    {
      ticker: "CONL006",
      name: "Continental",
      slug: "continental-2",
      country: {
        country: "Germany",
        display_country: null,
      },
      sector: {
        industry_group: "Tires",
        display_sector: "Tyres",
      },
      position: 3,
      previous_position: 3,
      value: "3408.00",
      rating: "AA+",
      previous_value: "4755.55",
      previous_rating: "AA+",
    },
    {
      ticker: "DUNP002",
      name: "Dunlop",
      slug: "dunlop-2",
      country: {
        country: "United States",
        display_country: null,
      },
      sector: {
        industry_group: "Conglomerates - Tires",
        display_sector: "Tyres",
      },
      position: 4,
      previous_position: 5,
      value: "2011.19",
      rating: "AA",
      previous_value: "1984.00",
      previous_rating: "AA",
    },
    {
      ticker: "GOOR005",
      name: "Goodyear",
      slug: "goodyear-2",
      country: {
        country: "United States",
        display_country: null,
      },
      sector: {
        industry_group: "Tires",
        display_sector: "Tyres",
      },
      position: 5,
      previous_position: 4,
      value: "1948.24",
      rating: "AA+",
      previous_value: "2174.85",
      previous_rating: "AA+",
    },
    {
      ticker: "PIRI001",
      name: "Pirelli",
      slug: "pirelli",
      country: {
        country: "Italy",
        display_country: null,
      },
      sector: {
        industry_group: "Tires",
        display_sector: "Tyres",
      },
      position: 6,
      previous_position: 7,
      value: "1620.33",
      rating: "AA+",
      previous_value: "1524.41",
      previous_rating: "AAA-",
    },
    {
      ticker: "HANK001",
      name: "Hankook",
      slug: "hankook",
      country: {
        country: "South Korea",
        display_country: null,
      },
      sector: {
        industry_group: "Tires NR",
        display_sector: "Tyres",
      },
      position: 7,
      previous_position: 6,
      value: "1461.85",
      rating: "AA",
      previous_value: "1589.79",
      previous_rating: "AA+",
    },
    {
      ticker: "MAXS004",
      name: "Maxxis",
      slug: "maxxis",
      country: {
        country: "China",
        display_country: null,
      },
      sector: {
        industry_group: "Tires NR",
        display_sector: "Tyres",
      },
      position: 8,
      previous_position: 8,
      value: "890.08",
      rating: "AA-",
      previous_value: "900.15",
      previous_rating: "AA-",
    },
    {
      ticker: "YOKA001",
      name: "Yokohama",
      slug: "yokohama",
      country: {
        country: "Japan",
        display_country: null,
      },
      sector: {
        industry_group: "Tires NR",
        display_sector: "Tyres",
      },
      position: 9,
      previous_position: 9,
      value: "822.99",
      rating: "AA-",
      previous_value: "837.83",
      previous_rating: "AA-",
    },
    {
      ticker: "SUMS004",
      name: "Sumitomo Rubber Industries",
      slug: "sumitomo-rubber-industries",
      country: {
        country: "Japan",
        display_country: null,
      },
      sector: {
        industry_group: "Tires",
        display_sector: "Tyres",
      },
      position: 10,
      previous_position: 10,
      value: "800.71",
      rating: "AA-",
      previous_value: "601.35",
      previous_rating: "A",
    },
  ],
};

//   #####    ###     #    #####
//  #     #  #   #   ##   #     #
//        # #     # # #   #     #
//   #####  #     #   #    #####
//  #       #     #   #   #     #
//  #        #   #    #   #     #
//  #######   ###   #####  #####
// 20210216002928
// https://admin.brandirectory.com/api/league-table/324
export const tire2018 = {
  title: "Tyres 10 2018",
  ranking_id: 324,
  year: 2018,
  previous_year: 2017,
  hero_image_id: 249,
  related_reports: [56],
  sector: "Tyres",
  primary_link_report_id: null,
  secondary_links_report_id: [56],
  columns: [
    {
      title: "2018",
      dataIndex: "position",
      key: "position",
      render: (field, record) => {
        return (
          <span className="gx-font-weight-bold">
            {record.position}{" "}
            {record.position === record.previous_position && (
              <span className="gx-ml-2 gx-text-primary">=</span>
            )}
            {record.position < record.previous_position && (
              <span className="gx-ml-2 gx-text-success">↑</span>
            )}
            {record.position > record.previous_position && (
              <span className="gx-ml-2 gx-text-warning">↓</span>
            )}
          </span>
        );
      },
    },
    {
      title: "2017",
      dataIndex: "previous_position",
      key: "previous_position",
    },
    {
      title: "Нэр",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Улс",
      dataIndex: "country",
      key: "country",
      render: (field, record) => {
        return <span className="gx-fs-sm">{field.country}</span>;
      },
    },
    {
      title: "2018",
      dataIndex: "value",
      key: "value",
      render: (field, record) => {
        return (
          <span className="gx-fs-sm">
            {accounting.formatMoney(field, "$ ", 0, "'")} сая
          </span>
        );
      },
    },
    {
      title: "2017",
      dataIndex: "previous_value",
      key: "previous_value",
      render: (field, record) => {
        return (
          <span className="gx-fs-sm">
            {accounting.formatMoney(field, "$ ", 0, "'")} сая
          </span>
        );
      },
    },
    {
      title: "2018",
      dataIndex: "rating",
      key: "rating",
    },
    {
      title: "2017",
      dataIndex: "previous_rating",
      key: "previous_rating",
    },
  ],
  data: [
    {
      ticker: "MICN001",
      name: "Michelin",
      slug: "michelin",
      country: {
        country: "France",
        display_country: null,
      },
      sector: {
        industry_group: "Tires",
        display_sector: "Tyres",
      },
      position: 1,
      previous_position: 2,
      value: "7929.97",
      rating: "AAA",
      previous_value: "6088.72",
      previous_rating: "AAA-",
    },
    {
      ticker: "BRIE007",
      name: "Bridgestone",
      slug: "bridgestone",
      country: {
        country: "Japan",
        display_country: null,
      },
      sector: {
        industry_group: "Tires",
        display_sector: "Tyres",
      },
      position: 2,
      previous_position: 1,
      value: "6992.39",
      rating: "AAA-",
      previous_value: "7413.49",
      previous_rating: "AA+",
    },
    {
      ticker: "CONL006",
      name: "Continental",
      slug: "continental-2",
      country: {
        country: "Germany",
        display_country: null,
      },
      sector: {
        industry_group: "Tires",
        display_sector: "Tyres",
      },
      position: 3,
      previous_position: 3,
      value: "4755.55",
      rating: "AA+",
      previous_value: "3611.66",
      previous_rating: "AA+",
    },
    {
      ticker: "GOOR005",
      name: "Goodyear",
      slug: "goodyear-2",
      country: {
        country: "United States",
        display_country: null,
      },
      sector: {
        industry_group: "Tires",
        display_sector: "Tyres",
      },
      position: 4,
      previous_position: 4,
      value: "2174.85",
      rating: "AA+",
      previous_value: "2098.62",
      previous_rating: "AA+",
    },
    {
      ticker: "DUNP002",
      name: "Dunlop",
      slug: "dunlop-2",
      country: {
        country: "United States",
        display_country: null,
      },
      sector: {
        industry_group: "Conglomerates - Tires",
        display_sector: "Tyres",
      },
      position: 5,
      previous_position: null,
      value: "1984.00",
      rating: "AA",
      previous_value: null,
      previous_rating: null,
    },
    {
      ticker: "HANK001",
      name: "Hankook",
      slug: "hankook",
      country: {
        country: "South Korea",
        display_country: null,
      },
      sector: {
        industry_group: "Tires",
        display_sector: "Tyres",
      },
      position: 6,
      previous_position: 7,
      value: "1589.79",
      rating: "AA+",
      previous_value: "1381.56",
      previous_rating: "AA",
    },
    {
      ticker: "PIRI001",
      name: "Pirelli",
      slug: "pirelli",
      country: {
        country: "Italy",
        display_country: null,
      },
      sector: {
        industry_group: "Tires",
        display_sector: "Tyres",
      },
      position: 7,
      previous_position: 5,
      value: "1524.41",
      rating: "AAA-",
      previous_value: "1820.70",
      previous_rating: "AA+",
    },
    {
      ticker: "MAXS004",
      name: "Maxxis",
      slug: "maxxis",
      country: {
        country: "China",
        display_country: null,
      },
      sector: {
        industry_group: "Tires",
        display_sector: "Tyres",
      },
      position: 8,
      previous_position: 10,
      value: "900.15",
      rating: "AA-",
      previous_value: "819.85",
      previous_rating: "AA-",
    },
    {
      ticker: "YOKA001",
      name: "Yokohama",
      slug: "yokohama",
      country: {
        country: "Japan",
        display_country: null,
      },
      sector: {
        industry_group: "Tires",
        display_sector: "Tyres",
      },
      position: 9,
      previous_position: 9,
      value: "837.83",
      rating: "AA-",
      previous_value: "1023.88",
      previous_rating: "AA-",
    },
    {
      ticker: "SUMS004",
      name: "Sumitomo Rubber Industries",
      slug: "sumitomo-rubber-industries",
      country: {
        country: "Japan",
        display_country: null,
      },
      sector: {
        industry_group: "Tires",
        display_sector: "Tyres",
      },
      position: 10,
      previous_position: 6,
      value: "601.35",
      rating: "A",
      previous_value: "1576.76",
      previous_rating: "A+",
    },
  ],
};

//   #####    ###     #   #######
//  #     #  #   #   ##   #    #
//        # #     # # #       #
//   #####  #     #   #      #
//  #       #     #   #     #
//  #        #   #    #     #
//  #######   ###   #####   #
// 20210216003212
// https://admin.brandirectory.com/api/league-table/278
export const tire2017 = {
  title: "Tyres 10 2017",
  ranking_id: 278,
  year: 2017,
  previous_year: 2016,
  hero_image_id: 249,
  related_reports: [151],
  sector: "Tyres",
  primary_link_report_id: null,
  secondary_links_report_id: [151],
  columns: [
    {
      title: "2017",
      dataIndex: "position",
      key: "position",
      render: (field, record) => {
        return (
          <span className="gx-font-weight-bold">
            {record.position}{" "}
            {record.position === record.previous_position && (
              <span className="gx-ml-2 gx-text-primary">=</span>
            )}
            {record.position < record.previous_position && (
              <span className="gx-ml-2 gx-text-success">↑</span>
            )}
            {record.position > record.previous_position && (
              <span className="gx-ml-2 gx-text-warning">↓</span>
            )}
          </span>
        );
      },
    },
    {
      title: "2016",
      dataIndex: "previous_position",
      key: "previous_position",
    },
    {
      title: "Нэр",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Улс",
      dataIndex: "country",
      key: "country",
      render: (field, record) => {
        return <span className="gx-fs-sm">{field.country}</span>;
      },
    },
    {
      title: "2017",
      dataIndex: "value",
      key: "value",
      render: (field, record) => {
        return (
          <span className="gx-fs-sm">
            {accounting.formatMoney(field, "$ ", 0, "'")} сая
          </span>
        );
      },
    },
    {
      title: "2016",
      dataIndex: "previous_value",
      key: "previous_value",
      render: (field, record) => {
        return (
          <span className="gx-fs-sm">
            {accounting.formatMoney(field, "$ ", 0, "'")} сая
          </span>
        );
      },
    },
    {
      title: "2017",
      dataIndex: "rating",
      key: "rating",
    },
    {
      title: "2016",
      dataIndex: "previous_rating",
      key: "previous_rating",
    },
  ],
  data: [
    {
      ticker: "BRIE007",
      name: "Bridgestone",
      slug: "bridgestone",
      country: {
        country: "Japan",
        display_country: null,
      },
      sector: {
        industry_group: "Tires",
        display_sector: "Tyres",
      },
      position: 1,
      previous_position: 1,
      value: "7413.49",
      rating: "AA+",
      previous_value: "6528.05",
      previous_rating: "AA+",
    },
    {
      ticker: "MICN001",
      name: "Michelin",
      slug: "michelin",
      country: {
        country: "France",
        display_country: null,
      },
      sector: {
        industry_group: "Tires",
        display_sector: "Tyres",
      },
      position: 2,
      previous_position: 2,
      value: "6088.72",
      rating: "AAA-",
      previous_value: "5921.77",
      previous_rating: "AAA-",
    },
    {
      ticker: "CONL006",
      name: "Continental",
      slug: "continental-2",
      country: {
        country: "Germany",
        display_country: null,
      },
      sector: {
        industry_group: "Tires",
        display_sector: "Tyres",
      },
      position: 3,
      previous_position: 3,
      value: "3611.66",
      rating: "AA+",
      previous_value: "3774.38",
      previous_rating: "AA+",
    },
    {
      ticker: "GOOR005",
      name: "Goodyear",
      slug: "goodyear-2",
      country: {
        country: "United States",
        display_country: null,
      },
      sector: {
        industry_group: "Tires",
        display_sector: "Tyres",
      },
      position: 4,
      previous_position: 4,
      value: "2098.62",
      rating: "AA+",
      previous_value: "1831.17",
      previous_rating: "AA",
    },
    {
      ticker: "PIRI001",
      name: "Pirelli",
      slug: "pirelli",
      country: {
        country: "Italy",
        display_country: null,
      },
      sector: {
        industry_group: "Tires",
        display_sector: "Tyres",
      },
      position: 5,
      previous_position: 5,
      value: "1820.70",
      rating: "AA+",
      previous_value: "1637.42",
      previous_rating: "AA+",
    },
    {
      ticker: "SUMS004",
      name: "Sumitomo Rubber Industries",
      slug: "sumitomo-rubber-industries",
      country: {
        country: "Japan",
        display_country: null,
      },
      sector: {
        industry_group: "Tires",
        display_sector: "Tyres",
      },
      position: 6,
      previous_position: 6,
      value: "1576.76",
      rating: "A+",
      previous_value: "1398.98",
      previous_rating: "AA-",
    },
    {
      ticker: "HANK001",
      name: "Hankook",
      slug: "hankook",
      country: {
        country: "South Korea",
        display_country: null,
      },
      sector: {
        industry_group: "Tires",
        display_sector: "Tyres",
      },
      position: 7,
      previous_position: 7,
      value: "1381.56",
      rating: "AA",
      previous_value: "1312.15",
      previous_rating: "AA",
    },
    {
      ticker: "DUNS003",
      name: "Dunlop Tyres",
      slug: "dunlop",
      country: {
        country: "United Kingdom",
        display_country: null,
      },
      sector: {
        industry_group: "Tires",
        display_sector: "Tyres",
      },
      position: 8,
      previous_position: 9,
      value: "1090.93",
      rating: "AA",
      previous_value: "978.21",
      previous_rating: "AA-",
    },
    {
      ticker: "YOKA001",
      name: "Yokohama",
      slug: "yokohama",
      country: {
        country: "Japan",
        display_country: null,
      },
      sector: {
        industry_group: "Tires",
        display_sector: "Tyres",
      },
      position: 9,
      previous_position: 8,
      value: "1023.88",
      rating: "AA-",
      previous_value: "1167.38",
      previous_rating: "AA-",
    },
    {
      ticker: "MAXS004",
      name: "Maxxis",
      slug: "maxxis",
      country: {
        country: "China",
        display_country: null,
      },
      sector: {
        industry_group: "Tires",
        display_sector: "Tyres",
      },
      position: 10,
      previous_position: 10,
      value: "819.85",
      rating: "AA-",
      previous_value: "780.58",
      previous_rating: "AA",
    },
  ],
};
