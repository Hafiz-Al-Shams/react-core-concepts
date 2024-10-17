export default function Friend({ friend }) {
    const { email, name } = friend;
    return (
        // ekhane css file ta import kora nai, but jekhane ei Friend component ta call kora hocche sei parent compo file e css ta import kora ache, tai style ta pacche. so, overall compiled hoye gele evabe css ta pabe
        <div className="box">
            <h4>Name: {name}</h4>
            <p>Email: {email}</p>
        </div>
    )
}