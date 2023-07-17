import BookMark from "./BookMark";

export default {
  title: "MyApp/BookMark",
  component: BookMark,
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