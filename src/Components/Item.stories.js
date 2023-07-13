import Item from "./Item";

export default {
  title: "MyApp/Item",
  component: Item,
  tags: ["autodocs"],
  argTypes: {},
};

export const Product = {
  args: {
    item: {
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
  },
};
export const Category = {
  args: {
    item: {
      id: 1,
      type: "Category",
      title: "cat",
      sub_title: null,
      brand_name: null,
      price: null,
      discountPercentage: null,
      image_url: "ramdomimage/2",
      brand_image_url: null,
      follower: null,
    },
  },
};
export const Brand = {
  args: {
    item: {
      id: 3,
      type: "Brand",
      title: null,
      sub_title: null,
      brand_name: "codestates",
      price: null,
      discountPercentage: null,
      image_url: null,
      brand_image_url: "ramdomimage/4",
      follower: 2143,
    },
  },
};
export const Exhibition = {
  args: {
    item: {
      id: 2,
      type: "Exhibition",
      title: "discount",
      sub_title: "good price",
      brand_name: null,
      price: null,
      discountPercentage: null,
      image_url: "ramdomimage/3",
      brand_image_url: null,
      follower: null,
    },
  },
};
