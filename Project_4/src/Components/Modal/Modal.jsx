import cls from '../Modal/Modal.module.css'
import CustomButton from '../UI/CustomButton';
// import cls from './Modal.module.css'

function Modal(props) {

    return (
      <div className={cls.modal}>
        <div className={cls.modal_content}>
          <h3>Modal</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            dolore quae fuga deleniti odit voluptatum voluptas, quos quas ex
            commodi sequi doloremque ipsum hic quia qui assumenda veritatis
            velit repellat amet tempora iure. Quos ad pariatur excepturi
            asperiores unde eius mollitia voluptas nobis eveniet? Similique
            ipsum officiis obcaecati. Ut, ipsa!
          </p>
          <CustomButton text="close" onHandleClick={props.onHandleClick} />
        </div>
      </div>
    );
}

export default Modal