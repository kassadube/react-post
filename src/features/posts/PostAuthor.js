import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";


function PostAuthor({userId}) {
    const users = useSelector(selectAllUsers);
    const author = users.find(u=> u.id === userId);

  return (
    <span>by {author ? author.name : "Unknow Author"}</span>
  )
}

export default PostAuthor