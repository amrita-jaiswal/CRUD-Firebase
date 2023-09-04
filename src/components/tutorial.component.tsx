import React, { useState, useEffect } from "react";
import TutorialDataService from "../services/tutorial.service";
import ITutorialData from "../types/tutorial.type";

type Props = {
  tutorial: ITutorialData;
  refreshList: Function;
};

const Tutorial: React.FC<Props> = ({ tutorial, refreshList }) => {
  const [currentTutorial, setCurrentTutorial] = useState<ITutorialData | null>(
    null
  );
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    setCurrentTutorial(tutorial);
  }, [tutorial]);

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (currentTutorial) {
      setCurrentTutorial({
        ...currentTutorial,
        title: e.target.value,
      });
    }
  };

  const onChangeDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (currentTutorial) {
      setCurrentTutorial({
        ...currentTutorial,
        description: e.target.value,
      });
    }
  };

  const updatePublished = (status: boolean) => {
    if (currentTutorial && currentTutorial.key) {
      TutorialDataService.update(currentTutorial.key, {
        published: status,
      })
        .then(() => {
          setCurrentTutorial((prevTutorial) =>
            prevTutorial
              ? {
                  ...prevTutorial,
                  published: status,
                }
              : null
          );
          setMessage("The status was updated successfully!");
        })
        .catch((e: Error) => {
          console.log(e);
        });
    }
  };

  const updateTutorial = () => {
    if (currentTutorial && currentTutorial.key) {
      const data = {
        title: currentTutorial.title,
        description: currentTutorial.description,
      };

      TutorialDataService.update(currentTutorial.key, data)
        .then(() => {
          setMessage("The tutorial was updated successfully!");
        })
        .catch((e: Error) => {
          console.log(e);
        });
    }
  };

  const deleteTutorial = () => {
    if (currentTutorial && currentTutorial.key) {
      TutorialDataService.delete(currentTutorial.key)
        .then(() => {
          refreshList();
        })
        .catch((e: Error) => {
          console.log(e);
        });
    }
  };

  return (
    <div>
      <h4>Tutorial</h4>
      {currentTutorial ? (
        <div className="edit-form">
          <form>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                value={currentTutorial.title}
                onChange={onChangeTitle}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                value={currentTutorial.description}
                onChange={onChangeDescription}
              />
            </div>

            <div className="form-group">
              <label>
                <strong>Status:</strong>
              </label>
              {currentTutorial.published ? "Published" : "Pending"}
            </div>
          </form>

          {currentTutorial.published ? (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updatePublished(false)}
            >
              UnPublish
            </button>
          ) : (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updatePublished(true)}
            >
              Publish
            </button>
          )}

          <button className="badge badge-danger mr-2" onClick={deleteTutorial}>
            Delete
          </button>

          <button
            type="button"
            className="badge badge-success"
            onClick={updateTutorial}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Tutorial...</p>
        </div>
      )}
    </div>
  );
};

export default Tutorial;
