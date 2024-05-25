import cls from '../Comments/Comments.module.css'
import profileLogo from '../../assets/user.svg'

function CommentItem(props) {
    const { autor, comentBody, onHandleClick } = props;

    return (
        <div className={cls.comment}>
            
            {/* удаление поста */}
            <div className={cls.delete} onClick={onHandleClick}>X</div>


        <div className={cls.comment_top}>
          <img src={profileLogo} alt="user profile" />
                <strong>{autor}</strong>
        </div>
            <p>{comentBody}</p>
      </div>
    );
}

export default CommentItem