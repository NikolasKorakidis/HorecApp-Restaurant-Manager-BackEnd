"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "items",
      [
        {
          name: "Coca-Cola",
          price: 3,
          picture:
            "https://www.cokesolutions.com/content/dam/cokesolutions/us/images/Products/Coca-Cola-glass.jpg",
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Fanta",
          price: 3,
          picture:
            "https://www.drinksupermarket.com/media/catalog/product/3/8/381717001_fanta-orange-330ml_temp.jpg",
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sparkling Water",
          price: 3,
          picture:
            "https://images-na.ssl-images-amazon.com/images/I/71yezRmNcHL._SY550_.jpg",
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Still Water",
          price: 3,
          picture:
            "https://produits.bienmanger.com/37010-0w470h470_Veen_Velvet_Still_Water_From_Finland.jpg",
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Heineken",
          price: 3,
          picture:
            "https://cdn.shopify.com/s/files/1/0078/7038/2195/products/heineken_650ml_grande.png?v=1586782473",
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Affligem Blonde",
          price: 3.5,
          picture:
            "https://cdn.webshopapp.com/shops/65337/files/283359270/mag-affligem-blond.jpg",
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Lagunitas IPA",
          price: 5,
          picture:
            "https://dydza6t6xitx6.cloudfront.net/ci-lagunitas-ipa-ea3c01b7b5a23bd8.png",
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Brand Weizen",
          price: 4,
          picture:
            "https://upload.wikimedia.org/wikipedia/commons/6/6c/Brand_Weizen_2014.jpg",
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sauvignon Blanc",
          price: 5,
          picture:
            "https://cdn11.bigcommerce.com/s-4revryn/images/stencil/2048x2048/products/3296/3840/2__32937.1514240756.jpg?c=2",
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Chardonnay",
          price: 5,
          picture:
            "https://products2.imgix.drizly.com/ci-woodbridge-chardonnay-f76e5cf7980ba335.jpeg?auto=format%2Ccompress&fm=jpg&q=20",
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Verdejo",
          price: 6,
          picture:
            "https://www.henribloem.nl/files/pimages/Spanje-wit-BodegasMonteabellon-Verdejo-WEB-1200-1200.jpg",
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cabernnet Sauvignon",
          price: 5,
          picture:
            "https://sarap.online/wp-content/uploads/2020/05/kavaklidere-ancyra-cabernet-sauvignon-und-syrah.jpg",
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Porto",
          price: 8,
          picture:
            "https://produits.bienmanger.com/36661-0w600h600_Red_Porto_Ferreira_Tawny.jpg",
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mavrodaphne",
          price: 4,
          picture:
            "https://cdn.webshopapp.com/shops/239885/files/200278886/650x750x2/image.jpg",
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "I am Rose",
          price: 5,
          picture:
            "https://products3.imgix.drizly.com/ci-cupcake-rose-bdbfa5948dfa1627.jpeg?auto=format%2Ccompress&fm=jpg&q=20",
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Chloe Rose",
          price: 7,
          picture:
            "https://dydza6t6xitx6.cloudfront.net/ci-chloe-central-coast-rose-95c7a547fee43da5.jpeg",
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Smirnoff",
          price: 5,
          picture:
            "https://dydza6t6xitx6.cloudfront.net/ci-smirnoff-raspberry-1b7fd8b32d504b40.jpeg",
          categoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Absolut",
          price: 5,
          picture:
            "https://media-verticommnetwork1.netdna-ssl.com/wines/absolut-vodka-350ml-1195115.jpg",
          categoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Johny Walker",
          price: 5,
          picture:
            "https://d3r6kbofdnmd8.cloudfront.net/media/catalog/product/cache/image/1536x/a4e40ebdc3e371adff845072e1c73f37/9/8/98699_Johnnie-Walker-Red-Label-10L-40-Vol_4.jpg",
          categoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Chivas",
          price: 8,
          picture:
            "https://cdn.caskers.com/catalog/product/cache/58d2dbfee8b7676ae48fcd750e577298/c/h/chivas_12-01.jpg",
          categoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Hendrix",
          price: 7,
          picture:
            "https://ginfling.nl/pub/media/catalog/product/cache/8981f8e3f39dfdcfb5ae82d173e66caa/h/e/hendricks_gin_1.75l.jpg",
          categoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Gordon's Gin",
          price: 5,
          picture: "https://www.drank.nl/wp-content/uploads/2016/03/14636.jpg",
          categoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Old Fashioned",
          price: 12,
          picture:
            "https://images.immediate.co.uk/production/volatile/sites/2/2020/02/Cocktail-3-bb1c21e.jpg?quality=90&crop=242px%2C317px%2C1907px%2C820px&resize=960%2C408",
          categoryId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Dry Martini",
          price: 12,
          picture:
            "https://www.acouplecooks.com/wp-content/uploads/2020/04/Dirty-Martini-004.jpg",
          categoryId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Americano",
          price: 12,
          picture:
            "https://www.giovanniceccarelli.com/wp-content/uploads/2017/07/americano-cocktail.jpg",
          categoryId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Margarita",
          price: 11,
          picture:
            "https://www.cocktail-recept.nl/stat/img/1280/FrozenMargarita.jpg",
          categoryId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Fries",
          price: 5,
          picture:
            "https://c.ndtvimg.com/french-fries_625x300_1528454061766.jpg",
          categoryId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bitterballen",
          price: 8,
          picture:
            "https://www.jocooks.com/wp-content/uploads/2017/03/bitterballen-1-3-500x375.jpg",
          categoryId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kaastengels",
          price: 7,
          picture:
            "https://pbs.twimg.com/profile_images/2298468319/0fcw90dhx2891ov12ii6.jpeg",
          categoryId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mix Platter",
          price: 15,
          picture:
            "https://i.pinimg.com/originals/1c/34/07/1c34079866e28b3675eacbecef03232f.jpg",
          categoryId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Spare Ribs",
          price: 17,
          picture:
            "https://img.taste.com.au/_YIcBWjs/taste/2016/11/twice-cooked-pork-spare-ribs-107354-1.jpeg",
          categoryId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "House Burger",
          price: 15,
          picture:
            "https://burgerchickenhouse.nl/image/cache/data/slideshow/slide2-940x409.jpg",
          categoryId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Chicken Salad",
          price: 12,
          picture:
            "https://healthyfitnessmeals.com/wp-content/uploads/2020/05/instagram-In-Stream_Square___Greek-chicken-salad-4.jpg",
          categoryId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cheesecake",
          price: 6,
          picture:
            "https://www.thespruceeats.com/thmb/W-Ur-ceUIwo0XLyBPzT2VwcwgJU=/1500x1000/filters:fill(auto,1)/gluten-free-new-york-cheesecake-1450985-hero-01-dc54f9daf38044238b495c7cefc191fa.jpg",
          categoryId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tiramissu",
          price: 4,
          picture:
            "https://st.depositphotos.com/3220235/4198/i/950/depositphotos_41986283-stock-photo-portion-of-italian-dessert-tiramissu.jpg",
          categoryId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Apple Pie",
          price: 4,
          picture:
            "https://www.chewoutloud.com/wp-content/uploads/2012/12/apple-pie-3.jpg",
          categoryId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("items", null, {});
  },
};
