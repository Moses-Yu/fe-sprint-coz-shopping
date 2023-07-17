import BookMark from "./BookMark";
import { ItemModalStyle } from "./styles/ItemModal.styled";

const ItemModal = ({ item, name, bookMarks, image_url, setModalIsOpen, setBookMarks }) => {
  const handleClick = () => setModalIsOpen(false);
  return (
    <ItemModalStyle onClick={handleClick} $image_url={image_url}>
      <div className="container" onClick={(event) => event.stopPropagation()}>
        <img
          className="close"
          alt="close"
          src="/images/ic-round-close.svg"
          onClick={handleClick}
        ></img>
        <div className="info">{name}</div>
        <div className="shadow"></div>
        <BookMark
          $isModal={true}
          item={item}
          bookMarks={bookMarks}
          setBookMarks={setBookMarks}
          setModalIsOpen={setModalIsOpen}
        />
      </div>
    </ItemModalStyle>
  );
};

export default ItemModal;
