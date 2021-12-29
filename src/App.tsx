import { UserCard } from "./components/UserCard";
import "./styles.css";
import { useAllUsers } from "./hooks/useAllUsers";

// const user: UserProfile = {
//   id: 1,
//   name: "かが",
//   email: "aaa@aaa.ccc",
//   address: "ADDRESS"
// };

export default function App() {
  // カスタムフックを使う
  // 関数の実行結果を受け取れる。ここではその中で定義したgetUsers()も受けとっている
  // use関数で定義したstateも受け取って使える。stateの状態が変わってもリアルタイムに
  // 反映される。
  // 複数の箇所でカスタムフックを使っても、stateはそれぞれ独立となる
  const { getUsers, userProfiles, loading, error } = useAllUsers();
  const onClickFetchUser = () => getUsers();
  return (
    <div className="App">
      <button onClick={onClickFetchUser}>データ取得</button>
      <br />
      {error ? (
        <p style={{ color: "red" }}>データの取得に失敗しました</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {userProfiles.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </>
      )}
    </div>
  );
}
