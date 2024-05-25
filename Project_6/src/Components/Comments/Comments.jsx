import { useState } from "react";
import cls from "../Comments/Comments.module.css";
import CommentItem from "./Comment-item";
import CustomButton from "../UI/CustomButton";
import CustomInput from "../UI/CustomInput";

function Comments() {

    const [comment, setComment] = useState([])
    const [commentValue, setCommentValue] = useState('')

    // function HandleChange(e) {
    //     setCommentValue(e.target.value)
    //     console.log(e)
    // }
// 2 вариант написания
    const handleChange = (event) => {
        const target = event.target
        setCommentValue(target.value)
        console.log(event);
    }

    const createComment = () => {
        const newComment = {
            id: Date.now(),
            author: 'John Kowalski',
            commentBody: commentValue
        }
        // разворачиваем все посты которые были дл этого и добавляем новый пост
        if (commentValue.length > 0) {
            setComment([...comment, newComment]);
        }
        setCommentValue('')
    }
    // функция удаления
    const removeItem = (commentId) => {
        setComment(comment.filter(item => item.id !== commentId))
    }

    return (
      <div className={cls.comments}>
        <CustomInput value={commentValue} onHandleChange={handleChange} />

        <CustomButton text="Send" onHandleClick={createComment} />

        {comment &&
          comment.map((item) => (
            <CommentItem
              autor={item.author}
              comentBody={item.commentBody}
              onHandleClick={() => removeItem(item.id)}
            />
          ))}
      </div>
    );
}

export default Comments;
