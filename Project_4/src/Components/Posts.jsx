import { useState } from "react";
import { postslist } from "../config/posts";
import TextBlock from "./TextBlock";
import CustomButton from "./UI/CustomButton";
import CustomInput from "./UI/CustomInput";

function Posts() {

  const [titleValue, setTitleValue] = useState('')
  const [descriptionValue, setDescriptionValue] = useState('')
  const [posts, setPosts] = useState(postslist)

  function onTitleChange(e) {
    setTitleValue(e.target.value)
  }
  function onDescriptionChange(e) {
    setDescriptionValue(e.target.value)
  }
  function createPost() {
    const newPost = {
      id: Date.now(),
      title: titleValue,
      description: descriptionValue,
    }
    setPosts([...posts, newPost])
    setTitleValue('')
    setDescriptionValue('')
  }
  function removePost(postId) {
    setPosts(posts.filter((posts) => posts.id !== postId))

  }

  return (
    <div>
      <CustomInput
        inputValue={titleValue}
        placeholder="title"
        onHandleChange={onTitleChange}
      />
      <CustomInput
        inputValue={descriptionValue}
        placeholder="title"
        onHandleChange={onDescriptionChange}
      />
      <CustomButton text="Create Post" onHandleClick={createPost} />

      {posts.map((item, index) => (
        <TextBlock
          title={item.title}
          description={item.description}
          key={index}
          onHandleClick={() => removePost(item.id)}
        />
      ))}
    </div>
  ); 
}
export default Posts;
