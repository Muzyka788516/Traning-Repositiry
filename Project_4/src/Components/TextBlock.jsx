import CustomButton from "./UI/CustomButton"

function TextBlock(prpos) {
    const { title, description, onHandleClick } = prpos;
    
    return (
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
            <CustomButton text='delete' onHandleClick={ onHandleClick} />
        </div>
    )

}
export default TextBlock