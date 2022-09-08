import { Link } from "react-router-dom";

export default function CurrentPage(props) {
  const { currentPageData } = props;
  
  return (
    <div>
      {currentPageData.map((item) => (
        <div>
          <Link to="/">Item #{item}</Link>
        </div>
      ))}
    </div>
  )
}