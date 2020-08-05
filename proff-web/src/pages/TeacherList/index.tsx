import React from "react";
import PageHeader from "../../components/PageHeader";

import "./styles.css";
import TeachItem from "../../components/TeachItem";

const TeacherList: React.FC = () => {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Those are the teachers available">
        <form id="search-teacher">
          <div className="input-block">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" />
          </div>
          <div className="input-block">
            <label htmlFor="day">Day</label>
            <input type="text" id="Day" />
          </div>
          <div className="input-block">
            <label htmlFor="time">Time in the space!</label>
            <input type="text" id="time" />
          </div>
        </form>
      </PageHeader>
      <main>
        <TeachItem />
        <TeachItem />
        <TeachItem />
        <TeachItem />
        <TeachItem />
      </main>
    </div>
  );
};

export default TeacherList;
