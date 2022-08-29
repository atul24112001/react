import Link from "next/link"
import { Fragment } from "react/cjs/react.production.min";

function HomePage() {
  return (
    <Fragment>
      <h1>The Home Page.</h1>
      <ul>
        <li><Link href="/news/n1">News-1</Link></li>
        <li><Link href="/news/n2">News-2</Link></li>
      </ul>
    </Fragment>
  );
}

export default HomePage;