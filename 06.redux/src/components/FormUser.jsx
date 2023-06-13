import { useDispatch, useSelector } from "react-redux";
import { setEmail, setName } from "../store/user";

export const FormUser = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);

    return (
        <div>
            <h2>Form User</h2>
            <div style={{ textAlign: 'center' }}>Name</div>
            <input
                type="text"
                value={user.name}
                onChange={({ target: { value } }) => dispatch(setName(value))}
            /><br/>
            <div style={{ textAlign: 'center' }}>Email</div>
            <input
                type="email"
                value={user.email}
                onChange={({ target: { value } }) => dispatch(setEmail(value))}
            /><br/>
        </div>
    );
};
