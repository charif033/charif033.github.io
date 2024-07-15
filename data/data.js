const products = [
    {
        id: 1,
        name: "Asus Vivobook 16 X1605VA-MB984WS",
        description: "Intel Core i9-13900H / Intel Iris Xe Graphics G7 96EUs / 16 GB DDR4 / 512 GB SSD PCIe M.2 Gen 3 / 16.0 inch WUXGA (1920x1200) Full HD+",
        price: 28990,
        image: "data/images/1.webp"
    },
    {
        id: 2,
        name: "HP Victus Gaming 16-d1225TX",
        description: "Intel Core i5-12500H / GeForce RTX 3050 / 16 GB DDR5 / 512 GB SSD PCIe M.2 Gen 4 / 16.1 inch (1920x1080) Full HD",
        price: 24990,
        image: "data/images/2.webp"
    },
    {
        id: 3,
        name: "HP Victus Gaming 15-fa0154TX",
        description: "Intel Core i5-12450H / GeForce RTX 3050 / 16 GB DDR4 / 512 GB SSD PCIe M.2 Gen 4 / 15.6 inch (1920x1080) Full HD",
        price: 24990,
        image: "data/images/3.webp"
    },
    {
        id: 4,
        name: "Acer Nitro V 15 ANV15-51-574G",
        description: "Intel Core i5-13420H / GeForce RTX 4050 / 16 GB DDR5 / 512 GB SSD PCIe M.2 Gen 4 / 15.6 inch (1920x1080) Full HD",
        price: 29990,
        image: "data/images/4.webp"
    },
    {
        id: 5,
        name: "Asus Vivobook Pro 15 D6500QE-HN701W",
        description: "AMD Ryzen 7 5800H / GeForce RTX 3050 Ti / 16 GB DDR4 On Board / 512 GB SSD PCIe M.2 Gen 3 / 15.6 inch (1920x1080) Full HD",
        price: 22990,
        image: "data/images/5.webp"
    },
    {
        id: 6,
        name: "Acer Predator Helios Neo 16 PHN16-71-58MD",
        description: "Intel Core i5-13500HX / GeForce RTX 4050 / 16 GB DDR5 / 512 GB SSD PCIe M.2 Gen 4 / 16.0 inch WUXGA (1920x1200) Full HD+",
        price: 35990,
        image: "data/images/6.webp"
    },
    {
        id: 7,
        name: "Acer Nitro 16 AN16-41-R4ZR",
        description: "AMD Ryzen 5 7640HS / GeForce RTX 4050 / 16 GB DDR5 / 512 GB SSD PCIe M.2 Gen 4 / 16.0 inch WUXGA (1920x1200) Full HD",
        price: 33990,
        image: "data/images/7.webp"
    },
    {
        id: 8,
        name: "Asus TUF Gaming A16 Advantage Edition FA617NS-N3085W",
        description: "AMD Ryzen 7 7735HS / Radeon RX 7600S / 16 GB DDR5 / 512 GB SSD PCIe M.2 Gen 4 / 16.0 inch WUXGA (1920x1200) Full HD+",
        price: 34990,
        image: "data/images/8.webp"
    },
    {
        id: 9,
        name: "HP Victus Gaming 16-e1112AX",
        description: "AMD Ryzen 5 6600H / GeForce RTX 3050 Ti / 8 GB DDR5 / 512 GB SSD PCIe M.2 Gen 4 / 16.1 inch (1920x1080) Full HD",
        price: 21990,
        image: "data/images/9.webp"
    },
    {
        id: 10,
        name: "Lenovo IdeaPad Slim 3 14IAH8-83EQ002YTA",
        description: "Intel Core i5-12450H / Intel UHD Graphics Xe G4 / 16 GB LPDDR5 On Board / 512 GB SSD PCIe M.2 Gen 4 / 14.0 inch WUXGA (1920x1200) Full HD",
        price: 17990,
        image: "data/images/10.webp"
    },
    {
        id: 11,
        name: "HP Victus Gaming 16-r0133TX",
        description: "Intel Core i5-13500HX / GeForce RTX 4050 / 16 GB DDR5 / 512 GB SSD PCIe M.2 Gen 4 / 16.1 inch (1920x1080) Full HD",
        price: 34990,
        image: "data/images/11.webp"
    },
    {
        id: 12,
        name: "Asus ROG Strix G16 G614JU-N3103W",
        description: "Intel Core i9-13980HX / GeForce RTX 4050 / 16 GB DDR5 / 512 GB SSD PCIe M.2 Gen 4 / 16 inch WQXGA (2560x1600) 2K",
        price: 54990,
        image: "data/images/12.webp"
    },
    {
        id: 13,
        name: "Asus TUF Gaming A15 FA507NU-LP031W",
        description: "AMD Ryzen 7 7735HS / GeForce RTX 4050 / 16 GB DDR5 / 512 GB SSD PCIe M.2 Gen 4 / 15.6 inch (1920x1080) Full HD",
        price: 33990,
        image: "data/images/13.webp"
    },
    {
        id: 14,
        name: "Asus TUF Gaming A15 FA507NU-LP023W",
        description: "AMD Ryzen 7 7735HS / GeForce RTX 4060 / 16 GB DDR5 / 512 GB SSD PCIe M.2 Gen 4 / 15.6 inch (1920x1080) Full HD",
        price: 38990,
        image: "data/images/14.webp"
    },
    {
        id: 15,
        name: "Lenovo LOQ 15APH8-82XT004GTA",
        description: "AMD Ryzen 7 7840HS / GeForce RTX 4050 / 16 GB DDR5 / 512 GB SSD PCIe M.2 Gen 4 / 15.6 inch (1920x1080) Full HD",
        price: 32990,
        image: "data/images/15.webp"
    },
    {
        id: 16,
        name: "Asus Vivobook 16 X1605ZA-MB523WS",
        description: "Intel Core i5-12500H / Intel Iris Xe Graphics G7 96EUs / 16 GB DDR4 / 512 GB SSD PCIe M.2 Gen 3 / 16.0 inch WUXGA (1920x1200) Full HD+",
        price: 18990,
        image: "data/images/16.webp"
    },
    {
        id: 17,
        name: "Asus Vivobook 14X M1404FA-NK552WS",
        description: "AMD Ryzen 5 7520U / Radeon 610M / 16 GB LPDDR5 On Board / 512 GB SSD PCIe M.2 Gen 3 / 14 inch (1920x1080) Full HD",
        price: 16490,
        image: "data/images/17.webp"
    },
    {
        id: 18,
        name: "HP Victus Gaming 15-fa1069TX",
        description: "Intel Core i5-13500H / GeForce RTX 4050 / 16 GB DDR4 / 512 GB SSD PCIe M.2 Gen 4 / 15.6 inch (1920x1080) Full HD",
        price: 29990,
        image: "data/images/18.webp"
    },
    {
        id: 19,
        name: "Asus TUF Gaming A15 FA507RF-HN018W",
        description: "AMD Ryzen 7 6800HS / GeForce RTX 2050 / 8 GB DDR5 / 512 GB SSD PCIe M.2 Gen 3 / 15.6 inch (1920x1080) Full HD",
        price: 22990,
        image: "data/images/19.webp"
    },
    {
        id: 20,
        name: "Gigabyte G5 KF-E3TH313SH",
        description: "Intel Core i5-12500H / GeForce RTX 4060 / 16 GB DDR4 / 512 GB SSD PCIe M.2 Gen 4 / 15.6 inch (1920x1080) Full HD",
        price: 29990,
        image: "data/images/20.webp"
    },
    {
        id: 21,
        name: "Asus Vivobook 15 X1502ZA-EJ506W",
        description: "Intel Core i5-1235U / Intel UHD Graphics Xe G4 / 8 GB DDR4 On Board / 512 GB SSD PCIe M.2 Gen 3 / 15.6 inch (1920x1080) Full HD",
        price: 14990,
        image: "data/images/21.webp"
    },
    {
        id: 22,
        name: "Acer Nitro V 15 ANV15-51-578S",
        description: "Intel Core i5-13420H / GeForce RTX 2050 / 16 GB DDR5 / 512 GB SSD PCIe M.2 Gen 4 / 15.6 inch (1920x1080) Full HD",
        price: 22990,
        image: "data/images/22.webp"
    },
    {
        id: 23,
        name: "Asus Vivobook 16X K3605ZC-N1787W",
        description: "Intel Core i7-12650H / GeForce RTX 3050 / 16 GB DDR4 / 512 GB SSD PCIe M.2 Gen 3 / 16.0 inch WUXGA (1920x1200) Full HD",
        price: 31990,
        image: "data/images/23.webp"
    },
    {
        id: 24,
        name: "Acer Nitro 5 AN515-58-55UB",
        description: "Intel Core i5-12500H / GeForce RTX 3050 / 8 GB DDR4 / 512 GB SSD PCIe M.2 / 15.6 inch (1920x1080) Full HD",
        price: 25990,
        image: "data/images/24.webp"
    },
];

export { products };