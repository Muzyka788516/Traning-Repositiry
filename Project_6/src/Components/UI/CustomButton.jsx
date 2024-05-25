import cls from "../UI/CustomElem.module.css";

function CustomButton(props) {
    const {text, onHandleClick} = props
  return (
    <div>
          <button className={cls.btn} onClick={onHandleClick}>{text}</button>
    </div>
  );
}

export default CustomButton;
