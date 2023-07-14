import ItemModalStyle from "./styles/ItemModal.styled";

const ItemModal = ({ name, bookmark, image_url, setModalIsOpen }) => {
  const handleClick = () => setModalIsOpen(false)
    return (
    <ItemModalStyle image_url={image_url} onClick={handleClick} >
      <div className="container" onClick={(event) => event.stopPropagation()}>
        <img
          className="close"
          alt="close"
          src="/images/ic-round-close.svg"
          onClick={handleClick}
        ></img>
        <div className="info">{name}</div>
        <div className="shadow"></div>
      </div>
    </ItemModalStyle>
  );
};

export default ItemModal;
