import React, { useEffect, useState } from "react";
import TutorialDataService from "../services/tutorial.service";
import Tutorial from "./tutorial.component";
import ITutorialData from "../types/tutorial.type";

const TutorialsList: React.FC = () => {
  const [tutorials, setTutorials] = useState<ITutorialData[]>([]);
  const [currentTutorial, setCurrentTutorial] = useState<ITutorialData | null>(
    null
  );
  const [currentIndex, setCurrentIndex] = useState<number>(-1);

  const onDataChange = (items: any) => {
    const tutorialsArray: ITutorialData[] = [];

    items.forEach((item: any) => {
      const key = item.key;
      const data = item.val();
      tutorialsArray.push({
        key: key,
        title: data.title,
        description: data.description,
        published: data.published,
      });
    });

    setTutorials(tutorialsArray);
  };

  const refreshList = () => {
    setCurrentTutorial(null);
    setCurrentIndex(-1);
  };

  const setActiveTutorial = (tutorial: ITutorialData, index: number) => {
    setCurrentTutorial(tutorial);
    setCurrentIndex(index);
  };

  const removeAllTutorials = () => {
    TutorialDataService.deleteAll()
      .then(() => {
        refreshList();
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  useEffect(() => {
    // const unsubscribe = TutorialDataService.getAll().on("value", onDataChange);
    console.log("value", onDataChange);
    // return () => {
    //   unsubscribe();
    // };
  }, []);

  return (
    <div className="list row">
      <div className="col-md-6">
        <h4>Tutorials List</h4>

        <ul className="list-group">
          {tutorials.map((tutorial, index) => (
            <li
              className={`list-group-item ${
                index === currentIndex ? "active" : ""
              }`}
              onClick={() => setActiveTutorial(tutorial, index)}
              key={index}
            >
              {tutorial.title}
            </li>
          ))}
        </ul>

        <button
          className="m-3 btn btn-sm btn-danger"
          onClick={removeAllTutorials}
        >
          Remove All
        </button>
      </div>
      <div className="col-md-6">
        {currentTutorial ? (
          <Tutorial tutorial={currentTutorial} refreshList={refreshList} />
        ) : (
          <div>
            <br />
            <p>Please click on a Tutorial...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TutorialsList;
