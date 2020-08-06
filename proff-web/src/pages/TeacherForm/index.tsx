import React, { useState } from "react";
import PageHeader from "../../components/PageHeader";

import "./styles.css";
import Input from "../../components/Input";

import warningIcon from "../../assets/images/icons/warning.svg";
import Textarea from "../../components/Textarea";
import Select from "../../components/Select";

const TeacherForm: React.FC = () => {
  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: "", to: "" },
  ]);

  function addNewScheduleItem() {
    setScheduleItems([
      ...scheduleItems,
      {
        week_day: 0,
        from: "",
        to: "",
      },
    ]);
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="It's wasome that you want to teach!"
        description="Isso aqui é uma descrição de algo"
      />
      <main>
        <fieldset>
          <legend>Your informations</legend>
          <Input name="name" label="Your full name"></Input>
          <Input name="avatar" label="Avatar"></Input>
          <Input name="whatsapp" label="Whatapp"></Input>
          <Textarea name="bio" label="Biography"></Textarea>
        </fieldset>

        <fieldset>
          <legend>About your class</legend>
          <Select
            name="subject"
            label="Subject"
            options={[
              { value: "Artes", label: "Artes" },
              { value: "Math", label: "Artes" },
              { value: "Biology", label: "Artes" },
              { value: "Geograph", label: "Artes" },
              { value: "History", label: "Artes" },
              { value: "Math 2", label: "Artes" },
              { value: "Sports", label: "Artes" },
              { value: "Fights", label: "Artes" },
            ]}
          />
          <Input
            type="money"
            name="cost"
            label="Cost per hour of class"
          ></Input>
        </fieldset>

        <fieldset>
          <legend>
            Aveilability
            <button type="button" onClick={addNewScheduleItem}>
              + New schedule
            </button>
          </legend>
          {scheduleItems.map((scheduleItem) => {
            return (
              <div key={scheduleItem.week_day} className="schedule-item">
                <Select
                  name="subject"
                  label="Week day"
                  options={[
                    { value: "0", label: "Domingo" },
                    { value: "1", label: "Segunda" },
                    { value: "2", label: "Terça" },
                    { value: "3", label: "Quarta" },
                    { value: "4", label: "Quinta" },
                    { value: "5", label: "Sexta" },
                    { value: "6", label: "Sabado" },
                  ]}
                />
                <Input name="from" label="From" type="time"></Input>
                <Input name="to" label="To" type="time"></Input>
              </div>
            );
          })}
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Warning!!" />
            Important! <br />
            Please complete all fields
          </p>
          <button type="button">Salve</button>
        </footer>
      </main>
    </div>
  );
};

export default TeacherForm;
