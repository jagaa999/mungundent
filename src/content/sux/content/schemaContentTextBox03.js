export const schemaContentTextBox03 = {
  component: "div",
  className: "gx-my-5 gx-text-center gx-py-5",
  style: { backgroundColor: "#f7f9fc", width: "100%" },
  children: [
    {
      component: "div",
      className: "gx-fs-sm gx-text-warning",
      text: "Бидний үйлчилгээ",
    },
    {
      component: "div",
      style: { fontSize: "40px", fontWeight: "bold" },
      text: "Бид юу хийдэг вэ?",
    },
    {
      component: "div",
      text:
        "СӨХ-ийн өдөр тутмын автоматжуулсан ажил үйлчилгээг та эндээс олж үзэх болно. Шуурхай, хурдан, алдаа мадаггүй, яг таг, тодорхой найдвартай.",
    },
    {
      component: "Row",
      className: "gx-d-flex",
      children: [
        {
          component: "Col",
          span: "8",
          children: [
            {
              component: "div",
              className: "gx-m-0 gx-p-2 gx-pb-4",
              style: { height: "100%" },
              children: [
                {
                  component: "div",
                  style: {
                    backgroundImage:
                      "url(https://www.flaticon.com/svg/static/icons/svg/535/535248.svg)",
                    backgroundColor: "#fa8c16",
                    backgroundPosition: "center center",
                    backgroundSize: "30px 30px",
                    backgroundRepeat: "no-repeat",
                    display: "inline-block",
                    padding: "32px",
                    margin: "30px",
                    borderRadius: "100%",
                    color: "#fff",
                  },
                },
                {
                  component: "h4",
                  className: "gx-font-weight-bold gx-mb-3",
                  text: "СӨХ-ийн порталын систем",
                },
                {
                  component: "div",
                  text:
                    "Veritech ERP дээр суурилсан СӨХ-ийн иж бүрэн модиулиудын сан",
                },
              ],
            },
          ],
        },
        {
          component: "Col",
          span: "8",
          children: [
            {
              component: "div",
              className: "gx-m-0 gx-p-2 gx-pb-4",
              style: { height: "100%" },
              children: [
                {
                  component: "div",
                  style: {
                    backgroundImage:
                      "url(https://www.flaticon.com/svg/static/icons/svg/535/535241.svg)",
                    backgroundColor: "#fa8c16",
                    backgroundPosition: "center center",
                    backgroundSize: "30px 30px",
                    backgroundRepeat: "no-repeat",
                    display: "inline-block",
                    padding: "32px",
                    margin: "30px",
                    borderRadius: "100%",
                    color: "#fff",
                  },
                },
                {
                  component: "h4",
                  className: "gx-font-weight-bold gx-mb-3",
                  text: "Найдвартай ERP платформ",
                },
                {
                  component: "div",
                  text:
                    "Монголын томоохон компаниудад ажиллаж туршигдсан Veritech ERP платформ дээр ажиллана.",
                },
              ],
            },
          ],
        },
        {
          component: "Col",
          span: "8",
          children: [
            {
              component: "div",
              className: "gx-m-0 gx-p-2 gx-pb-4",
              style: { height: "100%" },
              children: [
                {
                  component: "div",
                  style: {
                    backgroundImage:
                      "url(https://www.flaticon.com/svg/static/icons/svg/535/535266.svg)",
                    backgroundColor: "#fa8c16",
                    backgroundPosition: "center center",
                    backgroundSize: "30px 30px",
                    backgroundRepeat: "no-repeat",
                    display: "inline-block",
                    padding: "32px",
                    margin: "30px",
                    borderRadius: "100%",
                    color: "#fff",
                  },
                },
                {
                  component: "h4",
                  className: "gx-font-weight-bold gx-mb-3",
                  text: "Cloud орчинтой ажиллагаа",
                },
                {
                  component: "div",
                  text:
                    "Бүхэлдээ Cloud орчинд ажиллах тул хэн ч, хаанаас ч хандаж, нэвтэрч ашиглаж болно.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      component: "Button",
      className: "gx-my-4",
      type: "primary",
      text: "Бидний модулиудыг үзэх",
    },
  ],
};
