import ItemModal from "./ItemModal";

export default {
  title: "MyApp/ItemModal",
  component: ItemModal,
  tags: ["autodocs"],
  argTypes: {},
};

export const Basic = {
  args: {
    name: "두루마리 휴지",
    bookmark: false,
    image_url: "/images/randomimage/1.png"
  },
};
