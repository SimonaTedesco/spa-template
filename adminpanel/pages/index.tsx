import type { NextPage } from 'next'
import Link from 'next/link'


const Home: NextPage = () => {
  return (
    <div >
    <h1>Hello from UiKit!</h1>

    A Heart Icon here: <span className="uk-icon" data-uk-icon="heart"></span>

    <hr/>

    <a href="#">Some Link</a>

    <br/>

    <Link href="/instances">
      <a>Instances go here!</a>
    </Link>

    </div>  
  )
}

export default Home
