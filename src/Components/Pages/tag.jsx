import React, { useState, useEffect } from "react";
import NavBar from "../Layout/navBar";
import Footer from "../Layout/Footer";
import TagCard from "./tagCard";
import { API } from "../../utils";

const Tag = (props) => {
  const [tagList, setTagList] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTags = async () => {
    setLoading(true);
    await API.get("/search/tags")
      .then((response) => {
        setTagList(response.data.data.tags);
        console.log(response.data.data.tags);
        setLoading(false);
      })
      .catch((error) => {
        console.log(`error occured: ${error}`);
        setLoading(false);
      });
  };


  useEffect(() => {
    fetchTags();
  }, []);

  return (
    <div>
      {loading && "loading"}
      <div>
        <NavBar page="tags" />
        <section className="razo-music-charts-area section-padding-80 bg-overlay bg-img jarallax">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-heading text-center white">
                  <h2>TAGS</h2>
                </div>
              </div>
            </div>

            <div>
              {tagList.length > 0
                ? tagList.map((tag) => (
                    <div>
                      <TagCard number={tag.id} tag_name={tag.tag_name} />
                      <br />
                    </div>
                  ))
                : "Nothing"}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};
export default Tag;
