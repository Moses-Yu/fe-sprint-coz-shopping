import ItemModal from "./ItemModal";

export default {
  title: "MyApp/ItemModal",
  component: ItemModal,
  tags: ["autodocs"],
  argTypes: {},
};

export const Basic = {
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
