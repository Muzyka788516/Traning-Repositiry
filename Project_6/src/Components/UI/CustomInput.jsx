import cls from '../UI/CustomElem.module.css'

function CustomInput(props) {
 const {value,onHandleChange,placeholder} = props
    return (
        
        <div className={cls.inputForm}>
            <input type="text" value={value} onChange={onHandleChange} placeholder={placeholder} />
        </div>
    )
}

export default CustomInput