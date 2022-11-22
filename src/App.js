import { useEffect, useState } from "react";

// Icons
import sun from "./assets/icon-sun.svg";
import moon from "./assets/icon-moon.svg";
import searchIcon from "./assets/icon-search.svg";
import location from "./assets/icon-location.svg";
import website from "./assets/icon-website.svg";
import twitter from "./assets/icon-twitter.svg";
import company from "./assets/icon-company.svg";

const App = () => {
  const [user, setUser] = useState(null);
  const [search, setSearch] = useState("");
  const [input, setInput] = useState("");

  useEffect(() => {
    const getData = async() => {
      const data = await fetch("https://api.github.com/users/" + search).then(resp => resp.json());
      console.log(data);
      setUser(data);
    }

    getData();

  }, [search]);

  const sumbitHandler = (e) => {
    e.preventDefault();
    setSearch(input);
  }

  return (
    <div className="App px-6 py-9">
      <header className="flex justify-between pb-9">
        <h1 className="font-bold text-2xl">devfinder</h1>
        <div>
          <p className="flex items-start uppercase text-sm text-blueGray font-bold">Dark <span className="pl-4"><img src={moon} alt="Moon" /></span></p>
          
        </div>
      </header>
      <div>
          <form onSubmit={sumbitHandler} className="flex bg-white rounded-lg items-center drop-shadow-lg">
            <img src={searchIcon} alt="Search" className="w-5 h-auto mx-2" />
            <input type="text" name="username" placeholder="Search GitHub username..." onChange={(e) => setInput(e.target.value)} value={input} className="text-xs text-mainGray placeholder:text-grayBlue focus:outline-none w-full h-full"/>
            <button className="bg-mainBlue text-white rounded-lg px-4 py-3 m-2 font-bold" type="submit">Search</button>
          </form>

        {user != null  ? 
        <div className="bg-white rounded-lg drop-shadow-lg mt-8 px-6 pt-8 pb-12">
          <div className="flex pb-8">
            <img src={user.avatar_url} alt="Profile Picture" className=" rounded-full w-16 h-auto mr-4" />
            <div>
              <h2 className="font-bold">{user.name}</h2>
              <a href={user.html_url} target="_blank" className="text-mainBlue text-xs">@{user.login}</a>
              <p className="text-xs text-grayBlue">Joined 23 Jan 2011</p>
            </div>
          </div>
          <div>
            <p className="text-xs text-blueGray leading-6">{user.bio}</p>
          </div>
          <div className="flex justify-between text-center p-4 bg-offWhite rounded-lg my-5">
            <div>
              <p className="text-blueGray text-xs">Repos</p>
              <p className="font-bold">{user.public_repos}</p>
            </div>
            <div>
              <p className="text-blueGray text-xs">Followers</p>
              <p className="font-bold">{user.followers}</p>
            </div>
            <div>
              <p className="text-blueGray text-xs">Following</p>
              <p className="font-bold">{user.following}</p>
            </div>
          </div>
          <div>
              <p className={`flex items-center py-2 text-xs ${user.location === null ? "text-grayBlue" : "text-blueGray"}`}><img src={location} alt="Location" className="mr-3 w-5" />{user.location === null ? "Not available" : user.location}</p>
              <a className={`flex items-center py-2 text-xs hover:underline ${user.blog === null ? "text-grayBlue" : "text-blueGray"}`} href={user.blog} target="_blank"><img src={website} alt="Website" className="mr-3 w-5" />{user.blog === null ? "Not available" : user.blog}</a>
              <a className={`flex items-center py-2 text-xs hover:underline ${user.twitter_username === null ? "text-grayBlue" : "text-blueGray"}`} href="https://github.blog" target="_blank"><img src={twitter} alt="Twitter" className="mr-3 w-5" />{user.twitter_username === null ? "Not available" : "@" + user.twitter_username}</a>
              <a className={`flex items-center py-2 text-xs hover:underline ${user.company === null ? "text-grayBlue" : "text-blueGray"}`} href="https://github.blog" target="_blank"><img src={company} alt="Company" className="mr-3 w-5" /> {user.company === null ? "Not available" : "@" + user.company}</a>
          </div>
        </div> : null}
      </div>
    </div>
  );
}

export default App;
