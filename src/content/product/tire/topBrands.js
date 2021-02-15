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
            {accounting.formatMoney(field, "$", 0, "'")}
          </span>
        );
      },
    },
    {
      title: "2019",
      dataIndex: "previous_value",
      key: "previous_value",
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

export const sedanList = [
  {
    image: "crown.jpg",
    title: "Toyota Crown",
    link: "/auction?marka_id=1&model_id=60&yearstart=2011&yearend=2014",
    desc: "Их дунд гарын сэдан, 2011-2014",
  },
  {
    image: "coroallaxio.jpg",
    title: "Toyota Corolla",
    link: "/auction?marka_id=1&model_id=41&yearstart=2011&yearend=2014",
    desc: "Бага гарын сэдан, 2011-2014",
  },
  {
    image: "camry.jpg",
    title: "Toyota Camry",
    link: "/auction?marka_id=1&model_id=25&yearstart=2011&yearend=2014",
    desc: "Бага, дунд гарын сэдан, 2011-2014",
  },
  {
    image: "sai.jpg",
    title: "Toyota Sai",
    link: "/auction?marka_id=1&model_id=6356&yearstart=2011&yearend=2014",
    desc: "Бага гарын шинэ загварын сэдан, 2011-2014",
  },
  {
    image: "allion.jpg",
    title: "Toyota Allion",
    link: "/auction?marka_id=1&model_id=3&yearstart=2011&yearend=2014",
    desc: "Бага гарын сэдан, 2011-2014",
  },
  {
    image: "premio.jpg",
    title: "Toyota Premio",
    link: "/auction?marka_id=1&model_id=55&yearstart=2011&yearend=2014",
    desc: "Бага гарын сэдан, 2011-2014",
  },
  {
    image: "markx.jpg",
    title: "Toyota Mark X",
    link: "/auction?marka_id=1&model_id=122&yearstart=2011&yearend=2014",
    desc: "Дунд гарын сэдан, 2011-2014",
  },
  {
    image: "imprezag4.jpg",
    title: "Subaru Impreza G4",
    link: "/auction?marka_id=7&model_id=9997&yearstart=2011&yearend=2014",
    desc: "Бага, дунд гарын сэдан, 2011-2014",
  },
  {
    image: "teana.jpg",
    title: "Nissan Teana",
    link: "/auction?marka_id=2&model_id=339&yearstart=2011&yearend=2014",
    desc: "Их, дунд гарын сэдан, 2011-2014",
  },
  {
    image: "fuga.jpg",
    title: "Nissan Fuga",
    link: "/auction?marka_id=2&model_id=257&yearstart=2011&yearend=2014",
    desc: "Их, дунд гарын сэдан, 2011-2014",
  },
];

// 1. Crown 2. Corolla 3. Camry 4. Sai 5. Allion
//       6. Premio 7. Mark 8. Impreza 9. Tiida 10. Fuga

export const hatchbackList = [
  {
    image: "prius.jpg",
    title: "Toyota Prius",
    link: "/auction?marka_id=1&model_id=139&yearstart=2011&yearend=2014",
    desc: "Дунд гарын хэчбэк, 2011-2014",
  },
  {
    image: "priusalpha.jpg",
    title: "Toyota Prius Alpha",
    link: "/auction?marka_id=1&model_id=9245&yearstart=2011&yearend=2014",
    desc: "Дунд гарын хэчбэк, 2011-2014",
  },
  {
    image: "insihgt.jpg",
    title: "Honda Insight",
    link: "/auction?marka_id=5&model_id=587&yearstart=2011&yearend=2014",
    desc: "Дунд гарын хэчбэк, 2011-2014",
  },
  {
    image: "aqua.jpg",
    title: "Toyota Aqua",
    link: "/auction?marka_id=1&model_id=9580&yearstart=2011&yearend=2014",
    desc: "Бага гарын хэчбэк, 2011-2014",
  },
  {
    image: "leaf.jpg",
    title: "Nissan Leaf",
    link: "/auction?marka_id=2&model_id=9209&yearstart=2011&yearend=2014",
    desc: "Дунд гарын хэчбэк, 2011-2014",
  },
  {
    image: "fit.jpg",
    title: "Honda Fit",
    link: "/auction?marka_id=5&model_id=582&yearstart=2011&yearend=2014",
    desc: "Бага гарын хэчбэк, 2011-2014",
  },
  {
    image: "vitz.jpg",
    title: "Toyota Vitz",
    link: "/auction?marka_id=1&model_id=205&yearstart=2011&yearend=2014",
    desc: "Бага гарын хэчбэк, 2011-2014",
  },
  {
    image: "march.jpg",
    title: "Nissan March",
    link: "/auction?marka_id=2&model_id=284&yearstart=2011&yearend=2014",
    desc: "Бага гарын хэчбэк, 2011-2014",
  },
  {
    image: "impreza.jpg",
    title: "Subaru Impreza",
    link: "/auction?marka_id=7&model_id=705&yearstart=2011&yearend=2014",
    desc: "Бага, дунд гарын хэчбэк, 2011-2014",
  },
  {
    image: "note.jpg",
    title: "Nissan Note",
    link: "/auction?marka_id=2&model_id=296&yearstart=2011&yearend=2014",
    desc: "Бага гарын хэчбэк, 2011-2014",
  },
];

// Hatchback 1. Prius 20 2.
//       Prius 30 3. Insight 4. Aqua 5. Leaf 6. Fit 7. Vitz 8. March 9. Impreza
//       (hatchback) 10. Note

export const crossoverList = [
  {
    image: "harrier.jpg",
    title: "Toyota Harrier",
    link: "/auction?marka_id=1&model_id=82&yearstart=2011&yearend=2014",
    desc: "Дунд гарын кроссовер, 2011-2014",
  },
  {
    image: "subaru.jpg",
    title: "Subaru Forester",
    link: "/auction?marka_id=7&model_id=703&yearstart=2011&yearend=2014",
    desc: "Бага, дунд гарын кроссовер, 2011-2014",
  },
  {
    image: "rx.jpg",
    title: "Lexus RX",
    link: "/auction?marka_id=23&model_id=6350&yearstart=2011&yearend=2014",
    desc: "Дунд гарын кроссовер, 2011-2014",
  },
  {
    image: "xtrail.jpg",
    title: "Nissan X-Trail",
    link: "/auction?marka_id=2&model_id=355&yearstart=2011&yearend=2014",
    desc: "Бага, дунд гарын кроссовер, 2011-2014",
  },
  {
    image: "kluger.jpg",
    title: "Toyota Kluger",
    link: "/auction?marka_id=1&model_id=99",
    desc: "Дунд гарын кроссовер, (2006 оноос хойш үйлдвэрлээгүй)",
    active: 0,
  },
  {
    image: "vanguard.jpg",
    title: "Toyota Vanguard",
    link: "/auction?marka_id=1&model_id=1853&yearstart=2011&yearend=2014",
    desc: "Бага гарын кроссовер, 2011-2014",
  },
  {
    image: "juke.jpg",
    title: "Nissan Juke",
    link: "/auction?marka_id=2&model_id=8830&yearstart=2011&yearend=2014",
    desc: "Бага гарын кроссовер, 2011-2014",
  },
  {
    image: "outlander.jpg",
    title: "Mitsubishi Outlander",
    link: "/auction?marka_id=4&model_id=534&yearstart=2011&yearend=2014",
    desc: "Бага, дунд гарын кроссовер, 2011-2014",
  },
  {
    image: "rav4.jpg",
    title: "Toyota Rav4",
    link: "/auction?marka_id=1&model_id=150&yearstart=2011&yearend=2014",
    desc: "Бага гарын кроссовер, 2011-2014",
  },
  {
    image: "crv.jpg",
    title: "Honda C-RV",
    link: "/auction?marka_id=5&model_id=574&yearstart=2011&yearend=2014",
    desc: "Бага, дунд гарын кроссовер, 2011-2014",
  },
];

// 1. Harrier 2. Forester 3. Lexus RX 4. X -
//       Trail 5. Kluger 6. Vanguard 7. Juke 8. Outback 9. Rav4 10. C-RV

export const suvList = [
  {
    image: "land200.jpg",
    title: "Toyota Land Cruiser 200",
    link: "/auction?marka_id=1&model_id=102&yearstart=2011&yearend=2014",
    desc: "Их гарын жийп, 2011-2014",
  },
  {
    image: "prado.jpg",
    title: "Toyota Land Cruiser Prado",
    link: "/auction?marka_id=1&model_id=106&yearstart=2011&yearend=2014",
    desc: "Дунд гарын жийп, 2011-2014",
  },
  {
    image: "land100.jpg",
    title: "Toyota Land Cruiser 100",
    link: "/auction?marka_id=1&model_id=102&yearstart=2001&yearend=2007",
    desc: "Их, дунд гарын жийп, 2001-2007",
    active: 0,
  },
  {
    image: "lx570.jpg",
    title: "Lexus LX570",
    link: "/auction?marka_id=23&model_id=26351&yearstart=2011",
    desc: "Их гарын жийп, 2011 оноос",
  },
  {
    image: "hiluxsurf.jpg",
    title: "Toyota Hilux Surf",
    link: "/auction?marka_id=1&model_id=2196",
    desc: "Дунд гарын жийп, 2007 оноос хойш үйлдвэрлээгүй",
    active: 0,
  },
  {
    image: "",
    title: "Land Rover Range Rover Sport",
    link: "/auction?marka_id=34&model_id=3084",
    desc: "Их гарын жийп",
  },
  {
    image: "safari.jpg",
    title: "Nissan Patrol",
    link: "/auction?marka_id=2&model_id=324",
    desc: "Их гарын жийп, Япон аукшинд зөвхөн Safari бий",
    active: 0,
  },
  {
    image: "",
    title: "Lexus LX470",
    link: "/auction?marka_id=23&model_id=26351&yearend=2007",
    desc: "Их, дунд гарын жийп, он хөгширсөн.",
    active: 0,
  },
  {
    image: "land80.jpg",
    title: "Toyota Land Cruiser 80",
    link: "/auction?marka_id=1&model_id=102&yearend=1997",
    desc: "Дунд гарын жийп, 1997 оноос хойш үйлдвэрлээгүй",
    active: 0,
  },
];

// SUV 1. LC 200 2. LC Prado 3. LC 100 4. LX 570 5. Highlander 6. Hilux 7. Range Rover 8. Patrol 9. LX 470  10. LC 80
