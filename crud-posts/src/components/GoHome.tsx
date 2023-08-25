import { Link } from "react-router-dom"

export default function GoHome() {
  return (
    <Link to="/">
        <button className="btn-back">На главную</button>
    </Link>
  )
}
