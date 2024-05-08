import cls from './CustomInput.module.css'


function CustomInput(props) {
    const {inputValue, placeholder,size,onHandleChange} = props
    return (
      <div className={cls.input_form}>
        <input
          className={`${cls.default_input} ${size}`}
          type="text"
          placeholder={placeholder}
          value={inputValue}
          onChange={onHandleChange}
        />
      </div>
    );
}
export default CustomInput