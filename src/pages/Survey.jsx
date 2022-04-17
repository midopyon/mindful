import React from "react";
import "survey-core/modern.min.css";
import { StylesManager } from "survey-core";
import { surveyData } from "../constants/survey";
import { Survey } from "survey-react-ui";

StylesManager.applyTheme("modern");

function sendDataToServer(survey) {
  //send Ajax request to your web server
  alert("The results are: " + JSON.stringify(survey.data));
}

const SurveyPage = () => {
  return (
      <Survey json={surveyData} onComplete={sendDataToServer} />
  );
};

export default SurveyPage;
