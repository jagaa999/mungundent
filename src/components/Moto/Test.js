
import react from "react";

const myData = [
    {
        sectionCode: '1'  
        widgetCode: 'Banner101', 
        pageSize: 1, 
        widgetDtl: [
            {
                positionCode: '0', 
                fieldPath: 'photo',
            }, 
            {
                positionCode: '1', 
                fieldPath: 'title',
            }, 
            {
                positionCode: '2', 
                fieldPath: 'description',
            }, 
            {
                positionCode: '3', 
                fieldPath: 'buttonText',
            }
        ], 
        result: [
            total: 1, 
            cache: "1",
            id: "8787879654",
            rows: [
                {
                    photo: "kia_wallpaper.jpg",
                    title: 'Kia K5', 
                    description: '2021 онд цоо шинээр гарна.', 
                    buttontext:'Танилцах',
                    buttonlink:  'https://kia.mn/k5',
                }
            ]
        ]
    },
    {
        sectionCode: '2'  
        widgetCode: 'Text101', 
        pageSize: 1, 
        option: {
            // back (color, url)
            // border
            // padding
            // margin
            // color
        }
        widgetDtl: [
            {
                positionCode: '0', 
                fieldPath: 'title',
                option: {
                    // back (color, url)
                    // border
                    // padding
                    // margin
                    // color
                }
            }, 
            {
                positionCode: '1', 
                fieldPath: 'description',
            }
        ], 
        result: [
            total: 1, 
            rows: [
                {
                    title: "Цоо шинэ K5",
                    description: 'Автомашин үйлдвэрлэлийн орчин үеийн түүхнээ үе хоорондох хамгийн аварга дэвшлийг төлөөлж буй шинэ K5 загвар нь дунд оврын седанд хувьсгалт хийц-дизайн, сайжруулсан аюулгүй байдал, хурд хүчний “N3” ‘платформ, турбокомрессорт хөдөлгүүр, AWD сонголт, нэн шинэ үеийн технологи авчирлаа.'
                }
            ]
        ]
    },
]