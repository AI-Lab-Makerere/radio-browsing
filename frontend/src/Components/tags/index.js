import React, { useState, useEffect } from "react";
import { Redirect } from "react-router";
import { API } from "../../utils";
import Header from "../Layout/header"
import Tag from "./Tag"
import { useDrop } from "react-dnd";

const Tags = () => {
  const [tags, setTags] = useState([]);
  const [selected, setSelected] = useState([]);
  const [filteredTags, setFilteredTags] = useState([]);
  const [link, setLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([])
  const [mode, setMode] = useState(false)



  const [{ isOver }, addToSelectedRef] = useDrop({
    accept: "tags",
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  })

  const [{ isOver: isTagOver }, removeFromSelectedRef] = useDrop({
    accept: "selected",
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  })

  const moveTag = (item) => {
    //console.log(item);
    if (item && item.type === "tag") {
      //Accepting tag into selected
      setSelected((_selected) => [..._selected, tags[item.index]]);
      setTags((_tags) => _tags.filter((_, idx) => idx !== item.index));
    } else {
      //Removing a tag from selected
      setTags((_tags) => [..._tags, selected[item.index]]);
      setSelected((_selected) => _selected.filter((_, idx) => idx !== item.index));
    }
  };

  const getTags = async () => {

    await API.get("/search/tags")
      .then((response) => {

        setTags(response.data.data.tags);
        setLoading(false);

      })
      .catch((error) => {

        console.log(`error occurred ${error}`);
        setLoading(false);

      });
  };

  const getData = async () => {
    await API.post(
      '/search_tag',
      {
        tag_name: selected
      }
    )
      .then((response) => {
        setData(response.data.data.Audios)
        //console.log(response.data.data.Audios)
        setLoading(false)
        //console.log(`lenght ${audios.length}`)
      })
      .catch((error) => {
        console.log(`error occurred ${error}`)
        setLoading(false)
      })
  }

  const filterTags = (array) => {
    for (let i = 0; i < array.length; i++) {
      setSelected([...selected, array[i].tag_name])
      console.log(array[i].tag_name)
    }
  }


  const handleSubmit = () => {
    return (
      <Redirect to={{
        pathname: "/results",
        search: `search_?tag=name+${link}_id`,
        state: { selected: filteredTags }
      }} />
    )
  }

  const callLink = () => {
    let str = ""
    for (let j = 0; j < selected.length; j++) {
      str = str.concat(selected[j].tag_name, "+")
    }
    setLink(str)
  }

  const handleSearch = () => {
    filterTags(selected)
    callLink()
    setMode(true)
  }

  useEffect(() => {

    getTags();

  }, []);

  return (
    <div>
      {!mode ?
        <>
          <Header title={<i className="bi-tags-fill"> tags</i>} />

          <div className="container" style={{ marginTop: "100px" }}>
            <div class="row">
              <div
                class="col-lg-6 video-box align-self-baseline"
                ref={removeFromSelectedRef}
                style={{ height: "200px" }}
                data-aos="fade-right"
                data-aos-delay="100"
              >
                <i>
                  <h2>Available tags</h2>
                  <p>
                    Drag and drop tags you'd like to base your search on to 'search
                    tags'
                  </p>
                </i>

                {tags.length > 0 ? tags.map((tag, idx) => (
                  <Tag draggable key={tag.id} name={tag.tag_name} index={idx} id={tag.id} tag_type="tag" onDropTag={moveTag} />
                ))
                  :
                  <p>No tags available</p>
                }
              </div>

              <div
                class="col-lg-6 pt-3 pt-lg-0 content searchTagDiv"
                ref={addToSelectedRef}
                style={{ height: "400px" }}
                data-aos="fade-left"
                data-aos-delay="100"
              >
                <i>
                  <h4 className="text-muted">search tags</h4>
                </i>
                {selected.length < 0 ?

                  <p>None Selected</p>
                  :
                  selected.map((single, idx) => (
                    <Tag key={single.id} name={single.tag_name} index={idx} id={single.id} tag_type="selected" onDropTag={moveTag} />
                  )
                  )

                }

                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    right: "6px",
                    fontSize: "2em",
                  }}

                >

                  <button class="twitter" onClick={handleSearch}>
                    <i class="bi-search"></i>search
                  </button>
                </div>
              </div>
            </div>
          </div>
          {filteredTags.length < 1 ? <span>Nothing</span> : filteredTags.map((tag) => (<li>{tag}</li>))}
        </>
        :
        handleSubmit()
      }
    </div>
  );
};

export default Tags;
