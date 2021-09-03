import React, { useState, useEffect } from "react"
import { Redirect } from "react-router-dom"
import logo from "../../images/radiologo.png"
import "./style.css"

const Home = () => {

    const [mode, setMode] = useState(false)
    const [searchTerm, setSearchTerm] = useState([])
    const [searchTag, setSearchTag] = useState(null)
    const [searchTopic, setSearchTopic] = useState("")
    const [searchLink, setSearchLink] = useState("")

    const handleSearch = (event) => {
        setSearchTerm(event.target.value)
    }

    const redirectTag = () => {
        if (searchTag !== null) {
            return (
                <Redirect to={{
                    pathname: "/results",
                    search: `search_?tag=name+${searchLink}_id`,
                    state: { tag_name: searchTag }
                }} />
            )
        }
        else if (searchTopic !== "") {
            return (
                <Redirect to={{
                    pathname: "/results",
                    search: `search_?topic=name+${searchLink}_id`,
                    state: { topic_name: searchTopic }
                }} />
            )
        }
        else {
            return (
                <Redirect to="/" />
            )
        }
    }

    const changeForTag = (array, link) => {
        setSearchTag(array)
        setSearchLink(link)
    }

    const changeForTopic = (array, link) => {
        setSearchTopic(array)
        setSearchLink(link)
    }

    const submitSearchTerm = () => {

        if (searchTerm.includes(" ")) {
            //console.log("it has a space")
            let words = searchTerm.split(" ")

            let link = words.join("+")

            changeForTag(words, link)

        } else {
            /* console.log("it has no space") */
            changeForTag(searchTerm, searchLink)
        }
        setMode(true)
    }

    const submitTopic = () => {
        //setSearchTopic(searchTerm)

        if (searchTerm.includes(" ")) {
            //console.log("it has a space")
            let words = searchTerm.split(" ")
            //console.log(words)
            let link = words.join("+")
            //console.log(link)

            changeForTopic(words, link)

            /* console.log("Searchterm",searchTerm)
            console.log("Searchlink",searchLink)
            console.log("SearchTag",searchTag) */
        } else {
            /* console.log("it has no space") */
            changeForTopic(searchTerm, searchLink)
        }
        setMode(true)
    }


    return (
        <div>
            {!mode ?
                <div>
                    <div className="radioBox">
                        <img src={logo} alt="logo" className="App-logo" />
                        <div className="SearchBox">
                            <div>
                                <div className="SearchIcon">
                                    <span>
                                        <svg
                                            focusable="false"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                                        </svg>
                                    </span>
                                </div>

                                <div className="InputBox">
                                    <div>

                                    </div>
                                    <input
                                        maxLength="2048"
                                        name="q"
                                        value={searchTerm}
                                        onChange={handleSearch}
                                        type="text"
                                        aria-autocomplete="both"
                                        aria-haspopup="false"
                                        autoCapitalize="off"
                                        autoComplete="off"
                                        autoCorrect="off"
                                        spellCheck="false"
                                        title="Search"
                                        aria-label="Search"
                                    />
                                </div>

                                {/*<div className="MicroBox">
                                    <div aria-label="Search by Voice" role="button" tabIndex="0">

                                    </div>
                                    <span>
                
                                    </span>
                                    </div>*/
                                }
                            </div>
                        </div>
                    </div>



                    <div className="buttonBox">
                        <button type="button" onClick={submitSearchTerm}>Search by Text</button>
                        <button type="button" onClick={submitTopic} >Search by Topic</button>
                    </div>
                </div>
                :
                redirectTag()
            }
        </div>
    )
}
export default Home