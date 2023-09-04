import React, { useState } from "react";
import TutorialDataService from "../services/tutorial.service";
import ITutorialData from '../types/tutorial.type';

const AddTutorial: React.FC = () => {
  const [tutorialData, setTutorialData] = useState<ITutorialData>({
    title: "",
    description: "",
    published: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTutorialData({
      ...tutorialData,
      title: e.target.value,
    });
  };

  const onChangeDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTutorialData({
      ...tutorialData,
      description: e.target.value,
    });
  };

  const saveTutorial = () => {
    const data = {
      title: tutorialData.title,
      description: tutorialData.description,
      published: false,
    };

    TutorialDataService.create(data)
      .then(() => {
        console.log("Created new item successfully!");
        setSubmitted(true);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  const newTutorial = () => {
    setTutorialData({
      title: "",
      description: "",
      published: false,
    });
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newTutorial}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={tutorialData.title}
              onChange={onChangeTitle}
              name="title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              required
              value={tutorialData.description}
              onChange={onChangeDescription}
              name="description"
            />
          </div>

          <button onClick={saveTutorial} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddTutorial;
