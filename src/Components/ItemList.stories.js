import ItemList from "./ItemList";

export default {
  title: "MyApp/ItemList",
  component: ItemList,
  tags: ["autodocs"],
  argTypes: {
  },
};

export const FourItems = {
  args: {
    list: [
      {
        id: 0,
        type: "Product",
        title: "두루마리 휴지",
        sub_title: null,
        brand_name: null,
        price: 2500,
        discountPercentage: 35,
        image_url: "/images/randomimage/1.png",
        brand_image_url: null,
        follower: null,
      },
      {
        id: 1,
        type: "Category",
        title: "cat",
        sub_title: null,
        brand_name: null,
        price: null,
        discountPercentage: null,
        image_url: "/images/randomimage/1.png",
        brand_image_url: null,
        follower: null,
      },
      {
        id: 3,
        type: "Brand",
        title: null,
        sub_title: null,
        brand_name: "codestates",
        price: null,
        discountPercentage: null,
        image_url: null,
        brand_image_url: "/images/randomimage/1.png",
        follower: 2143,
      },
      {
        id: 2,
        type: "Exhibition",
        title: "discount",
        sub_title: "good price",
        brand_name: null,
        price: null,
        discountPercentage: null,
        image_url: "/images/randomimage/1.png",
        brand_image_url: null,
        follower: null,
      },
    ],
  },
};

